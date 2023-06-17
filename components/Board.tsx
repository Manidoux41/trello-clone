'use client';
import { useEffect } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

function Board() {
  useEffect(() => {
    //getBoard();
  }, [])

  return (
    <DragDropContext onDragEnd={() => console.log('onDragEnd')}>
      <Droppable droppableId='board' direction='horizontal'>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            rendering all the columns
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default Board;
