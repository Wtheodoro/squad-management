import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import AthleteTrackDraggable from '../../components/CreateTeamSet/AthleteTrackDraggable';
import ConfigureSquadFieldDraggable from '../../components/CreateTeamSet/ConfigureSquad/ConfigureSquadFieldDraggable';
import PlayerCard from '../../components/CreateTeamSet/PlayerCard';
import { club_cast } from '../../utils/clubCast'
import { Container, Canvas } from './styles';

const TEST = () => {
  const [reset, setReset] = useState<number>(0)
  const [athletes, setAthletes] = useState<any>(club_cast)
  const elevenPositions = new Array(11)
  const [athletesOnField, setAthletesOnField] = useState<any>(elevenPositions)

  // dnd
  const handleOnDragEnd = (result: any) => {

    const items = Array.from(athletes)
    const [reorderedItem] = items.splice(result.source.index, 1)

    const itemsOnField = Array.from(athletesOnField)



    // this if garante the app still wokrs when a draggable item is droped out of placeholder
    if(!result.destination) return

    // Check from where the result is comming
    if (result.source.droppableId === 'athletes') {

      if (result.source.droppableId === result.destination.droppableId) {
        items.splice(result.destination.index, 0, reorderedItem)
        setAthletes(items)
  
      } else if (result.source.droppableId !== result.destination.droppableId) {
        // redorder athlete list
        const player = athletes[result.source.index]
        player.droppableId = result.destination.droppableId

        // take out chosen atlhete from the list
        items.splice(result.destination.index, 0)
        setAthletes(items) 

        switch (result.destination.droppableId) {
          case 'p-one':
            itemsOnField[0] = player
            return setAthletesOnField(itemsOnField)

          case 'p-two':
            itemsOnField[1] = player
            return setAthletesOnField(itemsOnField)

          case 'p-three':
            itemsOnField[2] = player
            return setAthletesOnField(itemsOnField)

          case 'p-four':
            itemsOnField[3] = player
            return setAthletesOnField(itemsOnField)

          case 'p-five':
            itemsOnField[4] = player
            return setAthletesOnField(itemsOnField)

          case 'p-six':
            itemsOnField[5] = player
            return setAthletesOnField(itemsOnField)

          case 'p-seven':
            itemsOnField[6] = player
            return setAthletesOnField(itemsOnField)

          case 'p-eight':
            itemsOnField[7] = player
            return setAthletesOnField(itemsOnField)

          case 'p-nine':
            itemsOnField[8] = player
            return setAthletesOnField(itemsOnField)
      
          case 'p-ten':
            itemsOnField[9] = player
            return setAthletesOnField(itemsOnField)

          case 'p-eleven':
            itemsOnField[10] = player
            return setAthletesOnField(itemsOnField)

          default:
            break;
        }       
      }

    } else if (result.source.droppableId !== 'athletes') {
      
      if (result.destination.droppableId === 'athletes') {
        // redorder athlete list
        const player = athletesOnField[result.source.index]
        setAthletes([...athletes, player])
        // take out chosen atlhete from the field
        // atlhets on field always need to have 11 positions on array
        itemsOnField.splice(result.source.index, 1, undefined)
        setAthletesOnField(itemsOnField)

  
      } else {
        console.log("alteração dentro de campo")   
        console.log(result)   
        // Thinking about this code part.
      }
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
    <>
    <div className="warning">
      <h3>Pagina para testar o drag and down</h3>
      <p>Já é possivel reorganizar a lista de jogadores</p>
      <p>Também é possivél posicionar os jogadores em campo</p>
    </div>

    <Container>

    <PlayerCard />

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
    <button onClick={() => setReset(reset+1)}>reset component</button>
    </>
  )
}

export default TEST;