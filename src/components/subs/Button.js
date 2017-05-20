import React, { Component } from 'react';
import { connect } from 'react-redux';

class Button extends Component {

  render() {
    const props = this.props;
    var currentMode = 'all-time';
    
    //Build Class Name for Button Component
    switch(props.name) {
      case "btn-30":
        currentMode = '30-days';
      break;
      default:
        break;
    }

    var cssClassName = (currentMode === props.list.mode) ? `btn ${props.name} active` : `btn ${props.name}`;

    //Build Disable Object to attach to button element
    var btnDisabled = {};
    if (props.name === props.list.mode) {
      btnDisabled.disabled = 'disabled';
    }

    return(
      <button type="button" className={cssClassName} onClick={props.onClickHandler} {...btnDisabled}>{props.children}</button>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.list
  };
}

export default connect(mapStateToProps)(Button);
