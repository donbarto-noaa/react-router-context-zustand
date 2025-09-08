import { type RouteConfig, index, route, prefix } from "@react-router/dev/routes";

export default [
    index("routes/_index.tsx"),
    route("training", "routes/training.tsx", [
      index("routes/training._index.tsx"),
      route("context-demo", "routes/training.context-demo.tsx"),
      route("zustand-demo", "routes/training.zustand-demo.tsx"),
      route("combined-demo", "routes/training.combined-demo.tsx"),
      route("maplibre-demo", "routes/training.maplibre-demo.tsx"),
      route("tailwind-demo", "routes/training.tailwind-demo.tsx"),
      route("events-enhanced", "routes/training.events-enhanced.tsx"),
      route("msw-demo", "routes/training.msw-demo.tsx"),
      route("weather-dashboard", "routes/training.weather-dashboard.tsx"),
    ]),    
    route("events", "routes/events.tsx", [
            index("routes/events._index.tsx"),
            route("events", "routes/events.events.tsx"),
            route("about", "routes/events.about.tsx"),
            route(":eventId", "routes/events.$id.tsx"),
            route("observations", "routes/events.observations.tsx"),
            // route("new", "routes/event.new.tsx"),
            // route("edit", "routes/event.edit.tsx")
  ]  ),
] satisfies RouteConfig;
