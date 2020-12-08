import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {LogService} from '../../services/log.service';

@Component({
  selector: 'app-tourlist',
  templateUrl: './tourlist.component.html',
  styleUrls: ['./tourlist.component.css'],
  providers: [DataService, LogService]
})
export class TourlistComponent implements OnInit {
  showTypeTour;
   imageWidth;
   games;
   searchedKeyword;
   imageMargin;
   pageTitle;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.imageWidth = this.dataService.getImageWidth();
    this.showTypeTour = this.dataService.getTypeTour();
    this.games = this.dataService.getGames();
    this.searchedKeyword = this.dataService.getKeyword();
    this.imageMargin = this.dataService.getImageMargin();
    this.pageTitle = this.dataService.getPageTitle();
  }
  toggleImage(): void {
    this.showTypeTour = !this.showTypeTour;
  }



}
