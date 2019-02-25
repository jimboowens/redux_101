import React, {Component} from 'react';
// Weather needs to know about Redux
// the weather state is going to be updated by the search bar
// The SearchBar is a peer...NOT a parent
import {connect} from 'react-redux';


 class Weather extends Component{
    render(){
        console.log(this.props.weatherData);
        return(
            <h1>Weather Component!</h1>
        )
        }
    }

     function mapStateToProps(state){
        return{
            weatherData:state.weather
        }
    }

 // connect takes a max of two args: 
// 1. The map state function
// 2. The map/dispatch action function

 export default connect(mapStateToProps)(Weather); 