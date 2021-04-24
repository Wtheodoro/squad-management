import { Droppable, Draggable } from 'react-beautiful-dnd';
import PlayerCard from '../../../PlayerCard';
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
                  squad[8] ?
                  <Draggable draggableId={squad[8].name} index={8}>
                    {(provided) => (
                      <div className="draggable"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <PlayerCard
                          name={squad[8].name}
                          age={squad[8].age}
                          position={squad[8].position}
                        />
                      </div>
                    )}
                  </Draggable>
                  :
                  <div className="empty"><p>9</p></div>
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
                  squad[9] ?
                  <Draggable draggableId={squad[9].name} index={9}>
                    {(provided) => (
                      <div className="draggable"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <PlayerCard
                          name={squad[9].name}
                          age={squad[9].age}
                          position={squad[9].position}
                        />
                      </div>
                    )}
                  </Draggable>
                  :
                  <div className="empty"><p>10</p></div>
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
                  squad[10] ?
                  <Draggable draggableId={squad[10].name} index={10}>
                    {(provided) => (
                      <div className="draggable"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <PlayerCard
                          name={squad[10].name}
                          age={squad[10].age}
                          position={squad[10].position}
                        />
                      </div>
                    )}
                  </Draggable>
                  :
                  <div className="empty"><p>11</p></div>
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
                  squad[7] ?
                  <Draggable draggableId={squad[7].name} index={7}>
                    {(provided) => (
                      <div className="draggable"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <PlayerCard
                          name={squad[7].name}
                          age={squad[7].age}
                          position={squad[7].position}
                        />
                      </div>
                    )}
                  </Draggable>
                  :
                  <div className="empty"><p>8</p></div>
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
                  squad[4] ?
                  <Draggable draggableId={squad[4].name} index={4}>
                    {(provided) => (
                      <div className="draggable"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <PlayerCard
                          name={squad[4].name}
                          age={squad[4].age}
                          position={squad[4].position}
                        />
                      </div>
                    )}
                  </Draggable>
                  :
                  <div className="empty"><p>5</p></div>
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
                  squad[5] ?
                  <Draggable draggableId={squad[5].name} index={5}>
                    {(provided) => (
                      <div className="draggable"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <PlayerCard
                          name={squad[5].name}
                          age={squad[5].age}
                          position={squad[5].position}
                        />
                      </div>
                    )}
                  </Draggable>
                  :
                  <div className="empty"><p>6</p></div>
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
                  squad[6] ?
                  <Draggable draggableId={squad[6].name} index={6}>
                    {(provided) => (
                      <div className="draggable"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <PlayerCard
                          name={squad[6].name}
                          age={squad[6].age}
                          position={squad[6].position}
                        />
                      </div>
                    )}
                  </Draggable>
                  :
                  <div className="empty"><p>7</p></div>
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
                  squad[1] ?
                  <Draggable draggableId={squad[1].name} index={1}>
                    {(provided) => (
                      <div className="draggable"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <PlayerCard
                          name={squad[1].name}
                          age={squad[1].age}
                          position={squad[1].position}
                        />
                      </div>
                    )}
                  </Draggable>
                  :
                  <div className="empty"><p>2</p></div>
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
                  squad[2] ?
                  <Draggable draggableId={squad[2].name} index={2}>
                    {(provided) => (
                      <div className="draggable"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <PlayerCard
                          name={squad[2].name}
                          age={squad[2].age}
                          position={squad[2].position}
                        />
                    </div>
                  )}
                </Draggable>
                :
                <div className="empty"><p>3</p></div>
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
                  squad[3] ?
                  <Draggable draggableId={squad[3].name} index={3}>
                    {(provided) => (
                      <div className="draggable"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <PlayerCard
                          name={squad[3].name}
                          age={squad[3].age}
                          position={squad[3].position}
                        />
                      </div>
                    )}
                  </Draggable>
                  :
                  <div className="empty"><p>4</p></div>
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
                squad[0] ? 
                <Draggable draggableId={squad[0].name} index={0}>
                  {(provided) => (
                    <div className="draggable"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <PlayerCard
                        name={squad[0].name}
                        age={squad[0].age}
                        position={squad[0].position}
                      />
                    </div>
                  )}
                </Draggable>
                :
                <div className="empty"><p>1</p></div>
              }
              {provided.placeholder}
            </div>
          )}
        </Droppable>
    </Container>
  )
}

export default ThreeFourThree;