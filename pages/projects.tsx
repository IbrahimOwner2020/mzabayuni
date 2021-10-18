import Head from 'next/head';
import Layout from '../src/components/Layout';
import Project from '../src/components/Project';

const projectsData = [
    {
        title: "project number 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo praesentium dolores excepturi totam illo accusantium, ducimus quia optio distinctio, voluptate ex numquam. Labore soluta accusamus impedit accusantium eum vel aliquid?",
        image: `brendan-church-9F3sEV1-Iog-unsplash.webp`
    },
    {
        title: "project number 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo praesentium dolores excepturi totam illo accusantium, ducimus quia optio distinctio, voluptate ex numquam. Labore soluta accusamus impedit accusantium eum vel aliquid?",
        image: `brendan-church-9F3sEV1-Iog-unsplash.webp`
    },
    {
        title: "project number 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo praesentium dolores excepturi totam illo accusantium, ducimus quia optio distinctio, voluptate ex numquam. Labore soluta accusamus impedit accusantium eum vel aliquid?",
        image: `brendan-church-9F3sEV1-Iog-unsplash.webp`
    }
];

const Projects = () => {
    return (
        <div>
            <Head>
                <title>Projects | Mzabayuni</title>
                <meta name="description" content="Personal portfolio for Jeremiah Kenneth" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
                <div className="max-w-5xl lg:mx-auto mx-4 my-6 lg:my-20">
                    <h1 className="font-bold text-3xl lg:text-5xl mb-6 lg:mb-12">Projects</h1>
                    <div>
                        {projectsData.map((data, index) => (
                            <Project data={data} key={index} />
                        ))}
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Projects;