
import { Injectable, NestInterceptor, ExecutionContext, BadGatewayException, CallHandler, ConflictException, } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UNIQUE_EMAIL_CONSTRAINT } from '../../utils/constants';

@Injectable()
export class UserInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(
        catchError(err => {
          if(err.constraint === UNIQUE_EMAIL_CONSTRAINT){
            return throwError(new ConflictException("A user with this email already exists."))
          }else{
            return throwError(err);
          }
        }),
      );
  }
}