import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
// import { prettyDOM } from '@testing-library/dom'
import StoreName from './index'

describe('Component StoreName', () => {
  test('Render component', () => {
    render(<StoreName />)
  })

  test('Render que se mueste el nombre de la tienda', () => {
    const name = 'My shop'
    const component = render(<StoreName />)
    component.getByText(name)
  })
})
