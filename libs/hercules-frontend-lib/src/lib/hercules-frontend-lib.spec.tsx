import { render } from '@testing-library/react'

import HerculesFrontendLib from './hercules-frontend-lib'

describe('HerculesFrontendLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HerculesFrontendLib />)
    expect(baseElement).toBeTruthy()
  })
})
