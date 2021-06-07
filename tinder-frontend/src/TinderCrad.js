import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCard.css";

function TinderCrad() {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url: "https://image.cnbcfm.com/api/v1/image/106806367-1607089945571-gettyimages-1229901929-GERMANY_MUSK.jpeg?v=1609778162",
    },
    {
      name: "jeff bezoz",
      url: "https://assets.entrepreneur.com/content/3x2/2000/1602622169-jeff-bezos.jpeg",
    },
  ]);
  const swiped = (direction, nameToDelete) => {
    console.log("removing:" + nameToDelete);
  };
  const outOfFrame = (name) => {
    console.log(name + "left the screen");
  };
  return (
    <div className="TinderCard">
      <div className="tinderCard_cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["dp", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCrad;
