import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GetList, SortList } from '../actions/index';

class Content extends Component {

  componentWillMount(){
    this.props.GetList('all-time');
  }

  render(){
    var sortArrow = '';
    if (this.props.sort !== '') {
        sortArrow = (this.props.sort === 'desc') ? "fa fa-arrow-down" : "fa fa-arrow-up";
    }

    return(
      <div className="content">
        <div className="panel panel-custom">
          <div className="panel-heading">
            <h3 className="panel-title">
              <i className="fa fa-free-code-camp"></i> Brownie Points Table <i className="fa fa-free-code-camp"></i>
            </h3>
          </div>
          <div className="panel-body">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Camper Name</th>
                  <th><a href="#" onClick={(event) => this.onSortClick(event, '30-days')}>Points (30 Days) </a><i className={(this.props.sortColumn === '30-days') ? sortArrow : ''}></i></th>
                  <th><a href="#" onClick={(event) => this.onSortClick(event, 'all-time')}>Points (All-time) </a> <i className={(this.props.sortColumn === 'all-time') ? sortArrow : ''}></i></th>
                </tr>
              </thead>
              {this.buildList(this.props.campers)}
            </table>
          </div>
        </div>
      </div>
    );
  }

  onSortClick(event, sortColumn) {
    event.preventDefault();

    this.props.SortList(sortColumn);
  }

  buildList(campers){
    var sort = this.props.sort;
    if (campers.length === 0) {
      return(
        <tbody>
          <tr>
            <td colSpan="4" className="text-center">Loading Campers...</td>
          </tr>
        </tbody>
      );
    } else {
      return campers.map((camper, index) => {
          return (
            <tbody key={index + 1 }>
              <tr>
                <td colSpan="4"></td>
              </tr>
              <tr>
                <td><span className="badge">{(sort === 'asc') ? 100 - index : index + 1 }</span></td>
                <td><img src={camper.img} alt={camper.username} /> {camper.username}</td>
                <td>{camper.recent}</td>
                <td>{camper.alltime}</td>
              </tr>
            </tbody>
          );
        });
    }
  }

}

function mapStateToProps(state) {
  return {
    mode: state.list.mode,
    campers: state.list.campers,
    sort: state.list.sort,
    sortColumn: state.list.sortColumn
  };
}

export default connect(mapStateToProps, { GetList, SortList})(Content);
