import React, { Component } from 'react';
import '../../App.scss'
class Page extends Component {
  render() {
    return(
      <div className="card-text">
        <p className="c-title">{this.props.my_item.ItemTitle}</p>
        <p className="c-text">{this.props.my_item.Description}</p>
      </div>
    );
  }
}
export default Page;
