import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../src/components/Layout'
import mzabayuni from '../src/images/mzabayuni.jpeg';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home | Mzabayuni</title>
        <meta name="description" content="Personal portfoli for Jeremiah Kenneth" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-primary">
        <Layout>
          <div className="md:my-20 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="mx-4 my-8 lg:col-start-2 lg:self-center">
              <h1 className="text-5xl lg:text-6xl mb-3 lg:mb-8 font-semibold">Hello</h1>
              <h3 className="text-xl mb-1 font-semibold">Am Jeremiah</h3>
              <p className="font-light text-base max-w-sm">Web designer baased in Figma, HTML & CSS and a little in Javascript</p>
              <div className="mt-4 flex items-center justify-between sm:justify-start">
                <Link href="/resume">
                  <div className="cursor-pointer w-24 h-24 lg:w-32 lg:h-32 bg-orange hover:bg-transparent duration-300 border border-black rounded-full text-black flex items-center justify-center">
                    <span className="text-lg font-semibold">Resume</span>
                  </div>
                </Link>
                <Link href="/projects">
                  <div className="cursor-pointer sm:m-6 w-24 h-24 lg:w-32 lg:h-32 bg-red hover:bg-transparent duration-300 border border-black rounded-full text-black flex items-center justify-center">
                    <span className="text-lg font-semibold">Projects</span>
                  </div>
                </Link>
                <Link href="/contacts">
                  <div className="cursor-pointer w-24 h-24 lg:w-32 lg:h-32 bg-lightBlue hover:bg-transparent duration-300 border border-black rounded-full text-black flex items-center justify-center">
                    <span className="text-lg font-semibold">Contacts</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="m-4 mb-8 lg:col-start-1 lg:row-start-1 lg:mb-2 lg:w-96 lg:justify-self-end">
              <Image className="rounded-full" src={mzabayuni} alt="Mzabayuni" />
            </div>
          </div>
        </Layout>
      </div>
    </div>
  )
}

export default Home