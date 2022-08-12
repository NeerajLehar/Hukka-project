import React from "react";
import { Calendar, dateFnsLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import CalenderToolbar from "../calenderToolbar/CalenderToolbar";
import "react-big-calendar/lib/css/react-big-calendar.css";

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

export const Datepicker = (props) => {
  const events = [
    {
      start: moment(),
      end: moment(),
      allDays: false,
      title: "Some title",
    },
    {
      start: moment().toDate(),
      end: moment(),
      title: "somthing wrong",
    },
    {
      start: "2022,8,8",
      end: "2022, 8, 8",
      title: "Long Event",
    },
  ];

  return (
    <>
      <div className="calenderContainer">
        <Calendar
          selectable={true}
          localizer={localizer}
          onSelectEvent
          selected={props.currentDate}
          views={Views.MONTH}
          events={events}
          components={{ toolbar: CalenderToolbar }}
          onNavigate={(val) => {
            props.selectDate(val);
          }}
          eventPropGetter={(event, start, end, isSelected) => {
            return {
              event,
              start,
              end,
              isSelected,
              style: {
                backgroundColor: event.color,
                width: "10px",
                height: "10px",
                marginLeft: "5px",
                marginBottom: "2px",
                "@media(minWidth: 992px)": {
                  marginLeft: "10px",
                },
              },
            };
          }}
          style={{ height: "500px" }}
        />
      </div>
    </>
  );
};
