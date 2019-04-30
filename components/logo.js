import Link from "next/link"

function LogoImg() {
  return <Link href="/"><a href="/" className="f6 f5-ns dib "><img className="logo-image " src="/static/atown-park-logo-small.png" alt="atown-park-logo" /></a></Link>;
}

export default LogoImg;