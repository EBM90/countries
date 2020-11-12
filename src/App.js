import React, {Component} from 'react';
import './App.css';
import {  Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'


class App extends Component {
  state = {
    countries: []
  }
    componentDidMount = async () => {
    console.log('SE HA MONTADO EL TEMA')
    const countries = await fetch("https://countries.tech-savvy.tech/countries")
    const res = await countries.json()
    this.setState({ 
      countries: res
    })}
  render(){
    return (
      <div >
            <Navbar />
            <div className="information">
              <CountriesList countries={this.state.countries}/>
              <Route exact path='/countries/:id' component={CountryDetails}/>
            </div>
            
        </div>
    );
  }
  
}

export default App;
