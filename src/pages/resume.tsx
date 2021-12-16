import Head from 'next/head';
import Layout from '../components/Layout';
import ResumeItem from '../components/ResumeItem';

const data = [
    {
        title: "Work Experience",
        list: false,
        details: [
            {
                startYear: "2020",
                endYear: "present",
                name: "Younggeeks",
                position: "Internship",
                description: "Nobody is born a professional at their industry-everyone who wants to be exceptional at something has to work hard at it, both through practical work experience and education. Read below for details on my education and past work experience."
            }
        ]
    },
    {
        title: "Education",
        list: false,
        details: [
            {
                startYear: "2013",
                endYear: "2016",
                name: "Mchikichini Sec school",
                position: "Ordinary level",
                description: "Our student culture plays a key role in the experience at Mchikichini Sec school  We’ve created a safe and accessible environment where students are encouraged to discuss ideas, collaborate on projects, share their work and receive feedback with pride. We give students the foundation to reach their potential and gain confidence both academically and socially."
            },
            {
                startYear: "2006",
                endYear: "2012",
                name: "Minazini primary school",
                position: "primary education",
                description: "Student life at Minazini primary school is incredibly supportive. Our teachers develop caring relationships with our students, allowing for the adaptation of curricula to meet the social, emotional and educational needs of everyone. Our student experience is enriched by athletics, volunteer opportunities, class trips and other exciting extracurricular activities. Reach out to learn more."
            }
        ]
    },
    {
        title: "Skills and Expertise",
        list: true,
        details: [
            "Microsoft Words",
            "UI, UX Design",
            "Web Design",
            "HTML,CSS,Javascript"
        ],
        last: true
    }
]

const Resume = () => {
    return (
        <div>
            <Head>
                <title>Resume | Mzabayuni</title>
                <meta name="description" content="Personal portfolio for Jeremiah Kenneth" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
                <div className="my-6 lg:my-20">
                    <h1 className="mx-4 max-w-5xl lg:mx-auto font-bold text-3xl lg:text-5xl mb-6 lg:mb-12">Resume</h1>
                    <div>
                        {data.map((data, index) => (
                            <ResumeItem data={data} key={index} />
                        ))}
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Resume;