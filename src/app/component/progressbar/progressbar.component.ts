import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {

  @Input() idx: number;
  @Input() steps: Array<String>;

  constructor() { }

  ngOnInit() {
  }

  getSize() {
    return String((this.idx + 1)*100/this.steps.length) + '%'
  }

}
