import React from 'react';
import Image from 'next/image';

const Project = ({ data }) => {
    return(
        <div className="my-6 lg:my-20 sm:my-10 lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
                <h3 className="font-bold text-2xl">{data.title}</h3>
                <p className="leading-relaxed font-light my-4 sm:my-6">{data.description}</p>
            </div>
            <div>
                <Image className="w-full h-full" src={`/${data.image}`} alt="project-photo" width="500" height="320"  />
            </div>
        </div>
    )
}

export default Project;