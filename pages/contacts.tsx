import Head from 'next/head';
import Layout from '../src/components/Layout';

const Contacts = () => {
    return (
        <div>
            <Head>
                <title>Contacts | Mzabayuni</title>
                <meta name="description" content="Personal portfolio for Jeremiah Kenneth" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
                <div className="max-w-5xl lg:mx-auto mx-4 my-6 lg:my-20 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col items-start">
                        <h1 className="text-3xl font-bold mb-2">Contact</h1>
                        <p className="font-light text-base mb-5">Looking forward to hearing from you</p>
                        <div className="mb-5">
                            <h3 className="text-xl font-bold">Phone</h3>
                            <p className="font-light">+255 787 118486</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Email</h3>
                            <a className="font-light" href="mailto:jerrykenny110@gmail.com">jerrykenny110@gmail.com</a>
                        </div>
                    </div>
                    <div>
                        <form className="mt-6 lg:grid grid-cols-2 gap-4" action="submit">
                            <div>
                                <label htmlFor="first-name">First Name</label>
                                <input className="w-full p-2 my-1 mb-2 border border-gray-400 focus:border-black hover:border-black bg-transparent rounded hover:border-2 focus:border-2 focus:outline-none" type="text" name="first-name" id="first-name" />
                            </div>
                            <div>
                                <label htmlFor="last-name">Last Name</label>
                                <input className="w-full p-2 my-1 mb-2 border border-gray-400 focus:border-black hover:border-black bg-transparent rounded hover:border-2 focus:border-2 focus:outline-none" type="text" name="last-name" id="last-name" />
                            </div>
                            <div>
                                <label htmlFor="email">Email*</label>
                                <input className="w-full p-2 my-1 mb-2 border border-gray-400 focus:border-black hover:border-black bg-transparent rounded hover:border-2 focus:border-2 focus:outline-none" type="email" name="email" id="email" />
                            </div>
                            <div>
                                <label htmlFor="subject">Subject</label>
                                <input className="w-full p-2 my-1 mb-2 border border-gray-400 focus:border-black hover:border-black bg-transparent rounded hover:border-2 focus:border-2 focus:outline-none" type="text" name="subject" id="subject" />
                            </div>
                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea className="w-full h-32 my-1 mb-2 border border-gray-400 focus:border-black hover:border-black bg-transparent rounded hover:border-2 focus:border-2 focus:outline-none p-2" name="message" id="message"></textarea>
                            </div>
                            <button>
                                <div className="cursor-pointer w-24 h-24 lg:w-32 lg:h-32 bg-orange hover:bg-transparent duration-300 border border-gray-400 focus:border-black hover:border-black rounded-full text-black flex items-center justify-center">
                                    <span className="text-lg font-semibold">Submit</span>
                                </div>
                            </button>
                        </form>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Contacts;