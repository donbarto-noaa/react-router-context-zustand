# MapLibre GL JS Study Guide 🗺️

## Overview
This guide covers MapLibre GL JS integration with React and Zustand, following the DESI mapping library patterns.

## 📚 Study Plan (6 hours total)

### Phase 1: MapLibre GL JS Fundamentals (2 hours)

#### 🎯 Learning Objectives
- Understand MapLibre GL JS core concepts
- Initialize maps with different configurations
- Handle basic map events
- Add navigation controls

#### 🛠️ Key Concepts
```typescript
// Basic map initialization
const map = new maplibregl.Map({
  container: 'map-container',
  style: 'https://demotiles.maplibre.org/style.json',
  center: [-74.0060, 40.7128],
  zoom: 10
});

// Event handling
map.on('load', () => console.log('Map loaded'));
map.on('click', (e) => console.log('Clicked at:', e.lngLat));
map.on('move', () => console.log('Map moved'));
```

#### ✅ Exercises
1. **Basic Map Setup**: Create a map with different styles and locations
2. **Event Logging**: Implement click and move event handlers
3. **Control Addition**: Add navigation and scale controls
4. **Style Switching**: Implement dynamic style changes

#### 🔍 Practice Tasks
- [ ] Initialize map with custom center and zoom
- [ ] Add navigation controls
- [ ] Log map events to console
- [ ] Switch between different map styles
- [ ] Handle map resize events

---

### Phase 2: React Integration (2 hours)

#### 🎯 Learning Objectives
- Integrate MapLibre with React lifecycle
- Manage map state with React hooks
- Handle props-driven updates
- Implement markers and popups

#### 🛠️ Key Patterns
```typescript
// React integration pattern
const mapContainer = useRef<HTMLDivElement>(null);
const map = useRef<maplibregl.Map | null>(null);

useEffect(() => {
  // Initialize map
  map.current = new maplibregl.Map({...});
  
  // Cleanup
  return () => map.current?.remove();
}, []);

// Props-driven updates
useEffect(() => {
  if (map.current) {
    map.current.flyTo({ center, zoom });
  }
}, [center, zoom]);
```

#### ✅ Exercises
1. **React Map Component**: Create reusable map component
2. **Props Integration**: Handle center, zoom, and style props
3. **Marker Management**: Add/remove markers based on props
4. **Event Callbacks**: Implement onMapClick and onMarkerClick

#### 🔍 Practice Tasks
- [ ] Create ReactMap component with TypeScript
- [ ] Handle map initialization in useEffect
- [ ] Implement proper cleanup
- [ ] Add markers with custom styling
- [ ] Create popups with HTML content
- [ ] Handle map and marker click events

---

### Phase 3: Zustand Integration (2 hours)

#### 🎯 Learning Objectives
- Synchronize map state with Zustand store
- Implement bidirectional state updates
- Optimize with selectors
- Handle complex state interactions

#### 🛠️ Key Patterns
```typescript
// Zustand integration
const coordinates = useMapCoordinates(); // Selector
const { updateCoordinates, addMarker } = useMapStore();

// Sync map to store
map.on('moveend', () => {
  const center = map.getCenter();
  updateCoordinates({
    lat: center.lat,
    lng: center.lng,
    zoom: map.getZoom()
  });
});

// Sync store to map
useEffect(() => {
  map.current?.flyTo({
    center: [coordinates.lng, coordinates.lat],
    zoom: coordinates.zoom
  });
}, [coordinates]);
```

#### ✅ Exercises
1. **State Synchronization**: Sync map state with Zustand
2. **Bidirectional Updates**: Handle both map→store and store→map updates
3. **Marker Management**: Use store for marker CRUD operations
4. **Performance Optimization**: Implement selectors and prevent loops

#### 🔍 Practice Tasks
- [ ] Create ZustandMap component
- [ ] Implement moveend event handler
- [ ] Sync coordinates bidirectionally
- [ ] Add markers through store actions
- [ ] Use selectors for performance
- [ ] Handle marker selection state

---

## 🎯 Practical Exercises

### Exercise 1: Basic Map Implementation
**Time**: 30 minutes
**Goal**: Create a working map with basic functionality

```typescript
// Your task: Implement BasicMap component
// Requirements:
// - Initialize map with props
// - Add navigation controls
// - Handle map events
// - Proper cleanup
```

### Exercise 2: React Integration
**Time**: 45 minutes
**Goal**: Build a React-integrated map with markers

```typescript
// Your task: Implement ReactMap component
// Requirements:
// - Props-driven updates
// - Marker management
// - Event callbacks
// - GeoJSON integration
```

### Exercise 3: Zustand Integration
**Time**: 45 minutes
**Goal**: Connect map to Zustand store

```typescript
// Your task: Implement ZustandMap component
// Requirements:
// - Bidirectional state sync
// - Store-driven markers
// - Performance optimization
// - State persistence
```

---

## 🚀 Advanced Topics

### Performance Optimization
- Use selectors to prevent unnecessary re-renders
- Implement shallow equality for object comparisons
- Debounce frequent updates (like map moves)
- Lazy load map styles and data

### Best Practices
- Always cleanup map instances
- Use refs for map containers and instances
- Handle loading states gracefully
- Implement error boundaries for map failures

### Common Patterns
```typescript
// Debounced updates
const debouncedUpdate = useMemo(
  () => debounce(updateCoordinates, 100),
  [updateCoordinates]
);

// Conditional updates to prevent loops
if (Math.abs(currentCenter.lat - coordinates.lat) > 0.001) {
  map.current.flyTo({ center: [coordinates.lng, coordinates.lat] });
}

// Marker cleanup
useEffect(() => {
  return () => {
    Object.values(markersRef.current).forEach(marker => marker.remove());
  };
}, []);
```

---

## 📝 Assessment Checklist

### Phase 1 Completion
- [ ] Can initialize MapLibre map with custom options
- [ ] Understands map events and their use cases
- [ ] Can add and configure map controls
- [ ] Knows how to switch map styles dynamically

### Phase 2 Completion
- [ ] Can integrate MapLibre with React lifecycle
- [ ] Understands useRef and useEffect patterns
- [ ] Can handle props-driven map updates
- [ ] Can implement markers and popups

### Phase 3 Completion
- [ ] Can sync map state with Zustand store
- [ ] Understands bidirectional state updates
- [ ] Can optimize with selectors
- [ ] Can handle complex state interactions

---

## 🔗 Resources

### Documentation
- [MapLibre GL JS API](https://maplibre.org/maplibre-gl-js-docs/api/)
- [MapLibre Style Specification](https://maplibre.org/maplibre-style-spec/)
- [Zustand Documentation](https://github.com/pmndrs/zustand)

### Examples
- Check `/app/routes/training.maplibre-demo.tsx` for live examples
- See `/app/components/` for component implementations
- Review `/app/stores/mapStore.ts` for state management

### Next Steps
- Explore custom map styles
- Implement data-driven styling
- Add animation and transitions
- Integrate with external APIs

---

## 🎉 Completion Goals

By the end of this study session, you should be able to:
1. Create a MapLibre map from scratch
2. Integrate it seamlessly with React
3. Connect it to Zustand for state management
4. Understand the patterns used in DESI's mapping library
5. Build interactive mapping applications

**Happy mapping! 🗺️**