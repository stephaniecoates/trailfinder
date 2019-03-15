import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import StarRating from './StarRating';
import HikeDifficulty from './HikeDifficulty';

//hello
const HIKE_API_KEY = process.env.REACT_APP_HIKING_PROJECT_API_KEY;
const LOCATION_API_KEY = process.env.REACT_APP_MAPS_API_KEY;

class App extends Component {
  constructor () {
    super();

    this.state = {
      hikes: [],
      city: '',
      state: '',
      maxDistance: 0,
      maxResults: 20,
      sort: 'quality',
      minLength: 0,
      minStars: 0
    }
  }

  // componentDidMount () {
  //  this.getCoordinates()
  // }

  async getCoordinates (city, state) {
    let formattedCity = city.replace(/\s/g,'+')
    let res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${formattedCity},+${state}&key=${LOCATION_API_KEY}`)
    let coordinates = {latitude: res.data.results[0].geometry.location.lat, longitude: res.data.results[0].geometry.location.lng};
    return coordinates;
  }

fetchHikes = async () => { 
    const {city, state, maxDistance, maxResults, sort, minLength, minStars} = this.state;
    if (city && state) {
    const {latitude, longitude} = await this.getCoordinates(city, state)
    let res = await axios.get(`https://www.hikingproject.com/data/get-trails?lat=${latitude}&lon=${longitude}&maxDistance=${maxDistance}&key=${HIKE_API_KEY}&maxResults=${maxResults}&sort=${sort}&minLength=${minLength}&minStars=${minStars}`)
    this.setState({
      hikes: res.data.trails
    })
  } else {
    alert('please enter a City and State.')
  }
  }

  handleChange = (name, event) => {
    this.setState({
        [name]: event.target.value,
    });
};

handleSubmit = () => {
  console.log('submitted')
this.fetchHikes();
}

  render() {
    return (
      <div className="App">
      <div className='search'>
      <div className='search-inputs'>
      <h2 className='findhike'>Find A Hike</h2>
      <div className='form'>
      <label>city: <input onChange={e => this.handleChange('city', e)}/></label>
      <label>state: <input onChange={e => this.handleChange('state', e)}/></label>
      <label>max distance: <input onChange={e => this.handleChange('maxDistance', e)}/></label>
      <label>max results: <input onChange={e => this.handleChange('maxResults', e)}/></label>
      <label>
          Sort by:
          <select value={this.state.sort} onChange={(e) => this.handleChange('sort', e)}>
            <option value="quality">Quality</option>
            <option value="distance">Distance</option>
          </select>
        </label>
      <label>min length: <input onChange={e => this.handleChange('minLength', e)}/></label>
      <label>min stars: <input onChange={e => this.handleChange('minStars', e)}/></label>
      <button onClick={() => this.handleSubmit()}>Submit</button>
      </div> 
      </div>
      <div className='map'></div>
      </div>
      <div className='results-container'>
     {this.state.hikes.length === 0 && <p style={{textAlign: 'center'}}>Please complete the form on the left to find hikes!</p>}
        {this.state.hikes.map(hike => {
          console.log("url(" + hike.imgMedium + ")")
          return (
            <div key={hike.id} className='result' 
            style={
              {backgroundImage: "url(" + hike.imgMedium + ")",
              backgroundColor: '#AAC69C',
              backgroundRepeat: 'norepeat',
              backgroundSize: 'cover'}} 
              onClick={() => this.goToHike()}>
            <p className='hike-length'>{hike.length} mi</p>
            <div className="result-text">
            <p className='hike-name'>{hike.name}</p>
            <div className='ratings'>
            <div className='hike-difficulty'>{HikeDifficulty(hike.difficulty)}</div>
            <div className='star-rating'>{StarRating(hike.stars)}</div>
            </div>
            <p className='hike-location'>{hike.location}</p>
            {/* <a className='more-info' href={hike.url} target='_blank' rel="noopener noreferrer">Click here for more information</a> */}
            </div>
            </div>
          )
        })} 
      </div>
      </div>
    );
  }
}



export default App;
