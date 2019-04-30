import React from 'react'
import LogoImg from '../components/logo'
import sal from 'sal.js'
import { animateScroll as scroll } from "react-scroll";
import { Link as LinkScroll } from "react-scroll";
import 'sal.js/dist/sal.css'
import Link from "next/link"
class Nav extends React.Component {
  componentDidMount = () => {

    sal()
  }

  render() {
    return (
      <header className="atown-nav bg-white fixed w-100 top-0 flex bb  b--black-20 shadow- z-max">
        <nav className="w-60-l flex items-center justify-center center">
          <div className="w-40 tc ">
            <Link href="/parkinfo"><a href="#" className="dark-gray link dim f5 f3-ns dib mh3 mv2-s">Park Info</a></Link>
            <Link href="/waiver"><a href="#" className="dark-gray link dim f5 f3-ns dib mh3 mv2-s">waiver</a></Link>

          </div>
          <div className="tc w-20">
            <LogoImg />
          </div>
          <div className="w-40 tc ">
            <Link href="/media"><a className="dark-gray link dim f5 f3-ns dib  mh3 mv2-s" href="#">media</a></Link>
            <Link href="/shop"><a className="dark-gray link dim f5 f3-ns dib  mh3 mv2-s" href="#">shop</a></Link>
          </div>
        </nav>
      </header>

    )
  }

}

export default Nav
