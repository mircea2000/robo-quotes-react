import React from 'react';
import './go-to-top.styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleUp)

export class GoToTop extends React.Component {
    render(){
        return (
            <div>
                <div className="gotoTop" ref={this.myRef}><FontAwesomeIcon icon="angle-up"></FontAwesomeIcon></div>
            </div>
        );
    }
}
// export default Foo;