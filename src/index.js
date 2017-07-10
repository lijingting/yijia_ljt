import React from 'react'
import ReactDom from 'react-dom'
import './style'
class App extends React.Component{
	componentDidMount(){
	
	}
	handleClick(){
		alert('hello word!')
		
	}
	render(){
		return (
			<div onClick = {::this.handleClick}>Hello Word!</div>
		)
	}
}

ReactDom.render(
	<App />,
	document.getElementById('app')
)