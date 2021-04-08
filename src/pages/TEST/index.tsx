import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import AthleteTrack from '../../components/CreateTeamSet/AthleteTrack';
import ConfigureSquadField from '../../components/CreateTeamSet/ConfigureSquad/ConfigureSquadField';
import GradientButton from '../../components/GradientButton';
import { club_cast } from '../../utils/clubCast'
import { Container } from './styles';

const TEST = () => {
  const [athletes, setAthletes] = useState<any>(club_cast)
  const [athletesOnField, setAthletesOnField] = useState<any>([])
  
  const handleOnDragEnd = (result: any) => {
    console.log(result)
    const items = Array.from(athletes)
    const [reorderedItem] = items.splice(result.source.index, 1)
    // this if garante the app still wokrs when a draggable item is droped out of placeholder
    if(!result.destination) return

    // Check from where the result is comming
    if (result.source.droppableId === 'athletes') {
      if (result.source.droppableId === result.destination.droppableId) {
        items.splice(result.destination.index, 0, reorderedItem)
        setAthletes(items)
  
      } else if (result.source.droppableId !== result.destination.droppableId) {
        const player = athletes[result.source.index]
        setAthletesOnField([...athletesOnField, player])
      }
    } else {
      // ainda nao sei o que fazer aqui
    }
    
  }
  
  return (
    <Container>
      <DragDropContext onDragEnd={handleOnDragEnd}>

      <div className="left">
        <ConfigureSquadField squad={athletesOnField}/>
        <GradientButton width="100%">Save</GradientButton>
      </div>

        <Droppable droppableId="athletes">
          {(provided) => (
            <div className="search-athlete" {...provided.droppableProps} ref={provided.innerRef}>
              {
                athletes?.map((i: any, index: any) => (
                  <Draggable key={i.name} draggableId={i.name} index={index}>
                    {(provided) => (
                      <AthleteTrack name={i.name} age={i.age} nacionality={i.nacionality}
                      innerRef={provided.innerRef}
                      provided={provided}
                      />
                    )}
                  </Draggable>
                ))
              }
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  )
}

export default TEST;

function useCallback(arg0: () => void, arg1: never[]) {
  throw new Error('Function not implemented.');
}
