import React from 'react'
import { StickyNav } from 'react-js-stickynav'
import 'react-js-stickynav/dist/index.css'

const Navbar = () => {
  const style = () => {
    return (
      <style jsx>{`
        .nav {
          transition: all 0.1s linear;
          position: fixed;
          z-index: 2000;
          padding: 20px;
        }
        .scrollNav {
          transition: all 0.5s ease-in;
          z-index: 2000;
          background: #ffffff;
          width: 100%;
          border-bottom: 1px solid #dddddd;
        }
        .styl {
          padding-top: 80px;
        }
      `}</style>
    )
  }
  return (
    <div>
      {style()}
      <StickyNav length='40'>AJ</StickyNav>
    </div>
  )
}

export default Navbar