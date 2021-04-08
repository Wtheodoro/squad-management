import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Container } from './styles';

interface FormationProps {
  squad?: any
}

const ThreeFourThree = (props: FormationProps) => {
  const { squad } = props
  return (
    <Container>
      <div className="atk">
          <div className="player nine">+</div>
          <div className="player ten">+</div>
          <div className="player eleven">+</div>
        </div> 

        <div className="middle-two">
          <div className="player eight">+</div>
        </div>

        <div className="middle-one">
          <div className="player five">+</div>
          <div className="player six">+</div>
          <div className="player seven">+</div>
        </div>

        <div className="def">
          <div className="player two">+</div>
          <div className="player three">+</div>
          <div className="player four">+</div>
        </div>

        {/* GOALKEEPER */}
        <Droppable droppableId="p-one">
          {(provided) => (
            <div className="player one" {...provided.droppableProps} ref={provided.innerRef}>
              {
                squad.length > 0 ?
                <Draggable draggableId={squad[0].name} index={0}>
                  {(provided) => (
                    <div className="draggable"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <p>{squad[0].name}</p>
                    </div>
                  )}
                </Draggable>
                :
                <p>+</p>
              }
              {provided.placeholder}
            </div>
          )}
        </Droppable>
    </Container>
  )
}

export default ThreeFourThree;