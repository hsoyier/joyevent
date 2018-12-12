import React from "react";
import "./scss/style.scss";

const Event = props => {
  const id = props.match.params.id;
  const event = props.eventsDatas.find(event => event.id === id);
  console.log(event);
  return (
    <div className="eventItem">
      <div className="eventItem__inner">
        <div className="eventItem__upper row">
          {event ? (
            <div
              className="eventItem__image col-md-8"
              style={{
                backgroundImage: `url(${event.logo.original.url})`
              }}
            />
          ) : null}
          <div className="eventItem__info col-md-4">
            <p className="font-weight-bold">{event && event.name.text}</p>
          </div>
        </div>
        <div className="eventItem__buttom">
          <p>{event && event.description.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Event;
