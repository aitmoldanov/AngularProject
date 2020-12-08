import {Injectable} from '@angular/core';
import {LogService} from './log.service';

@Injectable()
export class DataService{

  private sharedValue: string[] = [ 'Apple iPhone 12 mini', 'Apple iPhone 12 ', 'Apple iPhone 12 pro', 'Apple iPhone 12 pro max'];

  private sharedValue1: string[] = [ 'Samsung Galaxy S20', 'Samsung Galaxy S20 Ultra', 'Samsung Galaxy Note20', 'Samsung Galaxy Note20 Ultra'];

  getData(): string[] {
    return this.sharedValue;
  }
  getData1(): string[]{
    return this.sharedValue1;
  }
}
