import { CityProps } from "@services/getCityByNameService"
import { getStorageCity, saveStorageCity, removeStorageCity } from "./cityStorage"

describe("Storage: City storage", () => {

    it("should be return null when don't have a city storage", async () => {
        const response = await getStorageCity()
        expect(response).toBeNull()
    })

    it("should be return city storaged", async () => {
        const storage: CityProps = { id: '1', latitude: 1, longitude: 2, name: 'são paulo' }
        await saveStorageCity(storage)
    
        const response = await getStorageCity()

        expect(response).toEqual(
            expect.objectContaining(storage)
        )
    })

    it("should be remove city storage", async () => {
        const storage: CityProps = { id: '1', latitude: 1, longitude: 2, name: 'são paulo' }
        await saveStorageCity(storage)

        await removeStorageCity()

        const response = await getStorageCity()
        expect(response).toBeNull()
    })
})