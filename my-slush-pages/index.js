import React from 'react'
import { render } from 'react-dom'
import App from './components/app'
import Greeter from './components/greeter'

render(
  <div>
  <Greeter name='Cara'/>
  </div>, document.querySelector('main')
)
