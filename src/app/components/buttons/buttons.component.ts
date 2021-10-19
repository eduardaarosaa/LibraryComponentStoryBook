import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  @Input()
  color: 'primary' | 'danger' = 'primary';


  public get classes(): Array<string> {
    
    return ['button', `btn-${this.color}`];
  }
  constructor() { }

  ngOnInit(): void {
  }

}
