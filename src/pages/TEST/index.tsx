import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import AthleteTrackDraggable from '../../components/CreateTeamSet/AthleteTrackDraggable';
import ConfigureSquadFieldDraggable from '../../components/CreateTeamSet/ConfigureSquad/ConfigureSquadFieldDraggable';
import TagsInput from '../../components/CreateTeamSet/TagsInput';
import GradientButton from '../../components/GradientButton';
import { club_cast } from '../../utils/clubCast'
import { Container } from './styles';

const TEST = () => {
  const [athletes, setAthletes] = useState<any>(club_cast)
  const [athletesOnField, setAthletesOnField] = useState<any>([])
  

  // dnd
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
      // CODE
    }
  }

  // Search

  const searchAthlete = (e: string) => {
    return club_cast.filter(function(el) {
      return el.name.toLowerCase().indexOf(e) > -1
    })
  }

  const filterAthlete = (e: string) => {
    setAthletes(searchAthlete(e.toLowerCase()))
  }
  
  return (
    <Container>
      <div className="warning">
        <h3>Pagina para testar o drag and down</h3>
        <p>Já é possivel reorganizar a lista de jogadores</p>
        <p>Também é possivél posicionar os jogadores em campo</p>
      </div>


      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div className="field">
          <ConfigureSquadFieldDraggable squad={athletesOnField}/>
        </div>
      
        <div className="players">
          <label htmlFor="">Search Player</label><br/>
          <input type="text" placeholder="ex: Ramiro"
            onChange={(e) => filterAthlete(e.target.value)}
          />

          <Droppable droppableId="athletes">
            {(provided) => (
              <div className="search-athlete" {...provided.droppableProps} ref={provided.innerRef}>
                {
                  athletes?.map((i: any, index: any) => (
                    <Draggable key={i.name} draggableId={i.name} index={index}>
                      {(provided) => (
                        <AthleteTrackDraggable name={i.name} age={i.age} nacionality={i.nacionality}
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
        </div>
      </DragDropContext>
    </Container>
  )
}

export default TEST;