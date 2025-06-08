import React, { useState } from 'react';
import KanbanBoard from './components/KanbanBoard';
import CreateTask from './components/CreateTask';
import Filter from './components/Filter';
import { initialTasks } from './data';
import { Task } from './types';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>(initialTasks);

  const addTask = (newTask: Task) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const deleteTask = (id: string) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const updateTaskStatus = (taskId: string, newStatus: Task['status']) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const handleFilter = (
  assignees: string[],
  tags: string[],
  logic: 'AND' | 'OR' | 'NOT'
) => {
  // Normalize filter inputs to lowercase
  const lowerAssignees = assignees.map(a => a.toLowerCase());
  const lowerTags = tags.map(t => t.toLowerCase());

  let filtered: Task[] = [];

  if (logic === 'AND') {
    filtered = tasks.filter(task =>
      (lowerAssignees.length === 0 || lowerAssignees.includes(task.assignee.toLowerCase())) &&
      (lowerTags.length === 0 || lowerTags.includes(task.tag.toLowerCase()))
    );
  } else if (logic === 'OR') {
    filtered = tasks.filter(task =>
      (lowerAssignees.length > 0 && lowerAssignees.includes(task.assignee.toLowerCase())) ||
      (lowerTags.length > 0 && lowerTags.includes(task.tag.toLowerCase()))
    );
  } else if (logic === 'NOT') {
    filtered = tasks.filter(task =>
      !lowerAssignees.includes(task.assignee.toLowerCase()) &&
      !lowerTags.includes(task.tag.toLowerCase())
    );
  }

  setFilteredTasks(filtered);
};


  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', marginTop: '1rem' }}>Kanban Task Board</h1>
      <Filter onFilter={handleFilter} />
      <CreateTask onCreate={addTask} />
      <div className="kanban-section">
        <KanbanBoard
          tasks={filteredTasks}
          onDelete={deleteTask}
          onStatusChange={updateTaskStatus}
        />
      </div>
    </div>
  );
};

export default App;
