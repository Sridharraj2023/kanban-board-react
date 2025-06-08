import React from 'react';
import { Modal } from '@fluentui/react';
import { Task } from '../types';
import './TaskModal.css';

interface TaskModalProps {
  task: Task | null;
  onClose: () => void;
  onDelete: (taskId: string) => void;
}

const TaskModal: React.FC<TaskModalProps> = ({ task, onClose, onDelete }) => {
  if (!task) return null;

  return (
    <Modal isOpen={!!task} onDismiss={onClose}>
      <div className="modal-content">
        <h2>{task.title}</h2>
        <p><strong>Description:</strong> {task.description}</p>
        <p><strong>Tag:</strong> {task.tag}</p>
        <p><strong>Created At:</strong> {task.createdAt}</p>
        <p><strong>Created By:</strong> {task.createdBy}</p>
        <p><strong>Assignee:</strong> {task.assignee}</p>
        <p><strong>Estimation:</strong> {task.estimation}</p>
        <button onClick={() => onDelete(task.id)}>Delete</button>
        <button onClick={onClose}>Close</button>
      </div>
    </Modal>
  );
};

export default TaskModal;
