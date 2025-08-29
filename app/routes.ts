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
            
  ]  )
] satisfies RouteConfig;
