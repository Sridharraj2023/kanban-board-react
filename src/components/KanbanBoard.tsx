import React from 'react';
import { Task } from '../types';
import Column from './Column';
import './KanbanBoard.css';

interface KanbanBoardProps {
  tasks: Task[];
  onDelete: (id: string) => void;
  onStatusChange: (taskId: string, newStatus: Task['status']) => void;
}

const KanbanBoard: React.FC<KanbanBoardProps> = ({ tasks, onDelete, onStatusChange }) => {
  const onDragStart = (e: React.DragEvent, taskId: string) => {
    e.dataTransfer.setData('taskId', taskId);
  };

  const onDrop = (e: React.DragEvent, status: Task['status']) => {
    const taskId = e.dataTransfer.getData('taskId');
    onStatusChange(taskId, status);
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const columnStatuses: Task['status'][] = ['open', 'inprogress', 'review', 'done'];

  return (
    <div className="kanban-board">
      {columnStatuses.map(status => (
        <Column
          key={status}
          status={status}
          tasks={tasks.filter(task => task.status === status)}
          onDragStart={onDragStart}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default KanbanBoard;
