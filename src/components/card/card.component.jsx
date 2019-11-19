import React from "react";
import './card.styles.scss';
export const Card = props => {
    // var shortTxt = props.monster.en;
    return (
        <div className="card">
            <h1>{props.monster.author}</h1>
            <div className="imgHolder">
                <img alt="Quote" src={`https://robohash.org/${props.monster.id}?set=set3`}/>
            </div>
            <p>{props.monster.en.substring(0, 60)}<button href="# " className="cardBtn">[...]</button></p>
            <span className={props.monster.rating != null ? '' : 'notRated'}>{props.monster.rating != null ? props.monster.rating : 'Not Rated'}</span>
        </div>
    )
}