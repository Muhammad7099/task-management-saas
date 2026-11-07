План разработки Task Management SaaS
Идём последовательно: одна задача → пишем код → проверяем результат → понимаем, что сделали → переходим дальше.

Этап 1. Подготовка
1. Устанавливаем инструменты
    Нужно: Node.js (LTS), VS Code, Git, аккаунт GitHub, MongoDB Atlas.
    Результат: компьютер готов к разработке, база данных доступна в интернете.
2. Создаём проект
    Нужно: Vite, React, TypeScript.
    Результат: запускаемое React-приложение и папка frontend.
3. Настраиваем Git и GitHub
    Нужно: репозиторий, .gitignore, первые коммиты.
    Результат: сохраняем историю разработки и код проекта.


Этап 2. Создаём интерфейс
4. Разрабатываем общий макет
    Нужно: HTML/JSX, CSS, Flexbox, Grid, адаптивная вёрстка.
    Результат: боковая панель и основная рабочая область.
5. Делаем канбан-доску
    Нужно: компоненты Board, Column, TaskCard и временные тестовые данные.
    Результат: четыре колонки с карточками задач.
6. Создаём модальные окна и формы
    Нужно: useState, формы, обработчики событий.
    Результат: окна создания проекта и задачи, ввод и редактирование данных.
7. Добавляем поиск и аналитику
    Нужно: filter, вычисление статистики, CSS.
    Результат: поиск задач, фильтры и прогресс проекта.


Этап 3. Создаём сервер и базу данных
8. Настраиваем backend
    Нужно: Node.js, Express, папка backend, REST API.
    Результат: работающий сервер, принимающий запросы.
9. Подключаем MongoDB
    Нужно: MongoDB Atlas, Mongoose, переменные окружения .env.
    Результат: сервер подключён к базе данных.
10. Создаём модели данных
    Нужно: схемы User, Project, Task.
    Результат: определяем, как хранятся пользователи, проекты и задачи.


Этап 4. Авторизация и функциональность
11. Реализуем регистрацию и вход
    Нужно: формы, API, bcrypt, JWT, валидация.
    Результат: пользователь регистрируется и входит в аккаунт.
12. Защищаем приложение
    Нужно: middleware для проверки JWT, ProtectedRoute, React Router.
    Результат: закрытые страницы доступны только авторизованным пользователям.
13. Реализуем проекты
    Нужно: API и CRUD-операции, Redux Toolkit.
    Результат: создание, просмотр, редактирование и удаление проектов.
14. Реализуем задачи
    Нужно: API задач, статусы, приоритеты, исполнители, сроки.
    Результат: задачи сохраняются в базе и перемещаются между колонками.
15. Соединяем frontend и backend
    Нужно: fetch, async/await, обработка ошибок, Redux Toolkit.
    Результат: интерфейс работает с реальными данными, а не с тестовым массивом.


Этап 5. Завершение
16. Улучшаем интерфейс
    Нужно: тёмная тема, адаптивность, загрузка, пустые состояния, уведомления.
    Результат: законченный и удобный продукт.
17. Проверяем безопасность и ошибки
    Нужно: проверка прав доступа, валидация данных, тестирование сценариев.
    Результат: пользователи не могут изменять чужие проекты и задачи.
18. Публикуем проект
    Нужно: хостинг frontend и backend, база данных, .env.example, README, скриншоты.
    Результат: рабочий проект в интернете и готовое портфолио на GitHub.





Новая дорожная карта

7 этапов

1. Подготовка и проектирование
   
   Определяем MVP, пользовательские сценарии, структуру приложения и модели данных.
   Завершена техническая подготовка


2. Frontend: архитектура и основной макет
   
   Структура компонентов, маршрутизация, Sidebar, Header, рабочая область, базовые стили.


3. Frontend: функциональность
   
   Канбан, карточки, формы, создание и редактирование задач, поиск, фильтры, тестовые данные.


4. Backend и база данных
   
   Node.js, Express, MongoDB Atlas, Mongoose, структура API, модели и обработка ошибок.


5. Авторизация и бизнес-логика
   
   Регистрация, вход, JWT, защита маршрутов, проверка прав доступа, CRUD проектов и задач.


6. Интеграция frontend и backend
   
   RTK Query, подключение API, удаление тестовых массивов, загрузка и обработка ошибок.


7. Тестирование, полировка и публикация
   
   Адаптивность, тёмная тема, UX, тесты, безопасность, деплой и оформление GitHub.



Этап 1. Подготовка и проектирование продукта
Техническую подготовку мы уже выполнили. Но перед написанием интерфейса я хочу добавить небольшую задачу — определить границы первой версии приложения.

Это называется MVP (Minimum Viable Product) — минимально жизнеспособный продукт.

Наш первый релиз не должен содержать вообще всё, что можно придумать для системы управления задачами.

Я предлагаю следующий функционал.
Функциональность первой версии
Включаем в MVP
- Регистрация, вход и выход.
- Создание и удаление проектов.
- Просмотр канбан-доски проекта.
- Создание, редактирование и удаление задач.
- Четыре статуса: Backlog, Todo, In Progress, Done.
- Приоритеты: Low, Medium, High.
- Срок выполнения задачи.
- Поиск и фильтрация.
- Простая статистика проекта.

Что пока откладываем
Вторая версия
- Приглашение участников в проекты.
- Командные роли и сложные права доступа.
- Комментарии к задачам.
- Загрузка файлов.
- Уведомления.
- Совместная работа в реальном времени.
- Сложная аналитика и графики.

Почему это важно?

Потому что функции приглашения участников, командных ролей и совместной работы существенно усложняют архитектуру. Нам сначала нужно научиться создавать полноценный продукт с одним владельцем проекта.
Что нужно определить до разработки
Составим карту страниц:
Страница	       -      Назначение
Login	           -      Авторизация
Register	       -      Создание аккаунта
Dashboard	       -      Обзор проектов
Projects	       -      Список проектов
Project Board      -  	  Канбан-доска конкретного проекта

Также заранее определим основные сущности базы данных.
Сущность           -	Основные поля
User	           -    id, name, email, passwordHash
Project            - 	id, title, description, ownerId
Task               -	id, projectId, title, description, status, priority, dueDate

Я бы пока убрал members[] и полноценный assigneeId из первой версии. Когда появится командная функциональность, мы добавим их осознанно.

Это не означает, что мы навсегда отказываемся от таких возможностей. Мы просто не берём их в работу раньше времени.




Этап 2. Frontend: архитектура и основной макет
Здесь начинается непосредственная разработка.

Я предлагаю не начинать с карточек задач. Сначала создадим основу приложения.
Задача 2.1. Разбираем текущую структуру Vite
Нам нужно понять назначение существующих файлов:
- App.tsx;
- main.tsx;
- App.css;
- index.css;
- vite.config.ts;
- tsconfig.json;
- package.json.
Не будем удалять файлы наугад. Разберём, какие из них отвечают за запуск приложения, а какие за интерфейс и конфигурацию.
Задача 2.2. Организуем архитектуру компонентов
Предлагаю постепенно прийти к такой структуре:

src/
│
├── app/
│   ├── App.tsx
│   └── router.tsx
│
├── components/
│   └── layout/
│       ├── Sidebar/
│       ├── Header/
│       └── MainLayout/
│
├── features/
│   ├── projects/
│   │   └── components/
│   │
│   └── tasks/
│       └── components/
│
├── pages/
│   ├── DashboardPage/
│   ├── ProjectsPage/
│   └── ProjectBoardPage/
│
├── types/
│
├── data/
│
├── styles/
│   └── index.css
│
└── main.tsx

Это ориентир, а не требование создать все папки сразу.

Почему так?

Например, всё, что относится к задачам, будет находиться внутри features/tasks. Это позволит не превращать проект в одну огромную папку с десятками несвязанных компонентов.

Задача 2.3. Добавляем маршрутизацию
Нам понадобится возможность переходить между страницами приложения.

Например:
/login
/register
/dashboard
/projects
/projects/123

Для этого я рекомендую использовать React Router.

![alt text](image.png)   ![alt text](image-1.png)   ![alt text](image-2.png)

Наш основной экран будет включать:
- Sidebar — боковая панель навигации.
- Header — верхняя панель.
- Main Content — рабочая область.
- Основной контент — в зависимости от выбранной страницы.
Сначала сделаем статический макет, без сложной логики.

При этом сразу предусмотрим CSS-переменные для цветов, размеров, отступов и типографики. Так впоследствии будет проще реализовать тёмную тему и адаптивность.


Этап 3. Frontend: функциональность
Теперь оживляем интерфейс.

Здесь рекомендую использовать тестовые данные, которые мы заранее типизируем с помощью TypeScript.
Задача 3.1. Создаём типы
Например, Task:
type TaskStatus =
  | "backlog"
  | "todo"
  | "in-progress"
  | "done";

type TaskPriority =
  | "low"
  | "medium"
  | "high";

interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string | null;
  projectId: string;
}

Это наша модель задачи на стороне frontend.

Зачем типы? Чтобы TypeScript помогал нам контролировать структуру объектов и выявлять ошибки ещё во время разработки.

Задача 3.2. Создаём канбан-доску

![alt text](image-3.png)

Создадим три основных компонента:
Компонент	Ответственность
Board        -  	Вся доска
Column	     -      Отдельная колонка со статусом
TaskCard	 -      Карточка отдельной задачи

Для начала загрузим тестовые задачи.

Пока не будем использовать drag-and-drop. Сначала реализуем перемещение задач между колонками через понятные кнопки или меню. Перетаскивание добавим позже, когда основная логика будет работать.

Задача 3.3. Реализуем CRUD задач
CRUD — четыре основные операции:
- Create — создание.
- Read — чтение.
- Update — изменение.
- Delete — удаление.
Мы должны научиться создавать задачи, отображать их, редактировать и удалять.

Затем займёмся созданием проектов и модальными окнами.
Задача 3.4. Поиск и фильтры
Добавим:
- поиск по названию задачи;
- фильтрацию по приоритету;
- фильтрацию по статусу;
- поиск задач в рамках конкретного проекта.
Задача 3.5. Простая аналитика
Теперь, когда у нас есть работающие задачи, рассчитываем:
- общее количество;
- количество завершённых;
- количество активных;
- процент выполнения.
Здесь хочу обратить твоё внимание на важный принцип React: не нужно хранить в состоянии данные, которые можно вычислить из уже имеющегося состояния. Например, процент выполнения можно рассчитывать на основе массива задач. Это помогает избежать рассинхронизации данных. 
React+1


Результат третьего этапа: у нас будет интерактивное frontend-приложение, которое работает с тестовыми данными, но уже выглядит и ощущается как настоящий продукт.

Этап 4. Backend и база данных
Здесь переходим к серверной части.

Предлагаемая архитектура:
task-management-saas/
│
├── frontend/
│   └── React + TypeScript
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── models/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── services/
│   │   └── app.js
│   │
│   ├── .env
│   ├── .env.example
│   └── package.json
│
├── .gitignore
├── README.md
└── ROADMAP.md

Структура будет уточняться по мере разработки.

Разделим этот этап на несколько задач:
1. Создаём backend/.
2. Устанавливаем Node.js-зависимости: Express, Mongoose и необходимые инструменты.
3. Создаём Express-сервер.
4. Настраиваем переменные окружения.
5. Создаём базу данных в MongoDB Atlas.
6. Подключаем MongoDB через Mongoose.
7. Создаём модели User, Project, Task.
8. Настраиваем обработку ошибок и валидацию входящих данных.
9. Описываем API и проверяем его работу.
Нам важно не просто подключить базу данных, но и понять, как данные проходят через приложение:

Frontend
   ↓
HTTP Request
   ↓
Express Route
   ↓
Controller
   ↓
Service
   ↓
Mongoose Model
   ↓
MongoDB

Это одна из ключевых архитектурных концепций, которую тебе предстоит освоить.

Этап 5. Авторизация и бизнес-логика
Теперь создаём систему пользователей и защищаем данные.
Авторизация
- Регистрация пользователя.
- Хеширование пароля с помощью bcrypt.
- Авторизация.
- Создание и проверка JWT.
- Выход пользователя.
- Получение информации о текущем пользователе.
- Защита серверных маршрутов.
Важно: проверка доступа должна выполняться на backend. Недостаточно просто скрыть кнопку или страницу на frontend.

Например, пользователь не должен иметь возможность получить чужой проект, просто подставив другой projectId в запрос.
CRUD через API
Создадим основные маршруты:
Метод               -           	Маршрут	Действие
POST                -           	/api/auth/register	Регистрация
POST                -           	/api/auth/login	Вход
GET                 -           	/api/auth/me	Текущий пользователь
GET                 -           	/api/projects	Получить проекты
POST                -           	/api/projects/:id	Изменить проект
DELETE              -           	/api/projects/:id	Удалить проект
GET                 -           	/api/projects/:id/tasks	Получить задачи
POST                -           	/api/projects/:id/tasks	Создать задачу
PATCH               -           	/api/tasks/:id	Изменить задачу
DELETE              -           	/api/tasks/:id	Удалить задачу

Мы также проверим, что пользователь имеет право работать с соответствующими проектами и задачами.




Этап 6. Интеграция frontend и backend
Вот здесь произойдёт важный переход.

До этого момента frontend работал с тестовым массивом данных. Теперь вместо него будет использоваться настоящее API.

Например:

До интеграции:

const [tasks, setTasks] = useState(mockTasks);

После интеграции:

Получение и изменение задач будет происходить через RTK Query.

Мы постепенно подключим:
- загрузку проектов;
- создание проектов;
- удаление проектов;
- загрузку задач;
- создание, редактирование и удаление задач;
- изменение статуса;
- авторизацию.
Также реализуем отображение загрузки, ошибок и обновление данных после изменений.

Здесь важно, чтобы ты понял не только синтаксис Redux Toolkit, но и весь путь данных: от нажатия кнопки в React до изменения записи в MongoDB и обновления интерфейса.



Этап 7. Тестирование, полировка и публикация
Последний этап — доводим продукт до состояния портфолио.
Направление	Что делаем
Адаптивность	Телефон, планшет, ноутбук и большой экран
Дизайн	Тёмная тема, единообразие компонентов
UX	Пустые состояния, уведомления, подтверждения удаления
Безопасность	Проверка доступа, валидация, защита секретов
Тестирование	Проверка основных сценариев и ошибок
Публикация	Размещение frontend, backend и настройка MongoDB
GitHub	README, скриншоты, описание функциональности

Отдельно рекомендую хотя бы базовые автоматические тесты для авторизации и CRUD. Для портфолио это будет хорошим дополнением.













========================================================================================================================









Давайте начнём. Теория дальше будет короткими пометками «зачем» внутри шагов. Сегодня четыре шага, а в конце ваше задание.

Шаг 0. Подготовка

В папке frontend/ установите роутер и создайте структуру:

bash
npm install react-router-dom
mkdir -p src/types src/data src/utils src/constants src/pages

Зачем структура: каждая папка отвечает за одно. Типы, данные, логика и страницы не смешиваются, поэтому код проще находить и менять.

Шаг 1. Типы

Типы нужны, чтобы TypeScript сам ловил ошибки. Например, он не даст записать статус "dnoe".

src/types/user.ts

ts
export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  // passwordHash здесь нет намеренно: на фронтенд он не попадает никогда
}

src/types/project.ts

ts
export interface Project {
  id: string;
  title: string;
  description: string;
  ownerId: string;
  createdAt: string;
  updatedAt: string;
}

src/types/task.ts

ts
export type TaskStatus = 'backlog' | 'todo' | 'in_progress' | 'done';
export type TaskPriority = 'low' | 'medium' | 'high';

export interface Task {
  id: string;
  projectId: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string | null; // null = срока нет
  createdAt: string;
  updatedAt: string;
}

Почему id, а не _id, как в MongoDB: фронтенду не нужно знать, какая база стоит за сервером. Позже бэкенд будет отдавать поле id.

src/constants/task.ts: единое место для названий, чтобы не дублировать их по компонентам.

ts
import type { TaskPriority, TaskStatus } from '../types/task';

export const STATUSES: { value: TaskStatus; label: string }[] = [
  { value: 'backlog', label: 'Backlog' },
  { value: 'todo', label: 'To Do' },
  { value: 'in_progress', label: 'In Progress' },
  { value: 'done', label: 'Done' },
];

export const PRIORITIES: { value: TaskPriority; label: string }[] = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
];

Порядок в массиве STATUSES задаёт порядок колонок на доске. Потом вы просто пройдёте по нему циклом.

Шаг 2. Тестовые данные

src/data/mockData.ts

ts
import type { Project } from '../types/project';
import type { Task } from '../types/task';

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
];

Я специально подобрал данные так, чтобы проверить все ветки вашей логики: просрочена, в срок, без срока, срок прошёл, но задача done.

Шаг 3. Бизнес-логика

Здесь реализуются правила из вашей спецификации. Это чистые функции: они берут данные и возвращают результат, ничего не меняя снаружи. Их легко проверять и потом переиспользовать с любым источником данных (тестовым или настоящим API).

src/utils/taskUtils.ts

ts
import type { Task, TaskPriority, TaskStatus } from '../types/task';

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

export function filterTasks(tasks: Task[], filters: TaskFilters): Task[] {
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

Обратите внимание на три приёма:

Ранний return false вместо вложенных if. Каждое условие читается отдельно.
Record<TaskStatus, number> заставляет TypeScript требовать все четыре статуса. Забудете один, будет ошибка.
Деление на ноль обработано отдельно: пустой проект даёт 0%, как вы и записали в спецификации.

Проверьте, что это работает. Временно добавьте в src/main.tsx сверху:

ts
import { mockTasks } from './data/mockData';
import { getProjectStats } from './utils/taskUtils';
console.log(getProjectStats(mockTasks));

Запустите npm run dev и откройте консоль браузера (F12). Должно получиться: total: 4, overdue: 1, progress: 25. Если так, логика верна. Потом эти две строки удалите.

Шаг 4. Маршруты и каркас страниц

src/pages/DashboardPage.tsx

tsx
export default function DashboardPage() {
  return <h1>Dashboard</h1>;
}

src/pages/ProjectBoardPage.tsx

tsx
import { useParams } from 'react-router-dom';

export default function ProjectBoardPage() {
  const { projectId } = useParams();
  return <h1>Доска проекта: {projectId}</h1>;
}

src/pages/NotFoundPage.tsx

tsx
export default function NotFoundPage() {
  return <h1>404: страница не найдена</h1>;
}

src/App.tsx

tsx
import { Navigate, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ProjectBoardPage from './pages/ProjectBoardPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/projects/:projectId" element={<ProjectBoardPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

src/main.tsx: оберните <App /> в <BrowserRouter>:

tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);

Проверьте в браузере: / перебрасывает на /dashboard, /projects/p1 показывает p1, а любой другой адрес показывает 404. Здесь :projectId в пути означает «любое значение», которое useParams отдаёт в компонент.

Когда всё заработает, сделайте коммит:

bash
git add .
git commit -m "Add types, mock data, task utils and routing skeleton"
Ваше задание

Доработайте DashboardPage самостоятельно:

Импортируйте mockProjects и mockTasks.
Выведите список проектов. Каждый проект должен быть ссылкой <Link to={/projects/${project.id}}> на его доску.
Рядом с каждым проектом покажите число его задач и процент выполнения. Для этого отфильтруйте mockTasks по projectId и вызовите getProjectStats.
Над списком сделайте общую сводку по всем задачам: всего, просрочено, прогресс.

Пока не думайте про красоту и кнопки создания. Задача состоит в том, чтобы связать данные, логику и страницу. Стили и формы добавим следующим шагом, когда данные начнут меняться через useState.

Если застрянете, пришлите код и текст ошибки. А если что-то в шагах 1–4 осталось непонятным (например, Record или Navigate), спрашивайте сразу.