import React,{Component} from 'react';
import '../CSS/product';

class Product extends Component {
  constructor(props) {
    super(props)

    this.state={
      stock: this.props.stock,
      sub:"Buy",
      status:"avaible",
      disabled: false
    }
  }
  render() {
  return (
      <div className="card">
        <h3>Nama Product</h3>
        <img src="http://via.placeholder.com/250x250" alt="Things"/>
        <p>Harga</p>
        <p>{this.props.stock}</p>
        <p>Status</p>
        <button>Take Home</button>
      </div>
  );
  }
};

export default Product;
