import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private readonly userRepository: Repository<Client>,
  ) {}

  async create(createClientDto: CreateClientDto) {
    const newClient = this.userRepository.create(createClientDto);
    const client = await this.userRepository.save(newClient);
    return client;
    // return 'This action adds a new client';
  }

  findAll() {
    const client = this.userRepository.find();
    return client;
    // return `This action returns all client`;
  }

  findOne(id: number) {
    return `This action returns a #${id} client`;
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }
}
