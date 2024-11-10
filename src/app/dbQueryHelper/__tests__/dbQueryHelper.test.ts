import { Client } from "pg"
import { dbService } from "../dbQueryHelper"
import { ClientConnectionDetails } from "../dbTypes";

jest.mock("pg");

describe("dbQueryHelper connection", () => {
    Client.prototype.connect = jest.fn();
    Client.prototype.end = jest.fn();
    Client.prototype.query = jest.fn();

    const testDatabaseService = new dbService({} as ClientConnectionDetails);


    afterEach(() => {
        jest.clearAllMocks();
    })

    afterAll(() => {
        jest.restoreAllMocks();
    })

    it("calls client connect when a connection is requested", async () => {
        await testDatabaseService.establishConnection()
        expect(Client.prototype.connect).toHaveBeenCalledTimes(1);
    })

    it("calls client disconnect when a connection needs to be closed", async () => {
        await testDatabaseService.endConnection();
        expect(Client.prototype.end).toHaveBeenCalledTimes(1);
    })

    it("calls client query when a query is executed", async () => {
        await testDatabaseService.queryDatabase("blah");
        expect(Client.prototype.query).toHaveBeenCalledTimes(1);
    })
})
