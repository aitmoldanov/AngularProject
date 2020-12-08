import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {LogService} from '../../services/log.service';

@Component({
  selector: 'app-parent-agenda',
  templateUrl: './parent-agenda.component.html',
  styleUrls: ['./parent-agenda.component.css'],
  providers: [DataService, LogService]
})
export class ParentAgendaComponent implements OnInit {

  name: string;
  constructor(private dataService: DataService){}

  addItem(name: string){

    this.dataService.addData(name);
  }

  ngOnInit(): void {
  }

}
