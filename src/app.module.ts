import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import * as ormconfig from './ormconfig';

export function DatabaseOrmModule(): DynamicModule {
  return TypeOrmModule.forRoot(ormconfig);
}

@Module({
  imports: [
    ClientModule,
    TypeOrmModule.forRoot(ormconfig)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
