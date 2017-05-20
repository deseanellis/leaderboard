import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GetList, BtnActive } from '../actions/index';
import Button from '../components/subs/Button';

class Controls extends Component {

  onButtonClick(time){
    this.props.BtnActive(time);
    this.props.GetList(time);
  }

  render(){
    return(
      <div className="controls">
        <Button
          name="btn-30"
          onClickHandler={() => this.onButtonClick('30-days')}>
          30 Days <i className="fa fa-clock-o"></i>
        </Button>

        <Button
          name="btn-all"
          onClickHandler={() => this.onButtonClick('all-time')}>
          All-time <i className="fa fa-star"></i>
        </Button>
      </div>
    );
  }
}

export default connect(null, { GetList, BtnActive })(Controls);
