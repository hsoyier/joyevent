import React from "react";

class Events extends React.Component {
  render() {
    return (
      <section className="event">
        <div className="container">
          <ul className="row">
            {this.props.eventsDatas.map(event => {
              return (
                <li className="col-md-4" key={event.id}>
                  {event.logo ? (
                    <img src={event.logo.url} alt={event.id} />
                  ) : (
                    <div className="dummy" />
                  )}
                  <h3>{event.name.text}</h3>
                  <p>{event.start.local}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    );
  }
}

export default Events;
