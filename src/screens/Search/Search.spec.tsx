import { api } from "@services/api";
import { render, fireEvent, screen, waitFor } from "../../../__test__/mocks/utils/customRender";
import { mockCityApiResponse } from "../../../__test__/mocks/api/mockCityApiResponse";
import { Search } from "./index";

describe("Screen: Search", () => {
    it("should be show city option", async () => {

        jest.spyOn(api, 'get').mockResolvedValue({ data: mockCityApiResponse })

        render(<Search />)

        const searchInput = screen.getByTestId("search-input")

        fireEvent.changeText(searchInput, 'São Paulo') // escreve um texto no input

        const option = await waitFor(() => screen.findByText(/são paulo/i))

        expect(option).toBeTruthy()
    }, 10000)
})