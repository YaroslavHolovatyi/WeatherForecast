import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent {
  @Input() smaller: boolean = false;

  date: Date = new Date();

  formattedDate = this.date.toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
  });
}
