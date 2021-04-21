import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Container } from './styles';

interface FormationProps {
  squad?: any
}

const ThreeFourThree = (props: FormationProps) => {
  const { squad } = props
  return (
    <Container>
      <div className="attack">

        {/* P9 */}
          <Droppable droppableId="p-nine">
            {(provided) => (
              <div className="player nine" {...provided.droppableProps} ref={provided.innerRef}>
                {
                  squad.length > 8 ?
                  <Draggable draggableId={squad[8].name} index={8}>
                    {(provided) => (
                      <div className="draggable"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <p>{squad[8].name}</p>
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

        {/* P10 */}
          <Droppable droppableId="p-ten">
            {(provided) => (
              <div className="player ten" {...provided.droppableProps} ref={provided.innerRef}>
                {
                  squad.length > 9 ?
                  <Draggable draggableId={squad[9].name} index={9}>
                    {(provided) => (
                      <div className="draggable"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <p>{squad[9].name}</p>
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

        {/* P11 */}
          <Droppable droppableId="p-eleven">
            {(provided) => (
              <div className="player eleven" {...provided.droppableProps} ref={provided.innerRef}>
                {
                  squad.length > 10 ?
                  <Draggable draggableId={squad[10].name} index={10}>
                    {(provided) => (
                      <div className="draggable"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <p>{squad[10].name}</p>
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
        </div> 

        <div className="middle-two">
          {/* P8 */}
          <Droppable droppableId="p-eight">
            {(provided) => (
              <div className="player eight" {...provided.droppableProps} ref={provided.innerRef}>
                {
                  squad.length > 7 ?
                  <Draggable draggableId={squad[7].name} index={7}>
                    {(provided) => (
                      <div className="draggable"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <p>{squad[7].name}</p>
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
        </div>

        <div className="middle-one">

          {/* P5 */}
          <Droppable droppableId="p-five">
            {(provided) => (
              <div className="player five" {...provided.droppableProps} ref={provided.innerRef}>
                {
                  squad.length > 4 ?
                  <Draggable draggableId={squad[4].name} index={4}>
                    {(provided) => (
                      <div className="draggable"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <p>{squad[4].name}</p>
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
          
          {/* P6 */}
          <Droppable droppableId="p-six">
            {(provided) => (
              <div className="player six" {...provided.droppableProps} ref={provided.innerRef}>
                {
                  squad.length > 5 ?
                  <Draggable draggableId={squad[5].name} index={5}>
                    {(provided) => (
                      <div className="draggable"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <p>{squad[5].name}</p>
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
          
          {/* P7 */}
          <Droppable droppableId="p-seven">
            {(provided) => (
              <div className="player seven" {...provided.droppableProps} ref={provided.innerRef}>
                {
                  squad.length > 6 ?
                  <Draggable draggableId={squad[6].name} index={6}>
                    {(provided) => (
                      <div className="draggable"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <p>{squad[6].name}</p>
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
        </div>

        <div className="defense">

          {/* P2 */}
          <Droppable droppableId="p-two">
            {(provided) => (
              <div className="player two" {...provided.droppableProps} ref={provided.innerRef}>
                {
                  squad.length > 1 ?
                  <Draggable draggableId={squad[1].name} index={1}>
                    {(provided) => (
                      <div className="draggable"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <p>{squad[1].name}</p>
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

          {/* P3 */}
          <Droppable droppableId="p-three">
            {(provided) => (
              <div className="player three" {...provided.droppableProps} ref={provided.innerRef}>
                {
                  squad.length > 2 ?
                  <Draggable draggableId={squad[2].name} index={2}>
                    {(provided) => (
                      <div className="draggable"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <p>{squad[2].name}</p>
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

          {/* P4 */}
          <Droppable droppableId="p-four">
            {(provided) => (
              <div className="player four" {...provided.droppableProps} ref={provided.innerRef}>
                {
                  squad.length > 3 ?
                  <Draggable draggableId={squad[3].name} index={3}>
                    {(provided) => (
                      <div className="draggable"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <p>{squad[3].name}</p>
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