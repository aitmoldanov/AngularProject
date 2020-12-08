import {Injectable} from '@angular/core';

@Injectable()
export class LogService {

  log(message: string) {
    console.log('Logging.service log message: Getting data for TourList ',
      message);
  }
}
