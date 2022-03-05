import React from 'react'
import Product from '../Component/Product'

class Contact extends React.Component {
  constructor(props) {
    super(props)

    this.state={}
  }

  render() {
  return(
    <div>
    <h1>Contact</h1>
    <p>Class Component</p>
    <Product/>
    </div>
  )
  }
}

export default Contact