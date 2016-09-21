import React from 'react'
import { render } from 'react-dom'
import App from './components/app'
import Greeter from './components/greeter'
import Counter from './components/counter'

render(
  <div>
  <Greeter name='Cara'/>
  <Counter/>
  </div>, document.querySelector('main')
)
