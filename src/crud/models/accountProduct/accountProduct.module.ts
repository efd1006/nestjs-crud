
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountProduct } from './accountProduct.entity';
import { AccountProductService } from './accountProduct.service';
import { AccountProductController } from './accountProduct.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AccountProduct])],
  providers: [AccountProductService],
  controllers: [AccountProductController],
  exports: [AccountProductService]
})
export class AccountProductModule {}