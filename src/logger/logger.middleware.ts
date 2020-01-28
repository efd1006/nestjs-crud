
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { USER_STATUS } from '../crud/utils/constants';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.log('Request.......................................................');
    console.log(req.body);
    next();
  }
}