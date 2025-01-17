import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clicked: false,

  };
}
static propTypes = {
  height: PropTypes.number.isRequired,
  layer: PropTypes.number.isRequired,
  // type: PropTypes.string.isRequired,
}
handleClick = () => {
  if(!this.state.clicked){
    this.setState({clicked: true});
    this.props.onItemClicked(this.props.type)
  }
}


  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    // const icon = ItemIcons.rock;
       const icon = ItemIcons[this.props.type]
       let newClass = "game-item"
       if (this.state.clicked === true && this.props.type === "litter") {
        newClass = "game-item spotted-litter"
       } else if (this.state.clicked === true && this.props.type !== "litter") {
        newClass = "game-item spotted-nature"
       }
      

       
       

    return (
      <div className={newClass} style={itemStyle} onClick={this.handleClick}>
        <img src={icon} alt="Item" className="icon-item" ></img>
      </div>
    );
  }
}

export default GameItem;
