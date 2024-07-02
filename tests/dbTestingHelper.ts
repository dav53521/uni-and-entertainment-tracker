import { Client, ClientBase } from "pg";

let client: ClientBase;

export function EstablishClient(testUser: string, password: string, testDatabase: string, hostName: string, portNumber: number) {
    client = new Client({
        user: testUser, 
        password: password,
        database: testDatabase,
        host: hostName,
        port: portNumber,
    });

    client.connect();
}

export function BeginTransactionAsync() {
}

export function EndTransactionAsync() {
}
