import React, { Component } from 'react';
import ItemCard from '../partials/ItemCard.js';
import '../../App.scss'

class Page extends Component {
  componentDidMount(){
    console.log('entra');
    this.props.get_bucket_list();
  }
  componentDidUpdate(){
  }
  render() {
    return(
      Object.keys(this.props.bucket_list).length > 0 &&
        this.props.bucket_list.map((bucket, bucket_index) => {
          bucket.Items.sort((a, b) => a.OrderInLane - b.OrderInLane);
          return (
            <div key={bucket_index} className="card-holder">
              <div>
                <h2 className="card-title">{bucket.Description}</h2>
              </div>
              {bucket.Items.map((item, item_index) => {
                  return (
                    <ItemCard my_item={item}/>
                  )
                })
              }
            </div>
          )
        })
    );
  }
}
export default Page;
