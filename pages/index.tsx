import Head from "next/head";
import Image from "next/image";
import Link from "next/link.js";
import Footer from "../components/website/Footer";
import Header from "../components/website/Header";
import { sponsors } from "../data/sponsor.js";

export default function Home() {
  return (
    <div>
      <Head>
        <title>LNUI</title>
        <meta
          name="description"
          content="Create beautiful websites with multiple components"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="homePage">
        <section className="hero">
          <div className="hero__lines"></div>
          <div className="hero__container">
            <h1>
              Create <span>beautiful</span> websites with multiple{" "}
              <span>components</span>
            </h1>
            <p>
              With <span>LNUI</span> you will have components of all types that
              will allow you to build your website from scratch
            </p>
            <div className="hero__container-button">
              <Link
                href="/intro"
                className="hero__container-button__first"
              >
                <span>Discover</span>
              </Link>
              <a
                href="https://www.buymeacoffee.com/lndev"
                className="hero__container-button__second"
              >
                <span>Make a donation</span>
              </a>
            </div>
          </div>
          <div className="hero__images">
            <div className="hero__images-container">
              <Image
                loader={({ src }) => src}
                src="images/hero/1.webp"
                alt="logo"
                width={300}
                height={70}
              />{" "}
              <Image
                loader={({ src }) => src}
                src="images/hero/2.webp"
                alt="logo"
                width={300}
                height={70}
              />{" "}
              <Image
                loader={({ src }) => src}
                src="images/hero/3.webp"
                alt="logo"
                width={300}
                height={70}
              />{" "}
              <Image
                loader={({ src }) => src}
                src="images/hero/4.webp"
                alt="logo"
                width={300}
                height={70}
              />{" "}
              <Image
                loader={({ src }) => src}
                src="images/hero/5.webp"
                alt="logo"
                width={300}
                height={70}
              />
              <Image
                loader={({ src }) => src}
                src="images/hero/6.webp"
                alt="logo"
                width={300}
                height={70}
              />{" "}
              <Image
                loader={({ src }) => src}
                src="images/hero/7.webp"
                alt="logo"
                width={300}
                height={70}
              />{" "}
              <Image
                loader={({ src }) => src}
                src="images/hero/8.webp"
                alt="logo"
                width={300}
                height={70}
              />{" "}
              <Image
                loader={({ src }) => src}
                src="images/hero/9.webp"
                alt="logo"
                width={300}
                height={70}
              />
              <Image
                loader={({ src }) => src}
                src="images/hero/10.webp"
                alt="logo"
                width={300}
                height={70}
              />
              <Image
                loader={({ src }) => src}
                src="images/hero/11.webp"
                alt="logo"
                width={300}
                height={70}
              />
            </div>
          </div>
        </section>
        <div className="sponsors">
          <h2 className="sponsors-title">Those who support us </h2>
          <div className="sponsors__container">
            <div className="sponsors-logos">
              {sponsors.map((item) => {
                return (
                  <Link href={item.url} key={item.name} target="_blank">
                    <Image
                      loader={({ src }) => src}
                      src={item.logo}
                      alt="logo"
                      width={300}
                      height={70}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
          <a className="sponsors-add" href="mailto:me@leonelngoya.com">
            Your logo here?
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
