
import { Injectable, NestInterceptor, ExecutionContext, BadGatewayException, CallHandler, ConflictException, } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class AccountInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    let body = context.getArgByIndex(0).body;
    if(body.accountType === 'business'){
      body.firstName = '';
      body.lastName = '';
      body.idNumber = '';
    }else if(body.accountType === 'individual'){
      body.companyName = '';
      body.vatNumber = '';
      body.companyRegistrationNumber = '';
    }
    return next.handle();
  }
}
