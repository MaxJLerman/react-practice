import { useParams } from "react-router-dom";

export const EventDetailsPage = () => {
  const params = useParams();

  return (
    <>
      <h1>Event Details Page</h1>
      <p>Event ID: {params.eventId}</p>
    </>
  );
};
