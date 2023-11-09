import React from 'react'
import '@styles/_Footer.scss'
import SocialMediaBox from './SocialMediaBox'

const Footer = () => {
  return (
<footer>
    <div className="footer-section">
        <div className="container">
            <p>&copy; 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
            <SocialMediaBox />
        </div>
    </div>
</footer>
  )
}

export default Footer