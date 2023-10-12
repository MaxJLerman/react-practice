import { useLoaderData } from "react-router-dom";

import { EventsList } from "@/components/EventsList";

export const EventsPage = () => {
  const fetchedEvents = useLoaderData();

  return <EventsList events={fetchedEvents} />;
};
