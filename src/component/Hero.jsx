import React from 'react'
import './styles.css'

const Hero = () => {
  return (
    <div className='container'>
        <div className="cover-pc">
        <img src="/src/image.png" alt="" />
        </div>
        <div className="text">
            <header>Card Title</header>
            <p>A “card” is a UI design pattern that groups <br/>
                 related information in a flexible-size container<br/>
                  visually resembling a playing card.</p>
                  <div className="btn">
                    <button>CTA Button</button>
                  </div>
        </div>

    </div>
  )
}

export default Hero