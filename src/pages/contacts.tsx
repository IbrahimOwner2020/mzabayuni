import Head from 'next/head';
import Layout from '../components/Layout';
import { Formik, Form, Field } from 'formik'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contacts = () => {
    return (
        <div>
            <Head>
                <title>Contacts || Mzabayuni</title>
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
                        <Formik
                            initialValues={{
                                firstName: '',
                                lastName: '',
                                email: '',
                                subject: '',
                                message: '',
                            }}
                            onSubmit={(async (values) => {
                                console.log(values)

                                const res = await fetch("/api/sendEmail", {
                                    body: JSON.stringify({
                                        firstName: values.firstName,
                                        email: values.email,
                                        lastName: values.lastName,
                                        subject: values.subject,
                                        message: values.message,
                                    }),
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    method: "POST"
                                });

                                const { error } = await res.json();
                                if (error) {
                                    console.log(error);
                                    toast(error)
                                    return;
                                }
                            })}
                        >
                            <Form className="mt-6 lg:grid grid-cols-2 gap-4" action="submit">
                                <div>
                                    <label htmlFor="firstName">First Name</label>
                                    <Field className="w-full p-2 my-1 mb-2 border border-gray-400 focus:border-black hover:border-black bg-transparent rounded hover:border-2 focus:border-2 focus:outline-none" type="text" name="firstName" id="firstName" />
                                </div>
                                <div>
                                    <label htmlFor="lastName">Last Name</label>
                                    <Field className="w-full p-2 my-1 mb-2 border border-gray-400 focus:border-black hover:border-black bg-transparent rounded hover:border-2 focus:border-2 focus:outline-none" type="text" name="lastName" id="lastName" />
                                </div>
                                <div>
                                    <label htmlFor="email">Email*</label>
                                    <Field className="w-full p-2 my-1 mb-2 border border-gray-400 focus:border-black hover:border-black bg-transparent rounded hover:border-2 focus:border-2 focus:outline-none" type="email" name="email" id="email" />
                                </div>
                                <div>
                                    <label htmlFor="subject">Subject</label>
                                    <Field className="w-full p-2 my-1 mb-2 border border-gray-400 focus:border-black hover:border-black bg-transparent rounded hover:border-2 focus:border-2 focus:outline-none" type="text" name="subject" id="subject" />
                                </div>
                                <div>
                                    <label htmlFor="message">Message</label>
                                    <Field as="textarea" className="w-full h-32 my-1 mb-2 border border-gray-400 focus:border-black hover:border-black bg-transparent rounded hover:border-2 focus:border-2 focus:outline-none p-2" name="message" id="message"></Field>
                                </div>
                                <button type='submit'>
                                    <div className="cursor-pointer w-24 h-24 lg:w-32 lg:h-32 bg-orange hover:bg-transparent duration-300 border border-gray-400 focus:border-black hover:border-black rounded-full text-black flex items-center justify-center">
                                        <span className="text-lg font-semibold">Submit</span>
                                    </div>
                                </button>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Contacts;