import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import Lightbox from 'react-images'
import Gallery from 'react-photo-gallery';
import Footer from '../components/footer'

const photos = [
  { src: '/static/atown-park-gallery-1.jpg', width: 8, height: 5 },
  { src: '/static/atown-park-gallery-2.jpg', width: 8, height: 5 },
  { src: '/static/atown-park-gallery-3.jpg', width: 8, height: 5 },
  { src: '/static/atown-park-gallery-4.jpg', width: 8, height: 5 },
  { src: '/static/atown-park-gallery-5.jpg', width: 8, height: 5 },
  { src: '/static/atown-park-gallery-6.jpg', width: 8, height: 5 },
  { src: '/static/atown-park-gallery-7.jpg', width: 8, height: 5 },
  { src: '/static/atown-park-gallery-8.jpg', width: 8, height: 5 },
  { src: '/static/atown-park-gallery-9.jpg', width: 8, height: 5 },
  { src: '/static/atown-park-gallery-10.jpg', width: 8, height: 5 },
  { src: '/static/atown-park-gallery-11.jpg', width: 8, height: 5 },
  { src: '/static/atown-park-gallery-12.jpg', width: 8, height: 5 },
  { src: '/static/atown-park-gallery-13.jpg', width: 8, height: 5 },
  { src: '/static/atown-park-gallery-14.jpg', width: 8, height: 5 },
  { src: '/static/atown-park-gallery-15.jpg', width: 8, height: 5 },
  { src: '/static/atown-park-gallery-17.jpg', width: 8, height: 5 },
  { src: '/static/atown-park-gallery-18.jpg', width: 8, height: 5 },
  { src: '/static/atown-park-gallery-19.jpg', width: 8, height: 5 },
]

class ParkGallery extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    return (
      <div className="bg-cream">
        <Head title="Atown Park"
          description=""
        />

        <Nav />

        <div data-sal="slide-up" data-sal-easing="ease" className="mw8 center pt6 ph3">
          <h1 className="tc">Atown Park Gallery</h1>
          <Gallery photos={photos} onClick={this.openLightbox} />
        </div>
        <Lightbox images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
        <Footer />
      </div>
    )
  }
}

export default ParkGallery
