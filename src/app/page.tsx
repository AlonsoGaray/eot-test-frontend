import React from 'react'

export default function Home (): React.JSX.Element {
  return (
    <div className='container'>

      <div>
        <h1>Welcome to the HomePage!</h1>
      </div>

      <div style={{ display: 'flex' }}>
        <div style={{ flex: '50%', padding: '10px' }}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ultrices massa, et pharetra justo fermentum nec.</p>
        </div>
        <div style={{ flex: '50%', padding: '10px' }}>
          <img src='https://via.placeholder.com/150' alt='Placeholder' />
        </div>
      </div>
    </div>
  )
}
