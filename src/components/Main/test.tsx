import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    // render o component
    const { container } = render(<Main />)

    // Find the element and verify if it exists
    expect(
      screen.getByRole('heading', { name: /typescript template/i })
    ).toBeInTheDocument()

    // Generate snapshot
    expect(container.firstChild).toMatchSnapshot()
  })
})
