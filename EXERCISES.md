# State Management Training Exercises

## Exercise 1: Context API Fundamentals (45 minutes)

### Part A: Create a Settings Context (15 minutes)
1. Create `app/contexts/SettingsContext.tsx`
2. Manage user preferences: language, timezone, notifications
3. Provide methods to update individual settings

### Part B: Implement Provider Pattern (15 minutes)
1. Wrap your app with the SettingsProvider
2. Create a settings page that uses the context
3. Demonstrate how changes persist across navigation

### Part C: Performance Analysis (15 minutes)
1. Add console.log to see re-render behavior
2. Try updating settings frequently - observe performance
3. Discuss when Context becomes problematic

## Exercise 2: Zustand Deep Dive (45 minutes)

### Part A: Create a Todo Store (15 minutes)
```typescript
interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

interface TodoState {
  todos: Todo[];
  filter: 'all' | 'active' | 'completed';
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  setFilter: (filter: 'all' | 'active' | 'completed') => void;
}
```

### Part B: Implement Selectors (15 minutes)
1. Create selectors for filtered todos
2. Create selectors for todo statistics
3. Demonstrate performance benefits

### Part C: Advanced Patterns (15 minutes)
1. Add undo/redo functionality
2. Implement optimistic updates
3. Add persistence with localStorage

## Exercise 3: Integration Challenge (30 minutes)

### Scenario: Weather Dashboard
Build a weather dashboard that uses both Context and Zustand:

**Context Usage:**
- User preferences (units, default location)
- Theme settings
- Authentication state

**Zustand Usage:**
- Weather data cache
- Map coordinates and zoom level
- Search history
- Loading states

### Requirements:
1. Theme toggle affects entire app
2. Weather data updates frequently
3. Map interactions are smooth
4. User preferences persist
5. Search history is maintained

## Bonus Challenges

### Challenge 1: Performance Optimization
- Implement React.memo strategically
- Use Zustand selectors to prevent unnecessary re-renders
- Measure and compare performance

### Challenge 2: DevTools Integration
- Add Zustand devtools
- Implement time-travel debugging
- Create custom middleware

### Challenge 3: Server State Integration
- Combine with React Query/SWR
- Handle optimistic updates
- Manage cache invalidation

## Self-Assessment Checklist

After completing the exercises, you should be able to:

- [ ] Explain when to use Context vs Zustand
- [ ] Implement proper Context provider patterns
- [ ] Create Zustand stores with actions
- [ ] Use selectors for performance optimization
- [ ] Combine both approaches effectively
- [ ] Handle complex state updates
- [ ] Debug state management issues
- [ ] Make informed architectural decisions

## Additional Resources

- [Zustand GitHub](https://github.com/pmndrs/zustand)
- [React Context Patterns](https://kentcdodds.com/blog/how-to-use-react-context-effectively)
- [State Management Comparison](https://blog.logrocket.com/react-state-management-tools/)