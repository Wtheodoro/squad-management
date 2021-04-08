import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import FootballField from './index'

describe('The football field', () => {

    it('The most picked player must exists', () => {
        render(<FootballField/>)
        
        const most = screen.getByText('75%')
    
        expect(most).toBeVisible
    })  

    it('The less picked player must exists', () => {
        render(<FootballField/>)
        
        const less = screen.getByText('25%')
    
        expect(less).toBeVisible
    })
})