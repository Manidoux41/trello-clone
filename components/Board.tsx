'use client';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

function Board() {
  const onDragEnd = (result: any) => {
    // TODO: handle drag end
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
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
