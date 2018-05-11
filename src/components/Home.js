import React, { Component } from 'react'
import Message from "./Message.js"
import Contents from "./Contents"

class Home extends React.Component {

  constructor(props) {
    super(props)
    //this.props.items = []
  }
  render () {
			return (
			<div>
				<h1>Welcome!</h1>
				<Message />
				<hr/>
				<Contents />
			</div>
		);
	}


}

export default Home;