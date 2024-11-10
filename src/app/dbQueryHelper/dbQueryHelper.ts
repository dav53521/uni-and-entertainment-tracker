import { Client } from "pg";
import { clientConnectionDetails } from "./dbTypes";

let connectedClient: Client;

export async function connectToDatabaseAsync(connectionInformation: clientConnectionDetails) {
    connectedClient = new Client(connectionInformation);
    await connectedClient.connect();
}

export async function executeQueryAsync() {
}

export async function insertDataAsync() {
}
