import React from "react";
import "./card-list.styles.scss";
import { Card } from "./../card/card.component";

export const CardList = props => {
  return (
    <div>
      <div className="totalQuotes">{props.total !== 0 ? <span>{props.total}</span> : "No" } Quotes Found {props.search !== "" ? 'For: ' : "Total"}<span>{props.search !== "" ? props.search  : ""}</span></div>
      <div className="card-list">
        {props.monsters.map(monster => (
          <Card key={monster.id} monster={monster} />
        ))}
      </div>
    </div>
  );
};
