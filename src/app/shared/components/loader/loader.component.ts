import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  time: number = 0;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      console.log('hi')
      this.time++;
    }, 333);
  }
}
