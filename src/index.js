import React,{Component} from 'react';
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader'


class App extends Component{
	state={lat:null,errorMessage:null};

		

	


	componentDidMount()
	{
		window.navigator.geolocation.getCurrentPosition(
		position=>this.setState({lat: position.coords.latitude }),
		(err)=>this.setState({errorMessage:err.message})
		);

	}




	renderContent()
	{
	if(this.state.errorMessage && !this.state.lat){
		return <div>Error:{this.state.errorMessage}</div>
	}
	if(!this.state.errorMessage && this.state.lat){
		return<SeasonDisplay lat={this.state.lat}/>
	}
	return <Loader message="please allow location to see season"/>
}
render(){
	return (<div className="border red">
		{this.renderContent()}
		</div>)
	}
}




ReactDOM.render(
<App/>,document.querySelector('#root'))