import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { Client } from "./clients.model";

@Injectable()
export class ClientsService {
    constructor(
        @InjectModel('Client') private readonly clientModel: Model<Client>
    ) {}

    async insetClient(fullName: string, email: string, phone: string, licensePlate: string) {
        if ((await this.clientModel.findOne({email}))) {
            throw new ConflictException('Toks el. paštas jau egzistuoja');
        }
        const newClient = new this.clientModel({
            fullName: fullName,
            email: email,
            phone: phone,
            licensePlate: licensePlate
        });
        const result = await newClient.save();
        return result.id as string;
    }

    async getClients() {
        const clients = await this.clientModel.find().exec();
        return clients.map(client => ({
            id: client.id,
            fullName: client.fullName,
            email: client.email,
            phone: client.phone,
            licensePlate: client.licensePlate
        }));
    }

    private async findClient(id: string): Promise<Client> {
        const client = this.clientModel.findById(id);
        if (!client) {
            throw new NotFoundException('Nepavyko rasti kliento');
        }
        return client;
    }

    async getSingleClient(clientId: string) {
        const singleClient = await this.findClient(clientId);
        return {
            id: singleClient.id,
            fullName: singleClient.fullName,
            email: singleClient.email,
            phone: singleClient.phone,
            licensePlate: singleClient.licensePlate
        }
    }

    // async updateClient(clientId: string, fullName: string, email: string, phone: string, licensePlate: string) {
    //     const updatedClient = await this.findClient(clientId);
    //     if (fullName) {
    //         updatedClient.fullName = fullName;
    //     }
    //     if (email) {
    //         updatedClient.email = email;
    //     }
    //     if (phone) {
    //         updatedClient.phone = phone;
    //     }
    //     if (licensePlate) {
    //         updatedClient.licensePlate = licensePlate;
    //     }
    //     updatedClient.save();
    // }

    async deleteClient(id: string) {
        const result = await this.clientModel.deleteOne({_id: id}).exec();
        if (result.n === 0) {
            throw new NotFoundException('Nepavyko rasti kliento')
        }
    }
}