import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-card',
  templateUrl: './app-card.component.html',
  styleUrls: ['./app-card.component.scss']
})
export class AppCardComponent implements OnInit {
  @Input() title: string | undefined;
   
  constructor(){}
  ngOnInit(): void {
    
  }
}
