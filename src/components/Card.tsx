import React, { useState, useEffect, useRef } from 'react';
import { Task } from '../types';
import './Card.css';

interface CardProps {
  task: Task;
  onDragStart: (e: React.DragEvent, taskId: string) => void;
  onDelete: (id: string) => void;
  disableHover?: boolean;
}

const Card: React.FC<CardProps> = ({
  task,
  onDragStart,
  onDelete,
  disableHover = false,
}) => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const dragStartTime = useRef<number | null>(null); // 🆕 Track drag timing

  // Close modal on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  // Autofocus in modal
  useEffect(() => {
    if (showModal && modalRef.current) {
      const focusable = modalRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      focusable[0]?.focus();
    }
  }, [showModal]);

  // 🆕 Handle drag and suppress accidental click
  const handleDragStart = (e: React.DragEvent) => {
    dragStartTime.current = Date.now();
    onDragStart(e, task.id);
  };

  const handleClick = () => {
    const now = Date.now();
    if (dragStartTime.current && now - dragStartTime.current < 200) {
      return; // ⛔ suppress accidental modal open after drag
    }
    setShowModal(true);
  };

  return (
    <>
      <div
        className={`task-card ${disableHover || showModal ? 'disable-hover' : ''}`}
        draggable={!disableHover && !showModal}
        onDragStart={handleDragStart}
        onClick={handleClick}
        tabIndex={0}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            setShowModal(true);
            e.preventDefault();
          }
        }}
        aria-haspopup="dialog"
        aria-label={`Open details for task ${task.title}`}
      >
        <h3>{task.title}</h3>
        <p>Due: {task.dueDate}</p>
        <p>Assignee: {task.assignee}</p>
        <p>Tag: {task.tag}</p>
      </div>

      {showModal && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`modal-title-${task.id}`}
          onClick={() => setShowModal(false)}
        >
          <div
            className="modal"
            ref={modalRef}
            onClick={e => e.stopPropagation()}
            tabIndex={-1}
          >
            <h2 id={`modal-title-${task.id}`}>{task.title}</h2>
            <p><strong>Description:</strong> {task.description}</p>
            <p><strong>Tag:</strong> {task.tag}</p>
            <p><strong>Created At:</strong> {task.createdAt}</p>
            <p><strong>Created By:</strong> {task.createdBy}</p>
            <p><strong>Assignee:</strong> {task.assignee}</p>
            <p><strong>Estimation:</strong> {task.estimation}</p>
            <div className="modal-buttons">
              <button
                onClick={() => {
                  onDelete(task.id);
                  setShowModal(false);
                }}
                className="modal-button-primary"
              >
                Delete Task
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="modal-button-secondary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
