
import React, { Component } from 'react';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { visible: true };
    }
    componentDidMount()  {
        setTimeout(() => {
            this.setState({ visible: false });
        }, 3000);
      }
  render() {
    const { visible } = this.state;
    return (
        <>
        
        { visible ? <h1>Welcome to Our Competition World</h1> : null }
        
        {/* <Outlet /> */}
          
        </>
    );
  }
}

