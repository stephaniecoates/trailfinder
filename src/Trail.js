import React, { Component } from "react";
import axios from "axios";
import HikeDifficulty from './HikeDifficulty'
import StarRating from './StarRating';

const HIKE_API_KEY = process.env.REACT_APP_HIKING_PROJECT_API_KEY;

class Trail extends Component {
  constructor() {
    super();

    this.state = {
      trail: {},
      errMsg: "Sorry! We couldn't find this trail."
    };
  }

  async componentDidMount() {
    let res = await axios.get(
      `https://www.hikingproject.com/data/get-trails-by-id?ids=${
        this.props.match.params.trail
      }&key=${HIKE_API_KEY}`
    );
    let trail = res.data.trails[0];
    console.log(trail)
    if (trail) {
      this.setState({
        trail
      });
    }
  }

  render() {
  return (
    <div>
    {!this.state.trail.id ? <p>{this.state.errMsg}</p> : 
    <div className='trail-container'>
      <div className='trail-photo-background' style={{backgroundImage: 'url(' + this.state.trail.imgMedium + ')', backgroundColor: 'blue'}}>
      <h1>{this.state.trail.name}</h1>
      <div>{HikeDifficulty(this.state.trail.difficulty)}</div>
      <div>{StarRating(this.state.trail.stars)}</div>
      <p>{this.state.trail.starVotes} reviews</p>
      </div>
      <p>{this.state.trail.name} is a {this.state.trail.length} mile trail located near {this.state.trail.location}. {this.state.trail.summary}</p>
      <p>{this.state.trail.type}</p>
      <p>{this.state.trail.length} miles</p>
      <p>{this.state.trail.ascent}' elevation gain</p>
      <div>MAP</div>
      <p>Trail Conditions</p>
      <p>{this.state.trail.conditionDate}</p>
      <p>{this.state.trail.conditionStatus}</p>
      <p>{this.state.trail.conditionDetails}</p>
      <p>More info: {this.state.trail.url}</p>
      <p></p>

    </div>}
    </div>
  )
}
}

export default Trail;
