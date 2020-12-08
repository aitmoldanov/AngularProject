import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../services/data.service';

@Component({
  selector: 'app-child-agenda',
  templateUrl: './child-agenda.component.html',
  styleUrls: ['./child-agenda.component.css']
})
export class ChildAgendaComponent implements OnInit {
  items: string[] = [];
  name: string;
  constructor(private dataService: DataService){}

  addItem(name: string){

    this.dataService.addData(name);
  }
  ngOnInit(){
    this.items = this.dataService.getData();
  }

}
