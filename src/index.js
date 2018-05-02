import React from 'react';
import ReactDOM from 'react-dom';

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
]

class Passenger extends React.Component {
  render() {
    return <li>{ this.props.name }</li>
  }
}

export class OlderCoaster extends React.Component {
  render() {
    return (
      <div className="oldercoaster">
        <p>Two grannies having the time of their life!</p>
        <p>Passengers:</p>
        <ul>
            <Passenger name={ 'Agnes' }/>
            <Passenger name={ 'Muriel' }/>
          </ul>
        </div>
      )
    }
  }

  export class InFrontOfYou extends React.Component {
    render() {
      return (
        <div>
          <p>You shouldn't look too far.</p>
          <p>Sometimes, the solution is right in front of you.</p>
        </div>
      )
    }
  }

  class ButcherItem extends React.Component {
    render() {
      return <li>{this.props.name}</li>
    }
  }

  export class ButcherShop extends React.Component {

    render() {
      return (
        <div className='butcher-shop'>
          <p>Hello! We have the following products for sale today:</p>
            <ul>
              <ButcherItem name={ BUTCHER_PRODUCTS[0] } />
              <ButcherItem name={ BUTCHER_PRODUCTS[1] } />
              <ButcherItem name={ BUTCHER_PRODUCTS[2] } />
              <ButcherItem name={ BUTCHER_PRODUCTS[3] } />
            </ul>
        </div>
      )
    }
  }

const container = [
  <OlderCoaster />,
  <InFrontOfYou />,
  <ButcherShop />,
]

ReactDOM.render(
  container,
  document.getElementById('root')
)
