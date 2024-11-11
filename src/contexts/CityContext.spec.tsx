import { act, renderHook, waitFor } from '@testing-library/react-native'
import { useCity } from "@hooks/useCity"
import { CityProvider } from './CityContext'

describe("Context: CityContext", () => {
    it("should be change selected city", async () => {
        const { result } = renderHook(() => useCity(), { wrapper: CityProvider })
    
        await waitFor(() => act(() => {

            result.current.handleChanceCity({
                id: '1',
                latitude: 111,
                longitude: 3333,
                name: 'rio preto'
            })

            expect(result.current.city?.name).toBe('rio preto')
        }))

    })
})