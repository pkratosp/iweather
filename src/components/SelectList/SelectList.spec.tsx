import { render, screen, fireEvent } from "@testing-library/react-native";
import { SelectList } from "./index";

describe("Component: SelectList", () => {

    it('should be return city details selected', () => {
        const data = [
            {
                id: '1',
                name: 'Campinas',
                latitude: 123,
                longitude: 456
            },
            {
                id: '1',
                name: 'São paulo',
                latitude: 999,
                longitude: 888
            }
        ]

        const onPress = jest.fn()

        render(
            <SelectList 
                data={data} 
                onChange={() => {}} 
                onPress={onPress}
            />
        )

        // const selectedCity = screen.getByText(/camp/i) // o i é para deixar nao case sensitive
        // const selectedCity = screen.getByText('camp', { exact: false }) // mesma coisa com a regex
        const selectedCity = screen.getByText(/camp/i)
        
        fireEvent.press(selectedCity)

        expect(onPress).toBeCalledTimes(1)
        expect(onPress).toBeCalledWith(data[0])
    })


    it("not should be show options when data props is empty", () => {

        render(
            <SelectList 
                data={[]}
                onChange={() => {}}
                onPress={() => {}}
            />
        )

        const options = screen.getByTestId('options')

        expect(options.children).toHaveLength(0)
    })
})