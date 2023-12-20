import '@testing-library/jest-dom'
import News from '@/app/(pages)/news/page'
import { render, screen } from '@testing-library/react'

test('should have "News under construction" text', () => {
  render(<News />)

  screen.getByText('News under construction')
})
