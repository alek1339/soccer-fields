import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for dateClick
import { ValidateBookForm } from "../../../validators/book-form.validator";
import { ReservationService } from "../../../services/reservations.service";
import { IReservation } from 'src/app/models/reservations/resetvations';
import { Auth } from "../../../core/auth";
import alertify from "alertifyjs";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-book-calendar',
  templateUrl: './book-calendar.component.html',
  styleUrls: ['./book-calendar.component.css']
})
export class BookCalendarComponent implements OnInit {

  @ViewChild('calendar') calendarComponent: FullCalendarComponent; // the #calendar in the template

  @Input() startHour: number ;
  @Input() endHour: number ;

  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, timeGridPlugin, interactionPlugin];
  calendarWeekends = true;
  calendarEvents: EventInput[] = [];
  fieldId: string = "";
  reservations: IReservation[];

  constructor(
    private route: ActivatedRoute,
    private reservationService: ReservationService,
    private auth: Auth
  ) { }

  ngOnInit() {
    console.log(new Date)
    this.route.params.subscribe(params => {
      this.fieldId = params["id"];
    });

    this.reservationService.getById(this.fieldId).subscribe(data => {
      this.reservations = data;
    });
  }

  bookField(arg) {

    if (confirm('Would you like to add an event to ' + arg.date + ' ?')) {
      let startTime =  new Date(arg.date);
      let endTime = new Date(arg.date);
      startTime.setHours( this.startHour );
      endTime.setHours( this.endHour );

      // UI only - display events in calendar
      this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
        title: 'New Event',
        start: startTime,
        end:  endTime,
        allDay: false
      });

      // add reservation to database
      if (startTime && endTime) {
        this.submitReservation( startTime, endTime, this.fieldId );
      }
    }

  }

  // add reservation to database
  submitReservation( start: any, end: any , fId: string ) {
    console.log(start)
    if (ValidateBookForm( start , end , this.reservations)) {
      const reservation = {
        reservedField: fId,
        startingTime: start ,
        endTime: end,
        reservingUserId: this.auth.getUserId()
      };
      this.reservationService.add(reservation);
    } else {
      alertify.error("You can not make a reservation in this time!");
    }
  }

}
