'use client';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';

function Board() {
  return (
    <DragDropContext>
      <Droppable droppableId='board' direction='horizontal'>
        {(provided) => (
          <div>
            {/* rendering all the colums */}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default Board
