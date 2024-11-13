import { api } from "@services/api"
import { mockWeatherAPIResponse } from "../../../__test__/mocks/api/mockWeatherAPIResponse"
import { act, fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from "../../../__test__/mocks/utils/customRender"
import { Dashboard } from "./index"
import { saveStorageCity } from "@libs/asyncStorage/cityStorage"
import { CityProps } from "@services/getCityByNameService"
import { mockCityApiResponse } from "../../../__test__/mocks/api/mockCityApiResponse"

describe("Screen: Dashboard", () => {

    beforeAll(async () => {
        const city: CityProps = {
            id: '1',
            latitude: 333,
            longitude: 444,
            name: 'são paulo'
        }

        await saveStorageCity(city)
    })

    it("should be show city weather", async () => {

        jest.spyOn(api, 'get').mockResolvedValue({ data: mockWeatherAPIResponse })

        
        render(<Dashboard />)

        const cityname = await waitFor(() => screen.getByText(/são paulo/i))
        expect(cityname).toBeTruthy()

    })


    it("should be show another selected weather city", async () => {
        

        jest.spyOn(api, 'get')
            .mockResolvedValueOnce({ data: mockWeatherAPIResponse })
            .mockResolvedValueOnce({ data: mockCityApiResponse })
            .mockResolvedValueOnce({ data: mockWeatherAPIResponse })

        render(<Dashboard />)

        // aguarda o elemento ser removido da tela
        await waitForElementToBeRemoved(() => screen.queryByTestId("loading"))

        const cityName = "São paulo, BR"

        await waitFor(() => act(() => {
            const search = screen.getByTestId("search-input")
            fireEvent.changeText(search, cityName)
        }))


        await waitFor(() => act(() => {
            fireEvent.press(screen.getByText(cityName, { exact: false }))
        }))

        expect(screen.getByText(cityName, { exact: true })).toBeTruthy()
    })
})