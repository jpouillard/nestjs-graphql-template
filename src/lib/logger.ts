import { Logger } from '@nestjs/common';
import { NODE_ENV } from '../config/constants';

export class CustomLogger extends Logger {
  log(message: any, context = '') {
    context
      ? super.log(message, `${NODE_ENV} => ${context}`)
      : super.log(message, NODE_ENV);
  }
}
