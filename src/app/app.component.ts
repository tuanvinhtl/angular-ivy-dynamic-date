import {
  Component,
  VERSION,
  AfterViewInit,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  // @ViewChild('el') el: any;
  @ViewChild('el', { static: true }) el: ElementRef;
  name = 'Angular ' + VERSION.major;
  calendar = [];
  maxScrollLeft = 0;
  constructor(private cdr: ChangeDetectorRef) {
    const startWeek = moment().startOf('month');
    const endWeek = moment().endOf('month');

    const diffDate = endWeek.diff(startWeek, 'days');
    console.log(startWeek);
    let calendar = [startWeek];
    for (var week = 0; week < diffDate; week++) {
      calendar.push(moment(startWeek).add(week + 1, 'day'));
    }
    this.calendar = calendar;
  }

  onScroll(el: Event) {
    if (
      this.el.nativeElement.scrollLeft ===
      this.el.nativeElement.scrollWidth - this.el.nativeElement.clientWidth
    ) {
      let lastElement = this.calendar.slice(-1);
      for (var week = 0; week < 10; week++) {
        this.calendar.push(moment(lastElement[0]).add(week + 1, 'day'));
      }
    }
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
}
