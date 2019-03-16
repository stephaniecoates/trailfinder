import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const MAPS_API_KEY = process.env.REACT_APP_MAPS_API_KEY;

const PinComponent = ({ text }) => {
  return (
    <div
      style={{
        backgroundColor: "green",
        height: "15px",
        width: "15px",
        borderRadius: "100%"
      }}
    />
  );
};

export default class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 40,
      lng: -100
    },
    zoom: 0
  };

  render() {
       const center = {
        lat: this.props.hikes.length ? this.props.hikes[0].latitude : 40,
        lng: this.props.hikes.length ? this.props.hikes[0].longitude : -100
    }
        const zoom = this.props.hikes.length ? 10 : 1
        
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: MAPS_API_KEY }}
        center={center}
        zoom={zoom}
      >
        {this.props.hikes.map(trail => {
          return (
            <PinComponent
                key={trail.id}
              lat={trail.latitude}
              lng={trail.longitude}
              text={"Boulder CO"}
            />
          );
        })}
      </GoogleMapReact>
    );
  }
}
