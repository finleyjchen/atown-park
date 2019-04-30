import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import Footer from '../components/footer'

class ParkInfo extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Head title="Info | Atown Park"
          description=""
        />

        <Nav />
        <div className="pt6 ph3 pb3 bg-cream z-1">

          <section data-sal="slide-up" id="parkinfo" className="bg-white center mw8 br3 shadow-1 pa3 br--bottom cf ">
            <h2 className="f2 tc">Park Info</h2>
            <div className="lh-copy">

              <p className="f4 "><strong>Address</strong> <br />
                5493 Traffic Way, Atascadero, CA 93422
</p>
              <p className="f4"><strong>Phone</strong>
                <br />
                (805) 461-7606
</p>
              <p className="f4">
                <strong>Hours</strong> <br />
                Monday-Saturday: 12:00 PM – 6:00 PM<br />

                Sunday: 12:00 PM – 5:00 PM<br />

                School Holidays: $5<br />
              </p>

            </div>

            <div className="lh-copy measure">
              <h3>Rent the Park!</h3>
              <ul>
                <li>Book a Private Party: $75 per hour
              <ul>
                    <li> 2 hour minimum, reserve up to 4 hours</li>

                  </ul></li>
                <li>Package: Includes first 10 riders — $10 every additional rider</li>
              </ul>
              <p className="">Reserve spots at the Atown Park Office or call for a reservation <br />50% deposit required to secure reservation</p>
              <img src="/static/atown-rent-park.jpg" alt="" className="db w-80-ns  br3 shadow-1" />
            </div>
            <h2 className="f2 tc">Waiver & Rules</h2>
            <img src="/static/atown-rules.jpg " alt="rules" className="br3 shadow-1 db center mv3" width="500" />
            <a href="/static/A-Town-GCB-Waiver-updated-5.23.18.pdf" class="f5 link dim ba ph3 pv2 mv2 db w-80 w-20-l bg-white dark-gray tc center">Download Waiver</a>


            <div className="f4 lh-copy cf near-white">

              <p className="db fl w-50-ns  ph4">Here at A-Town Park, we pride ourselves on putting safety first. All riders must wear a helmet in order to ride the park.
    When you ride, it is your responsibility to maintain safety at all times, watch out for other riders, and ride within your limits.
    Stay safe and come back soon!
            <br /><small>— A-Town Park staff</small>
              </p>
              <ul className=" db  fl w-50-ns ph4">
                <li>No folding scooters</li>
                <li>6 years and older</li>
                <li>Helmets required</li>
                <li>NO Bikes</li>
                <li>Waiver and Liability release form required to ride</li>
              </ul>
            </div>
          </section>
        </div>
      </React.Fragment>
    )
  }
}

export default ParkInfo