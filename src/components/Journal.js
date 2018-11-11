import React, { Component } from 'react';

class Journal extends Component {
  state = {
    title: "Hello World!",
    textlist: [
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet.",      
    ],
    photo: "",
    tags: [
      "food",
      "travel",
      "hobby",
    ],
    date: new Date(),
    location: "Vancouver",
  }
  
  render() {
    const {title, textlist, tags, date, location} = this.state;
    return (
      <section>
        <h2>{title}</h2>
        <div>
          {textlist}
        </div>
        <div>
          <p>{tags}</p>
          <p>{location}</p>
        </div>
      </section>
    );
  }
}

export default Journal;
