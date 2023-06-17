'use client';
import { useEffect } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

function Board() {
  useEffect(() => {
    //getBoard();
  }, [])

  return (
    <DragDropContext>
      <Droppable droppableId='board' direction='horizontal'>
        {(provided) => (
          <div>
            {/* rendering all the colums hello there */}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default Board;
