import React from "react";
import "./scss/style.scss";

const Event = props => {
  const id = props.match.params.id;
  const event = props.eventsDatas.find(event => event.id === id);
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
            <p className="eventItem__name font-weight-bold">
              {event && event.name.text}
            </p>
            <dl>
              <dt>DATE AND TIME</dt>
              <dd>
                {event && event.start.local} - {event && event.end.local}
              </dd>
            </dl>
          </div>
        </div>
        <div className="eventItem__buttom row">
          <div className="eventItem__description col-md-8">
            <p className="font-weight-bold">DESCRIPTION</p>
            <p className="eventItem__description__txt">
              <div>{event && event.description.text}</div>
            </p>
          </div>

          <div className="eventItem__aside col-md-4" />
        </div>
      </div>
    </div>
  );
};

export default Event;
