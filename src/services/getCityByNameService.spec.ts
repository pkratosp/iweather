import { mockCityApiResponse } from "../../__test__/mocks/api/mockCityApiResponse"
import { api } from "./api"
import { getCityByNameService } from "./getCityByNameService"

describe("API: getCityByNameService", () => {

    it("should return city information", async () => {

        jest.spyOn(api, "get").mockResolvedValue({
            data: mockCityApiResponse
        })

        const response = await getCityByNameService('São paulo')
        expect(response).toHaveLength(1)
    })

})