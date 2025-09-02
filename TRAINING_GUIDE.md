# Client State Management Training: Context & Zustand 🧠

## Overview
This 6-hour training covers managing client-side state that isn't tied to route data, including user authentication status and application-wide settings.

## Training Structure

### 2.1 React Context Review (2 hours)
- **Location**: `app/contexts/` - Context implementations
- **Examples**: Theme management, user authentication
- **Key Files**: 
  - `ThemeContext.tsx` - Theme provider implementation
  - `AuthContext.tsx` - Authentication context example

### 2.2 Zustand Deep Dive (2 hours)
- **Location**: `app/stores/` - Zustand store implementations
- **Examples**: Counter, user profile, map coordinates
- **Key Files**:
  - `counterStore.ts` - Basic Zustand store
  - `userStore.ts` - Complex state with actions
  - `mapStore.ts` - Frequently updated state

### 2.3 Practical Exercise (2 hours)
- **Location**: `app/routes/training/` - Training components
- **Integration**: Both Context and Zustand in practice
- **Key Files**:
  - `context-demo.tsx` - Context usage examples
  - `zustand-demo.tsx` - Zustand usage examples
  - `combined-demo.tsx` - Using both together

## Getting Started

1. Run the development server:
   ```bash
   npm run dev
   ```

2. Navigate to `/training` to see all examples

3. Follow the exercises in order:
   - Context fundamentals
   - Zustand basics
   - Advanced patterns
   - Performance optimization

## Key Learning Objectives

- ✅ Understand when to use Context vs Zustand
- ✅ Implement proper state management patterns
- ✅ Optimize for performance with selectors
- ✅ Handle complex state updates
- ✅ Integrate with React Router 7

## Resources

- [React Context Documentation](https://react.dev/reference/react/useContext)
- [Zustand Documentation](https://zustand-demo.pmnd.rs/)
- [Performance Best Practices](./docs/performance.md)