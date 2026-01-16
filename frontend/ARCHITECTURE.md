# Frontend Architecture

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                         App.jsx                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              ErrorBoundary                            │   │
│  │  ┌────────────────────────────────────────────────┐  │   │
│  │  │         Main Application                        │  │   │
│  │  │  ┌──────────────┐  ┌──────────────┐           │  │   │
│  │  │  │  useTasks()  │  │  useToast()  │           │  │   │
│  │  │  └──────┬───────┘  └──────┬───────┘           │  │   │
│  │  │         │                  │                    │  │   │
│  │  │  ┌──────▼──────────────────▼───────┐          │  │   │
│  │  │  │      Component Tree              │          │  │   │
│  │  │  │  ┌────────────────────────────┐ │          │  │   │
│  │  │  │  │       TaskForm             │ │          │  │   │
│  │  │  │  └────────────────────────────┘ │          │  │   │
│  │  │  │  ┌────────────────────────────┐ │          │  │   │
│  │  │  │  │       TaskList             │ │          │  │   │
│  │  │  │  │  ┌──────────────────────┐  │ │          │  │   │
│  │  │  │  │  │    TaskItem (x N)    │  │ │          │  │   │
│  │  │  │  │  └──────────────────────┘  │ │          │  │   │
│  │  │  │  └────────────────────────────┘ │          │  │   │
│  │  │  │  ┌────────────────────────────┐ │          │  │   │
│  │  │  │  │    ToastContainer          │ │          │  │   │
│  │  │  │  │  ┌──────────────────────┐  │ │          │  │   │
│  │  │  │  │  │   Toast (x N)        │  │ │          │  │   │
│  │  │  │  │  └──────────────────────┘  │ │          │  │   │
│  │  │  │  └────────────────────────────┘ │          │  │   │
│  │  │  └──────────────────────────────────┘          │  │   │
│  │  └────────────────────────────────────────────────┘  │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

## 📊 Data Flow

```
┌──────────────┐
│    User      │
│   Action     │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  Component   │ ──────┐
│   Handler    │       │
└──────┬───────┘       │
       │               │
       ▼               │
┌──────────────┐       │
│  useTasks()  │       │
│    Hook      │       │
└──────┬───────┘       │
       │               │
       ▼               │
┌──────────────┐       │
│  API Call    │       │
│  (fetch)     │       │
└──────┬───────┘       │
       │               │
       ▼               │
┌──────────────┐       │
│   Backend    │       │
│   Server     │       │
└──────┬───────┘       │
       │               │
       ▼               │
┌──────────────┐       │
│   Response   │       │
└──────┬───────┘       │
       │               │
       ▼               │
┌──────────────┐       │
│ State Update │       │
└──────┬───────┘       │
       │               │
       ▼               │
┌──────────────┐       │
│  Re-render   │       │
└──────────────┘       │
                       │
       ┌───────────────┘
       │
       ▼
┌──────────────┐
│  useToast()  │
│    Hook      │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   Toast      │
│ Notification │
└──────────────┘
```

## 🔄 Component Lifecycle

### Initial Load
```
1. App mounts
2. useTasks() hook initializes
3. fetchTasks() called automatically
4. Loading state = true
5. API request to backend
6. Response received
7. State updated with tasks
8. Loading state = false
9. Components render with data
```

### User Action (Add Task)
```
1. User types in TaskForm
2. User clicks "Add" button
3. handleAddTask() called
4. useTasks().addTask() invoked
5. API POST request
6. Response received
7. fetchTasks() called to refresh
8. State updated
9. useToast().addToast() called
10. Success toast displayed
11. Components re-render
```

## 🧩 Component Hierarchy

```
App
├── ErrorBoundary
│   ├── LoadingSpinner (conditional)
│   ├── ErrorState (conditional)
│   └── Main Content
│       ├── Header
│       ├── TaskForm
│       │   └── Input + Buttons
│       ├── TaskList
│       │   ├── TaskStats
│       │   └── TaskItem (multiple)
│       │       ├── Checkbox
│       │       ├── Title
│       │       └── Actions (Edit/Delete)
│       └── ToastContainer
│           └── Toast (multiple)
```

## 🎣 Hook Dependencies

```
useTasks()
├── useState (tasks, loading, error)
├── useEffect (auto-fetch on mount)
├── useCallback (memoized functions)
└── fetch API calls
    └── Backend API

useToast()
├── useState (toasts array)
├── useCallback (add/remove functions)
└── setTimeout (auto-dismiss)
```

## 📦 Module Dependencies

```
App.jsx
├── components/
│   ├── TaskForm
│   ├── TaskList
│   │   └── TaskItem
│   ├── LoadingSpinner
│   ├── ToastContainer
│   │   └── Toast
│   └── ErrorBoundary
├── hooks/
│   ├── useTasks
│   └── useToast
└── constants/
    └── index (API_URL, MESSAGES, etc.)

useTasks.js
├── constants/index (API_URL)
└── fetch API

Components
├── PropTypes (validation)
└── CSS files
```

## 🔐 State Management

### Global State (via Hooks)
- **useTasks**: Task data, loading, error states
- **useToast**: Toast notifications

### Local State (Component Level)
- **TaskForm**: Input value, submitting state
- **TaskItem**: Deleting state
- **App**: Editing task reference

## 🎯 Design Patterns Used

### 1. Custom Hooks Pattern
Encapsulates logic and state management for reusability.

### 2. Container/Presentational Pattern
- **Container**: App.jsx (logic)
- **Presentational**: TaskForm, TaskItem (UI)

### 3. Composition Pattern
Components composed together to build complex UI.

### 4. Error Boundary Pattern
Catches and handles React errors gracefully.

### 5. Render Props Pattern
Toast system uses function children for flexibility.

### 6. Controlled Components
All form inputs are controlled by React state.

## 🚀 Performance Optimizations

1. **useCallback**: Memoized functions prevent unnecessary re-renders
2. **Conditional Rendering**: Only render what's needed
3. **Key Props**: Proper keys for list rendering
4. **Lazy Loading Ready**: Structure supports code splitting
5. **Minimal Re-renders**: State updates are targeted

## 🔒 Security Measures

1. **Input Validation**: Client-side validation before API calls
2. **XSS Prevention**: React's built-in escaping
3. **Environment Variables**: Sensitive config in .env
4. **Error Handling**: No sensitive data in error messages
5. **PropTypes**: Runtime type checking

## 📱 Responsive Strategy

1. **Mobile-First CSS**: Base styles for mobile
2. **Media Queries**: Breakpoints for larger screens
3. **Flexible Layouts**: Flexbox and Grid
4. **Touch-Friendly**: Large tap targets
5. **Adaptive UI**: Actions visible on mobile

## 🧪 Testability

### Easy to Test
- **Pure Functions**: utils/ folder
- **Isolated Hooks**: Can be tested independently
- **PropTypes**: Built-in validation
- **Mocked API**: Easy to mock fetch calls

### Test Structure
```
tests/
├── components/
│   ├── TaskForm.test.jsx
│   ├── TaskItem.test.jsx
│   └── TaskList.test.jsx
├── hooks/
│   ├── useTasks.test.js
│   └── useToast.test.js
└── utils/
    ├── api.test.js
    └── validation.test.js
```

## 🔮 Extensibility

### Easy to Add
- New components (drop in components/)
- New hooks (drop in hooks/)
- New utilities (drop in utils/)
- New constants (add to constants/index.js)
- New features (follow existing patterns)

### Future Enhancements
- Redux/Zustand for complex state
- React Query for server state
- React Router for navigation
- Storybook for component docs
- Jest/Vitest for testing
- Cypress for E2E tests

---

This architecture provides a solid foundation for a scalable, maintainable, and professional React application.
