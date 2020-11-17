import { Body, Controller, Get, Param, Post, Put, Query, BadRequestException, Delete } from "@nestjs/common";

import { ClientsService } from "./clients.service";

@Controller('clients')
export class ClientsController {
    constructor(private clientService: ClientsService) {}

    @Post()
    async addClient(
        @Body('fullName') fullName: string,
        @Body('email') email: string,
        @Body('phone') phone: string,
        @Body('licensePlate') licensePlate: string
    ) {
        const generatedId = await this.clientService.insetClient(
            fullName,
            email,
            phone,
            licensePlate
        );

        return { id: generatedId };
    }

    @Get()
    async getClients() {
        const clients = await this.clientService.getClients();
        return clients;
    }

    @Get('/:id')
    getClient(
        @Param('id') clientId: string
    ) {
        return this.clientService.getSingleClient(clientId);
    }

    // @Put('/:id')
    // async updateClient(
    //     @Param('id') id: string,
    //     @Param('fullName') fullName: string,
    //     @Param('email') email:string,
    //     @Param('phone') phone: string,
    //     @Param('licensePlate') licensePlate: string
    // ) {
    //     await this.clientService.updateClient(id, fullName, email, phone, licensePlate);
    //     return null;
    // }

    @Delete('/:id')
    async deleteClient (
        @Param('id') id: string
    ) {
        await this.clientService.deleteClient(id);
        return null;
    }
}