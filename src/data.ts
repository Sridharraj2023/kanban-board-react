// src/data.ts
import { Task } from './types';

export const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Design Homepage',
    description: 'Create wireframes for the homepage.',
    dueDate: '2025-06-10',
    assignee: 'Alice',
    tag: 'design',
    createdAt: '2025-06-01',
    createdBy: 'Bob',
    estimation: '3h',
    status: 'open',
  },
  {
    id: '2',
    title: 'Setup Backend API',
    description: 'Initialize Express server and routes.',
    dueDate: '2025-06-12',
    assignee: 'John',
    tag: 'backend',
    createdAt: '2025-06-03',
    createdBy: 'Alice',
    estimation: '5h',
    status: 'inprogress',
  },
  {
    id: '3',
    title: 'Implement Login UI',
    description: 'Create login form using Fluent UI components.',
    dueDate: '2025-06-14',
    assignee: 'Meera',
    tag: 'frontend',
    createdAt: '2025-06-05',
    createdBy: 'John',
    estimation: '2h',
    status: 'review',
  },
  {
    id: '4',
    title: 'Test Email Notifications',
    description: 'Verify SMTP config and test email alerts.',
    dueDate: '2025-06-15',
    assignee: 'Alice',
    tag: 'frontend',
    createdAt: '2025-06-06',
    createdBy: 'Meera',
    estimation: '1h',
    status: 'done',
  },
];





