import React from "react";
import { Link } from "react-router-dom";
import "./scss/style.scss";

const Events = props => {
  return (
    <section className="event">
      <div className="container">
        <ul className="row event__list">
          {props.eventsDatas.map(event => {
            return (
              <Link
                to={`/event/${event.id}`}
                className="col-md-4 event__item"
                key={event.id}
              >
                <li key={event.id}>
                  {event.logo ? (
                    <div
                      className="img__box"
                      style={{
                        backgroundImage: `url(
                  ${event.logo.url}
                  )`
                      }}
                    />
                  ) : (
                    <div className="dummy" />
                  )}
                  <div className="event__infos">
                    <h3 className="event__title">{event.name.text}</h3>
                    <p className="event__time">{event.start.local}</p>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Events;
