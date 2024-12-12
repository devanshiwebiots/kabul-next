import { useState } from "react";
import { Button, Col, Input, Label } from "reactstrap";
import { CalendarFilter, DraggableEvents, Href, RemoveAfterDrop } from "@/Constant";
import { CalendarInitialData } from "@/Data/Calendar";

const CalendarEvents = () => {
  const [openCalendar, setOpenCalendar] = useState(false);

  return (
    <Col xxl={3} className="box-col-12">
      <div className="md-sidebar mb-3">
        <Button tag="a" color="primary" className="md-sidebar-toggle" href={Href} onClick={() => setOpenCalendar(!openCalendar)}>{CalendarFilter}</Button>
        <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${openCalendar ? "open" : ""}`}>
          <div id="external-events" className="calendar-default">
            <h4>{DraggableEvents}</h4>
            <div className="external-events-list">
              {CalendarInitialData?.events?.map((event, index) => (
                <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event p-md-3 p-2 text-sm mb-3 border-0 bg-primary" title={event.title} key={index}>
                  <div className="fc-event-main">
                    <i className={`me-2 fa fa-${event.icon}`}></i>
                    {event.title}
                  </div>
                </div>
              ))}
            </div>
            <p>
              <Input className="checkbox_animated" id="drop-remove" type="checkbox" />
              <Label htmlFor="drop-remove" className="m-0">{RemoveAfterDrop}</Label>
            </p>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default CalendarEvents;
