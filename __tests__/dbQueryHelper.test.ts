import { Client } from "pg"
import { connectToDatabaseAsync } from "../src/app/dbQueryHelper/dbQueryHelper"
import { PartialDeep } from "type-fest"
import { clientConnectionDetails } from "../src/app/dbQueryHelper/dbTypes";

jest.mock("pg");

describe("dbQueryHelper connection", () => {
    Client.prototype.connect = jest.fn();

    afterEach(() => {
        jest.clearAllMocks();
    })

    it("calls client connect when a connection is requested", async () => {
        expect(async () => await connectToDatabaseAsync({} as clientConnectionDetails)).not.toThrow();
        expect(Client.prototype.connect).toHaveBeenCalled();
    })
})
