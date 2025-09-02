import { type RouteConfig, index, route, prefix } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    ...prefix("events", [
            index("routes/events.tsx"),
            route(":eventId", "routes/event.tsx"),
            route("observations", "routes/observations.tsx"),
            // route("new", "routes/event.new.tsx"),
            // route("edit", "routes/event.edit.tsx")
            
  ]  ),
  route("training", "routes/training.tsx", [
    index("routes/training._index.tsx"),
    route("context-demo", "routes/training.context-demo.tsx"),
    route("zustand-demo", "routes/training.zustand-demo.tsx"),
    route("combined-demo", "routes/training.combined-demo.tsx"),
  ]),
] satisfies RouteConfig;
