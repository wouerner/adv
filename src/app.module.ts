import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import * as ormconfig from './ormconfig';
import { Client } from './client/entities/client.entity';


@Module({
    // imports: [TypeOrmModule.forRoot(ormconfig), ClientModule],
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: 'admin',
      password: 'admin',
      database: 'nestjs',
      entities: [Client],
      synchronize: true,
    }),
    ClientModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
