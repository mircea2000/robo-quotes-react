import React from 'react';
import "./footer.style.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export class Footer extends React.Component {
    render(){
        return (
            <div className="footer">
                Made with <span ><FontAwesomeIcon icon={faHeart} /></span> by <em>Mirch~Pirch</em> in Phoenix, AZ using <em>React.Js</em>
            </div>
        );
    }
}