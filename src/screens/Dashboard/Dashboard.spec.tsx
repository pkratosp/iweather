import { api } from "@services/api"
import { mockWeatherAPIResponse } from "../../../__test__/mocks/api/mockWeatherAPIResponse"
import { render, screen, waitFor } from "../../../__test__/mocks/utils/customRender"
import { Dashboard } from "./index"
import { saveStorageCity } from "@libs/asyncStorage/cityStorage"
import { CityProps } from "@services/getCityByNameService"

describe("Screen: Dashboard", () => {

    it("should be show city weather", async () => {

        jest.spyOn(api, 'get').mockResolvedValue({ data: mockWeatherAPIResponse })

        const city: CityProps = {
            id: '1',
            latitude: 333,
            longitude: 444,
            name: 'são paulo'
        }

        await saveStorageCity(city)
        render(<Dashboard />)

        const cityname = await waitFor(() => screen.getByText(/são paulo/i))
        expect(cityname).toBeTruthy()

    })

})