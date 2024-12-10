import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import { calendarEventClick } from "./CalendarFunction";
import { useEffect, useState } from "react";
import { Col } from "reactstrap";
import CalendarEvents from "./CalendarEvents";
import { CalendarInitialData } from "@/Data/Calendar";

const DragCalendar = () => {
  const state = useState(CalendarInitialData)[0];
  useEffect(() => {
    let draggableEl = document.getElementById("external-events") as HTMLElement;
    new Draggable(draggableEl, {
      itemSelector: ".fc-event",
      eventData: function (eventEl) {
        let title = eventEl.getAttribute("title");
        let id = eventEl.getAttribute("data");
        return {
          title: title,
          id: id,
        };
      },
    });
  }, []);

  return (
    <>
      <CalendarEvents />
      <Col xxl={9} className="box-col-12">
        <div className="demo-app-calendar" id="mycalendartest">
          <FullCalendar
            initialView="dayGridMonth"
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
            }}
            rerenderDelay={10}
            eventDurationEditable={false}
            editable={true}
            droppable={true}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin,listPlugin]}
            events={state.calendarEvents}
            eventClick={calendarEventClick}
          />
        </div>
      </Col>
    </>
  );
};

export default DragCalendar;