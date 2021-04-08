import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import TagsInput from './index'

describe('All tags must be displayed', () => {

    const tagsTEST = ['HTML', 'CSS', 'JAVASCRIPT']
    const functionTEST = (tags: any) => {
        return
      }

    it('Need to have a HTML tag', () => {
        render(<TagsInput predefinedTags={tagsTEST} selectedTags={functionTEST}/>)
        
        const bar = screen.getByText(tagsTEST[0])
    
        expect(bar).toBeVisible
    })  
})