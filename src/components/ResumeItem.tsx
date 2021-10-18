import React from 'react'

const ResumeItem = ({ data }) => {
    return (
        <div className="sm:mb-10 md:mb-24">
            <div className="max-w-5xl mx-4 lg:mx-0 lg:mx-auto sm:grid sm:grid-cols-2">
                <h2 className="text-xl font-bold mb-6 mt-10 sm:mt-0">{data.title}</h2>
                {data.list ? (
                    <ul className="list-disc justify-self-center">
                        {data.details.map((detail, index) => (
                            <li key={index} className="my-1 ml-6 sm:ml-0"><span className="font-light">{detail}</span></li>
                        ))}
                    </ul>
                ) : (
                    <div>
                        {data.details.map((detail, index) => (
                            <div key={index} className="lg:flex items-start mb-12">
                                <div className="lg:w-1/4">
                                    <p className="font-light lg:mr-4 lg:w-1/4">{detail.startYear}&#8209;{detail.endYear}</p>
                                </div>
                                <div className="lg:w-3/4 lg:inline-block">
                                    <h3 className="text-lg font-semibold my-1">{detail.name}</h3>
                                    <p className="mt-3 font-light lg:mt-0">{detail.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            {data.last ? '' : <hr className="w-full bg-gray-500 h-0.5 mt-4 "/>}
        </div>
    )
}

export default ResumeItem
