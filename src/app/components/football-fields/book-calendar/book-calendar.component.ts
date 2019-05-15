import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for dateClick

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

  constructor() { }

  ngOnInit() {
    console.log(new Date)
  }

  bookField(arg) {

    if (confirm('Would you like to add an event to ' + arg.date + ' ?')) {
      let startTime =  new Date(arg.date);
      let endtime = new Date(arg.date);
      startTime.setHours( this.startHour )
      endtime.setHours( this.endHour );

      this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
        title: 'New Event',
        start: startTime,
        end:  endtime,
        allDay: false
      })
    }

  }

}
