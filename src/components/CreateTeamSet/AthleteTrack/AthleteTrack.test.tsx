import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import AthleteTrack from './index'

describe('Athletes info must show on Track', () => {

    const TEST = {
        name: 'Teste da Silva',
        nacionality: 'Brasil',
        age: 25
    }

    it('Name must be displayed', () => {
        render(<AthleteTrack 
            name={TEST.name} 
            nacionality={TEST.nacionality} 
            age={TEST.age}
        />)
        
        const trackName = screen.getByText(TEST.name)
    
        expect(trackName).toBeVisible
    }) 
    
    it('Age must be displayed', () => {
        render(<AthleteTrack 
            name={TEST.name} 
            nacionality={TEST.nacionality} 
            age={TEST.age}
        />)
        
        const trackAge = screen.getByText(TEST.age)
    
        expect(trackAge).toBeVisible
    }) 

    it('Nacionalityy must be displayed', () => {
        render(<AthleteTrack 
            name={TEST.name} 
            nacionality={TEST.nacionality} 
            age={TEST.age}
        />)
        
        const trackNacionality = screen.getByText(TEST.nacionality)
    
        expect(trackNacionality).toBeVisible
    })  
})