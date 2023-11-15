import { Outlet } from "react-router-dom";

import EventsNavigation from "@/components/EventsNavigation";

export const EventsRouteLayout = () => {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
};
