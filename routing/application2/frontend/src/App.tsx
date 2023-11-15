import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { HomePage } from "@/routes/Home/Home.route";
import { EventsPage } from "@/routes/Events/Events.route";
import { EventDetailsPage } from "@/routes/EventDetails/EventDetails.route";
import { NewEventPage } from "@/routes/NewEvent/NewEvent.route";
import { EditEventPage } from "@/routes/EditEvent/EditEvent.route";
import { RootLayout } from "@/routes/Root/Route.route";
import { EventsRouteLayout } from "./routes/EventsRoot/EventsRoot.route";

const handleLoadEvents = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    //
  } else {
    const responseData = await response.json();
    return responseData.events;
  }
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRouteLayout />,
        children: [
          { index: true, element: <EventsPage />, loader: handleLoadEvents },
          { path: ":eventId", element: <EventDetailsPage /> },
          { path: "new", element: <NewEventPage /> },
          { path: ":eventId/edit", element: <EditEventPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
