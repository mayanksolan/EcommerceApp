import React, { Component } from "react";
import axios from "axios";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsData: []
    };
  }

  fetchProducts = async () => {
    try {
      const products = await axios.get("/api/products");
      console.log(products);
      this.setState({ productsData: products.data }, () => {
        console.log(this.state.productsData[2].specification.processor);
      });
    } catch (error) {
      console.log(error.msg);
    }
  };

  componentDidMount() {
    this.fetchProducts();
  }

  render() {
    if (this.state.productsData.length > 0) {
      return (
        <div>
          Here is some data:{" "}
          {this.state.productsData[2].specification.processor}
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}
