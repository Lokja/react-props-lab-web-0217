import React from 'react'

class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>goes dis fast: {this.props.speed}</p>
        <p>has rockets: {this.props.hasRockets ? 'Yes' : 'No'}</p>
        <div>colors:
          <ul>
            {this.props.colors.map(function(color) {
              return <li>{color}</li>
            })}
          </ul>
        </div>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
}

module.exports = Spaceship
