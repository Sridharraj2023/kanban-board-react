import React from 'react';
import { Task } from '../types';
import Card from './Card';
import './Column.css';

interface ColumnProps {
  status: Task['status'];
  tasks: Task[];
  onDragStart: (e: React.DragEvent, taskId: string) => void;
  onDrop: (e: React.DragEvent, status: Task['status']) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDelete: (id: string) => void; // 🔁 added delete handler
}

const Column: React.FC<ColumnProps> = ({
  status,
  tasks,
  onDragStart,
  onDrop,
  onDragOver,
  onDelete,
}) => {
  const statusTitles: { [key in Task['status']]: string } = {
  open: 'Open',
  inprogress: 'In Progress',
  review: 'Review',
  done: 'Done',
  };

  return (
    <div
      className="column"
      onDrop={e => onDrop(e, status)}
      onDragOver={onDragOver}
    >
      <h2>{statusTitles[status]}</h2>
      {tasks.map(task => (
        <Card
          key={task.id}
          task={task}
          onDragStart={onDragStart}
          onDelete={onDelete} // 🔁 pass to Card
        />
      ))}
    </div>
  );
};

export default Column;
