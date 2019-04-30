import React from "react";
import Head from "../components/head";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { Link, animateScroll as scroll } from "react-scroll";

const Home = () => (
  <div>
    <Head title="Atown Park" description="" />

    <Nav />
    <div className="pt6 ph3 pb3 bg-cream z-1">
      <p
        data-sal="slide-up"
        data-sal-delay="200"
        className="f2 f-subheadline-ns tc b"
      >
        Atown Park is more than just a place to ride.
      </p>
      <div
        data-sal="slide-up"
        data-sal-delay="600"
        className="mb7 pb7 w-100 w-30-ns center tc"
      >
        <Link
          activeClass="active"
          to="findoutwhy"
          className="f4 link dim br1 ph5 pv3 mb2 dib white bg-dark-gray ttu tracked pointer"
          spy={true}
          smooth={true}
          offset={-160}
          duration={500}
        >
          Find Out Why
        </Link>
        <span data-sal="slide-up" data-sal-delay="1200" className="db f2">
          &darr;
        </span>
      </div>
      <div id="findoutwhy" className="mw8 center pt0 pb5 ">
        <p
          data-sal="slide-up"
          data-sal-delay="200"
          data-sal-easing="ease-in"
          className="f2 db w-100  mv0 b"
        >
          Atown Park is the Central Coast’s only indoor skate and scoot park.
        </p>
        <p
          data-sal="slide-up"
          data-sal-delay="250"
          data-sal-easing="ease-out-bounce"
          className="f4 db w-100  mid-gray"
        >
          {" "}
          With more than 8,000 sq. ft. of indoor park area, and 7,000 sq. ft of
          outdoor, Atown Park provides a wide range of features and challenges
          for riders of any skill-level. We strive to create the best
          environment for skate and scoot on the Central Coast.
        </p>
        <div
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-easing="ease-out-bounce"
          className="db v-mid-ns w-100 cover"
        >
          <img
            src="/static/atown park.jpg"
            alt="A bright blue sky"
            className="w-100 br2 shadow-1"
          />
        </div>
      </div>

      <div data-sal="slide-up" className="dt mw8 center pv5 pb5  ">
        <div className="db dtc-ns v-mid ph2 pr0-ns pr5-ns">
          <p className="lh-title f2 mb0 b">Hang out. Enjoy the scene.</p>
          <p className="lh-copy mid-gray f4 measure">
            We strive to create the best environment for skate and scoot on the
            Central Coast, and those who ride our park let us know we are doing
            that.
          </p>
        </div>
        <div className="db dtc-ns v-mid-ns">
          <img
            src="/static/atown-park-photo-1.jpg"
            alt="A bright blue sky"
            className="w-100 br2 shadow-1"
          />
        </div>
      </div>

      <div data-sal="slide-up" className="dt mw8 center pv5 pb5">
        <div className="db dtc-ns v-mid-ns">
          <img
            src="/static/atown park shop.jpg"
            alt="A bright blue sky"
            className="w-100 br2 shadow-1"
          />
        </div>
        <div className="db dtc-ns v-mid ph1 pr0-ns pl5-ns">
          <p className="lh-title f2 mb0 b">
            Full pro shop for scooters and skateboards open every day.
          </p>
          <ul className="list ph0 measure f4 mid-gray lh-copy">
            <li className="mv2">
              On Saturday and Sunday, we schedule private appointments between
              10 a.m. and 3 p.m.
            </li>
            <li className="mv2">
              Call the park to set up your personal service or shop experience
              with Kevin, or come by during public hours 7-days-a-week and we
              will happily take care of your equipment needs.
            </li>
          </ul>
        </div>
      </div>

      <br id="waiver" />
      <section
        data-sal="slide-up"
        className="white cf bg-dark mw8 center pa3 br3 br--top shadow-1"
      >
        <h2 className="f2 tc">Waiver & Rules</h2>
        <img
          src="/static/atown-rules.jpg "
          alt="rules"
          className="br3 shadow-1 db center mv3"
          width="500"
        />
        <a
          href="/static/A-Town-GCB-Waiver-updated-5.23.18.pdf"
          className="f5 link dim ba ph3 pv2 mv2 db w-80 w-20-l bg-white dark-gray tc center"
        >
          Download Waiver
        </a>

        <div className="f4 lh-copy cf near-white">
          <p className="db fl w-50-ns  ph4">
            Here at A-Town Park, we pride ourselves on putting safety first. All
            riders must wear a helmet in order to ride the park. When you ride,
            it is your responsibility to maintain safety at all times, watch out
            for other riders, and ride within your limits. Stay safe and come
            back soon!
            <br />
            <small>— A-Town Park staff</small>
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

      <section
        data-sal="slide-up"
        id="parkinfo"
        className="bg-white center mw8 br3 shadow-1 pa3 br--bottom cf "
      >
        <h2 className="f2 tc">Park Info</h2>
        <div className="w-50-l fl lh-copy">
          <p className="f4 ">
            <strong>Address</strong> <br />
            5493 Traffic Way, Atascadero, CA 93422
          </p>
          <p className="f4">
            <strong>Phone</strong>
            <br />
            (805) 461-7606
          </p>
          <p className="f4">
            <strong>Hours</strong> <br />
            Monday-Saturday: 12:00 PM – 6:00 PM
            <br />
            Sunday: 12:00 PM – 5:00 PM
            <br />
            School Holidays: $5
            <br />
          </p>
        </div>

        <div className="w-50-l fl lh-copy measure">
          <h3>Rent the Park!</h3>
          <ul>
            <li>
              Book a Private Party: $75 per hour
              <ul>
                <li> 2 hour minimum, reserve up to 4 hours</li>
              </ul>
            </li>
            <li>
              Package: Includes first 10 riders — $10 every additional rider
            </li>
          </ul>
          <p className="">
            Reserve spots at the Atown Park Office or call for a reservation{" "}
            <br />
            50% deposit required to secure reservation
          </p>
          <img
            src="/static/atown-rent-park.jpg"
            alt=""
            className="db w-80-ns  br3 shadow-1"
          />
        </div>
      </section>
    </div>

    <Footer />
  </div>
);

export default Home;
