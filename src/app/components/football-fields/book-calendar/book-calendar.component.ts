import { Component, OnInit, ViewChild } from '@angular/core';
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

  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, timeGridPlugin, interactionPlugin];
  calendarWeekends = true;
  calendarEvents: EventInput[] = [
    { title: 'Event Now', start: new Date(), end: new Date() }
  ];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.calendarComponent)
  }



  handleDateClick(arg) {

    //console.log(arg)

    if (confirm('Would you like to add an event to ' + arg.date + ' ?')) {
      let endtime = new Date(arg.date);
      endtime.setHours( endtime.getHours() + 2 );

      this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
        title: 'New Event',
        start: arg.date,
        end:  endtime,
        allDay: false
      })
    }
  }

}
