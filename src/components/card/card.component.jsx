import React from "react";
import './card.styles.scss';

export class Card extends React.Component {
    state = { show: false };

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };
    handleClick = () => console.log('clicked');
    render(){
        return (
            <div className="card">
                <h1>{this.props.monster.author}</h1>
                <div className="imgHolder">
                    <img alt="Quote" src={`https://robohash.org/${this.props.monster.id}?set=set3`}/>
                </div>
                <p>{this.props.monster.en.substring(0, 60)}</p>
                <button onClick={this.showModal} className="cardBtn">READ MORE</button>
                <Modal show={this.state.show} handleClose={this.hideModal} >
                    <h2>{this.props.monster.author}</h2>
                    <p>{this.props.monster.en}</p>
                </Modal>
                <span className={this.props.monster.rating != null ? '' : 'notRated'}>{this.props.monster.rating != null ? this.props.monster.rating : 'Not Rated'}</span>
            </div>
        )
    }
}

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  
    return (
      <div className={showHideClassName}>
        <section className='modal-main'>
          {children}
          <button
            className="closeBtn"
            onClick={handleClose}
          >
            Close
          </button>
        </section>
      </div>
    );
}