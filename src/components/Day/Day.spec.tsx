import { render,screen } from "@testing-library/react-native"
import { Day } from "./index"
import clearDay from '@assets/clear_day.svg'

describe("Component: Day", () => {
    it("should be render day", () => {
        render(
            <Day 
                data={{
                    day: '10/11',
                    min: '20c',
                    max: '30c',
                    icon: clearDay,
                    weather: 'Céu bom'
                }}
            />
        )

        expect(screen.getByText('10/11')).toBeTruthy()
    })
})