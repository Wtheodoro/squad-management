import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import GradientButton from './index'

describe('Btn must have children', () => {

    it('The year must be 2021', () => {
        render(<GradientButton>teste</GradientButton>)
        
        const btn = screen.getByText('teste')
    
        expect(btn).toBeVisible
    })  
})