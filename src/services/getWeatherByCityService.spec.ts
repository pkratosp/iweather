import { mockWeatherAPIResponse } from "../../__test__/mocks/api/mockWeatherAPIResponse"
import { api } from "./api"
import { getWeatherByCityService } from "./getWeatherByCityService"

describe("API: getWeatherByCityService", () => {

    it("should be return weather api data formatted", async () => {
        jest.spyOn(api, 'get').mockResolvedValue({ data: mockWeatherAPIResponse })
   
        const response = await getWeatherByCityService({
            latitude: 1,
            longitude: 1
        })

        expect(response).toHaveProperty('today')
    })

})