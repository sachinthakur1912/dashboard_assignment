import React, { useEffect, useState } from "react";
import axios from "axios";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";

import enUS from "date-fns/locale/en-US";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const MyCalendar = ({ setIsLoggedIn }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKENDURL}/api/calendar`,
          {
            withCredentials: true,
          }
        );
        console.log(response);

        const googleEvents = response.data.map((event) => ({
          title: event.summary,
          start: new Date(event.start.dateTime || event.start.date),
          end: new Date(event.end.dateTime || event.end.date),
          allDay: !event.start.dateTime, // all-day events do not have specific start/end times
        }));
        setEvents(googleEvents);
        setIsLoggedIn(true);
      } catch (error) {
        if (error.response.status === 401) {
          setIsLoggedIn(false);
        }
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="bg-white rounded-3xl w-[100%] md:w-[30%] h-[320px] overflow-hidden border border-customBorder">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        // style={{ height: 300 }}
        className="rounded-3xl "
        defaultView="month"
      />
    </div>
  );
};

export default MyCalendar;
