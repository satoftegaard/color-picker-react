import React, { Component } from 'react'
// import Slider from './Slider.js'

class App extends Component {

  constructor () {
    super()
    this.state = {
      hue: 120,
      saturation: 100,
      lightness: 50,
      alpha: 1
    }
  }

  updateHue (hue) {
    this.setState({
      hue: hue
    })
  }

  updateSaturation (saturation) {
    this.setState({
      saturation: saturation
    })
  }

  updateLightness (lightness) {
    this.setState({
      lightness: lightness
    })
  }

  updateAlpha (alpha) {
    this.setState({
      alpha: alpha
    })
  }

  render () {
    const hsla = `hsla(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%, ${this.state.alpha})`
    return <div>
      <h1>HSL Color Selector</h1>
      <figure>
        <div style={{ backgroundColor: hsla }} />
      </figure>
      <p>{hsla}</p>
      <form>
        <ul>
          <li><p>Hue</p><input value={this.state.hue} name='hue' type='range' min='0' max='360' onInput={(event) => { this.updateHue(event.target.value) }} /> </li>
          <li><p>Saturation</p><input value={this.state.saturation} name='sat' type='range' min='0' max='100' onInput={(event) => { this.updateSaturation(event.target.value) }} /> </li>
          <li><p>Lightness</p><input value={this.state.lightness} name='light' type='range' min='0' max='100' onInput={(event) => { this.updateLightness(event.target.value) }} /> </li>
          <li><p>Alpha</p><input value={this.state.alpha} name='alpha' type='range' min='0.00' max='1.00' step='.01' onInput={(event) => { this.updateAlpha(event.target.value) }} /> </li>
        </ul>
      </form>
    </div>
  }
}

export default App
