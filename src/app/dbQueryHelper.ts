import { Client } from "pg"

export default class dbConnectionAndQuery {
    client: Client

    constructor(private databaseToUse: string) {
        this.client = new Client({
            host: 'localhost',
            port: 5432,
            database: databaseToUse,
            user: 'uni-and-entertainment-connection',
            password: 'test'
        })
    }

    async queryDatabase(tableToUse: string, condition: string, dataToFind: string) {
        // throw new Error('Query Database has not been implemented yet');
        if(condition.length == 0) {
            this.client.connect()
            const result = await this.client.query(``)
            this.client.end();
            return result.rows;
        }
        else {
            this.client.connect()
            const result = await this.client.query(``)
            this.client.end();
            return result.rows;
        }

        // this.client.on('error', (e) => {
        //     alert('An exception has occured when trying to query the database')
        //     console.log("Error type" + e.name)
        //     console.log("Error message" + e.message)
        //     console.log("Stack trace" + e.stack)
        // })
    }

    async insertIntoDatabase(tableToUse: string, dataToInsert: string) {
        throw new Error('insert into database functionality has not been implemented yet');
    }
}