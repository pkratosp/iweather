import { render, screen } from "@testing-library/react-native"
import { NextDays } from "./index"
import clearDay from '@assets/clear_day.svg'

describe("Component: NextDays", () => {
    it("should be render day", () => {
        render(
            <NextDays 
                data={[
                    {
                        day: '10/11',
                        icon: clearDay,
                        min: '20c',
                        max: '30c',
                        weather: 'Céu bom'
                    },
                    {
                        day: '11/11',
                        icon: clearDay,
                        min: '20c',
                        max: '30c',
                        weather: 'Céu ruim'
                    },
                    {
                        day: '12/11',
                        icon: clearDay,
                        min: '20c',
                        max: '30c',
                        weather: 'Céu topp'
                    }
                ]}
            />            
        )

        expect(screen.getByText('12/11')).toBeTruthy()

    })
})