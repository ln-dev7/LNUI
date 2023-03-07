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
              <Link
                href="/templates"
                className="hero__container-button__second"
              >
                <span>Explore templates</span>
              </Link>
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
