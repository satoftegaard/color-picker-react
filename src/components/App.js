import React, { Component } from 'react'
import Slider from './Slider.js'

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
    const hsla = `hsla(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%, ${this.state.alpha / 100})`
    return <div>
      <h1>HSL Color Selector</h1>
      <figure>
        <div style={{ backgroundColor: hsla }} />
      </figure>
      <p>hsla 0,0,0,0</p>
      <form>
        <ul>
          <li><p>Hue</p><input name='hue' type='range' min='0' max='360' /> </li>
          <li><p>Saturation</p><input name='sat' type='range' min='0' max='100' /> </li>
          <li><p>Lightness</p><input name='light' type='range' min='0' max='100' /> </li>
          <li><p>Alpha</p><input name='alpha' type='range' min='0.00' max='1.00' step='.01' /> </li>
        </ul>
      </form>
    </div>
  }
}

export default App
