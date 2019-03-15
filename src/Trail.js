import React, {Component} from "react";

class Trail extends Component {
  render() {
      return (
    <div>
      <h1>Trail Component</h1>
      <p>{this.props.match.params.trail}</p>
    </div>
      );
  }
}

export default Trail;
