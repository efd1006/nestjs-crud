import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { UserModule } from 'src/crud/models/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerMiddleware } from 'src/logger/logger.middleware';
import { AccountModule } from 'src/crud/models/account/account.module';
import { AddressModule } from 'src/crud/models/address/address.module';
import { ContactModule } from 'src/crud/models/contact/contact.module';
import { ProductModule } from 'src/crud/models/product/product.module';
import { AccountProductModule } from 'src/crud/models/accountProduct/accountProduct.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UserModule, 
    AccountModule,
    AddressModule,
    ContactModule,
    ProductModule,
    AccountProductModule,
  ],
  controllers: [],
  providers: [],
  exports: []
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('user','account', 'address','contact','product','accountProduct');
  }
}
