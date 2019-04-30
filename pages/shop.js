import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import Footer from '../components/footer'

class Shop extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Head title="Shop | Atown Park"
          description=""
        />

        <Nav />
        <div data-sal="fade" className="pt6 ph3 pb3 bg-cream z-1">
          <h1>Shop </h1>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default Shop