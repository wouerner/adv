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
  }

  findAll() {
    const client = this.userRepository.find();
    return client;
  }

  findOne(id: number) {
    const client = this.userRepository.findOne(id);
    return client;
  }

  async update(id: number, updateClientDto: UpdateClientDto) {
    return await this.userRepository.update(id, updateClientDto);
  }

  async remove(id: number) {
    return await this.userRepository.delete(id);
  }
}
