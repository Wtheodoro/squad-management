import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import BottomBar from './index'

describe('Btn must have children', () => {

    it('The year must be 2021', () => {
        render(<BottomBar/>)
        
        const bar = screen.getByText('2021 All rights reserved')
    
        expect(bar).toBeVisible
    })  
})