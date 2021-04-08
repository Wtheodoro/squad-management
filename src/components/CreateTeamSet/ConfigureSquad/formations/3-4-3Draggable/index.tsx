import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Provider } from 'react-redux';

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

        // <Droppable droppableId="athletes">
        //   {(provided) => (
        //     <div className="search-athlete" {...provided.droppableProps} ref={provided.innerRef}>
        //       {
        //         athletes?.map((i: any, index: any) => (
        //           <Draggable key={i.name} draggableId={i.name} index={index}>
        //             {(provided) => (
        //               <AthleteTrack name={i.name} age={i.age} nacionality={i.nacionality}
        //               innerRef={provided.innerRef}
        //               provided={provided}
        //               />
        //             )}
        //           </Draggable>
        //         ))
        //       }
        //       {provided.placeholder}
        //     </div>
        //   )}
        // </Droppable>



export default ThreeFourThree;