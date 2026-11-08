import type { Project } from "../types/project";
import type { Task } from "../types/task";

export const mockProjects: Project[] = [
    {
    id: 'p1',
    title: 'Task Management SaaS',
    description: 'Учебный проект: канбан-доска',
    ownerId: 'u1',
    createdAt: '2026-10-10T10:00:00Z',
    updatedAt: '2026-10-10T10:00:00Z',
  },
  {
    id: 'p2',
    title: 'Личный сайт',
    description: 'Портфолио',
    ownerId: 'u1',
    createdAt: '2026-10-15T10:00:00Z',
    updatedAt: '2026-10-15T10:00:00Z',
  },
];

export const mockTasks: Task[] = [
    {
    id: 't1', projectId: 'p1', title: 'Разработать авторизацию',
    description: '', status: 'in_progress', priority: 'high',
    dueDate: '2026-10-20T00:00:00Z', // просрочена
    createdAt: '2026-10-11T10:00:00Z', updatedAt: '2026-10-11T10:00:00Z',
  },
  {
    id: 't2', projectId: 'p1', title: 'Создать Sidebar',
    description: '', status: 'todo', priority: 'medium',
    dueDate: '2026-12-01T00:00:00Z', // в срок
    createdAt: '2026-10-12T10:00:00Z', updatedAt: '2026-10-12T10:00:00Z',
  },
  {
    id: 't3', projectId: 'p1', title: 'Настроить MongoDB',
    description: '', status: 'backlog', priority: 'high',
    dueDate: null, // срока нет
    createdAt: '2026-10-13T10:00:00Z', updatedAt: '2026-10-13T10:00:00Z',
  },
  {
    id: 't4', projectId: 'p1', title: 'Добавить адаптивность',
    description: '', status: 'done', priority: 'low',
    dueDate: '2026-10-18T00:00:00Z', // срок прошёл, но задача Done, значит не просрочена
    createdAt: '2026-10-14T10:00:00Z', updatedAt: '2026-10-14T10:00:00Z',
  },
]


