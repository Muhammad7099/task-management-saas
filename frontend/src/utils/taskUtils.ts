import type { Task, TaskPriority, TaskStatus } from "../types/task";

// Просрочена = есть срок + срок прошёл + статус не Done
export function isOverdue(task: Task, now: Date = new Date()): boolean {
    if (task.dueDate === null) return false;
    if (task.status === 'done') return false;
    return new Date(task.dueDate) < now;
}

export interface TaskFilters {
  search: string;
  priority: TaskPriority | 'all';
  onlyOverdue: boolean;
}

export function filterTasks(tasks: Task[], filters: TaskFilters): Task[]{
    const query = filters.search.trim().toLowerCase();

    return tasks.filter((task) => {
        if (query && !task.title.toLowerCase().includes(query)) return false;
        if (filters.priority !== 'all' && task.priority !== filters.priority) return false;
        if (filters.onlyOverdue && !isOverdue(task)) return false;
        return true;
    });
}

export interface ProjectStats {
  total: number;
  byStatus: Record<TaskStatus, number>;
  overdue: number;
  progress: number; // 0..100
}

export function getProjectStats(tasks: Task[]): ProjectStats {
  const byStatus: Record<TaskStatus, number> = {
    backlog: 0,
    todo: 0,
    in_progress: 0,
    done: 0,
  };

  for (const task of tasks) {
    byStatus[task.status] += 1;
  }

  const total = tasks.length;
  const progress = total === 0 ? 0 : Math.round((byStatus.done / total) * 100);

  return {
    total,
    byStatus,
    overdue: tasks.filter((t) => isOverdue(t)).length,
    progress,
  };
}