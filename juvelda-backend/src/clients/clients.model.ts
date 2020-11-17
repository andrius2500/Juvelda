import * as mongoose from "mongoose";

export const ClientSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    phone: String,
    licensePlate: String
});

export interface Client extends mongoose.Document{
    id: string,
    fullName: string,
    email: string,
    phone: string,
    licensePlate: string
}