import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autocselector',
  templateUrl: './autocselector.component.html',
  styleUrls: ['./autocselector.component.css']
})
export class AutocselectorComponent implements OnInit {
options:string[]=['one','two'];
  constructor() { }

  ngOnInit(): void {
  }

}
