import React, { useState } from 'react';
import { Task, Tag, TaskStatus } from '../types'; // Ensure TaskStatus is defined in types
import './CreateTask.css';

interface CreateTaskProps {
  onCreate: (task: Task) => void;
}

const CreateTask: React.FC<CreateTaskProps> = ({ onCreate }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [assignee, setAssignee] = useState('');
  const [tag, setTag] = useState<Tag>('frontend');
  const [estimation, setEstimation] = useState('');
  const [status, setStatus] = useState<TaskStatus>('open'); // ✅ new field

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTask: Task = {
      id: Date.now().toString(),
      title,
      description,
      dueDate,
      assignee,
      tag,
      createdAt: new Date().toISOString().split('T')[0],
      createdBy: 'CurrentUser', // Optional: Replace with real user if available
      estimation,
      status, // ✅ use selected status (default = 'open')
    };

    onCreate(newTask);

    // Reset form
    setTitle('');
    setDescription('');
    setDueDate('');
    setAssignee('');
    setTag('frontend');
    setEstimation('');
    setStatus('open');
  };

  return (
    <form className="create-task-form" onSubmit={handleSubmit}>
      <h2>Create New Task</h2>

      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
        required
      />

      <textarea
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Description"
        required
      />

      <input
        type="date"
        value={dueDate}
        onChange={e => setDueDate(e.target.value)}
        required
      />

      <input
        value={assignee}
        onChange={e => setAssignee(e.target.value)}
        placeholder="Assignee"
        required
      />

      <select value={tag} onChange={e => setTag(e.target.value as Tag)}>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="design">Design</option>
      </select>

      <input
        value={estimation}
        onChange={e => setEstimation(e.target.value)}
        placeholder="Estimation (e.g., 3h)"
        required
      />

      <select value={status} onChange={e => setStatus(e.target.value as TaskStatus)}>
        <option value="open">Open</option>
        <option value="inprogress">In Progress</option>
        <option value="review">Review</option>
        <option value="done">Done</option>
      </select>

      <button type="submit">Create Task</button>
    </form>
  );
};

export default CreateTask;
