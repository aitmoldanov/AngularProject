import {Injectable} from "@angular/core";

@Injectable()
export class LogService {

  log(message: string) {
    console.log('Logging.service log message: ',
      message);
  }
}
