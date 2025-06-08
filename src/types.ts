export type TaskStatus = 'open' | 'inprogress' | 'review' | 'done';

export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  assignee: string;
  tag: Tag;
  createdAt: string;
  createdBy: string;
  estimation: string;
  status: TaskStatus;
}

export type Tag = 'frontend' | 'backend' | 'design';

