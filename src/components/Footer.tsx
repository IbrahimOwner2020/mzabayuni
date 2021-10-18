import React from 'react';
import Img from 'next/image';

const Footer = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <hr className="w-full bg-gray-500 h-0.5 my-2 "/>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                <div className="flex flex-col items-start">
                    <h2 className="font-bold text-xl mb-1">Phone</h2>
                    <span className="font-light">+255 787 118 486</span>
                </div>
                <div>
                    <h2 className="font-bold text-xl mb-1">Email</h2>
                    <a className="font-light" href="mailto:jerrykenny110@gmail.com">jerrykenny110@gmail.com</a>
                </div>
                <div>
                    <h2 className="font-bold text-xl mb-1">Follow Me</h2>
                    <div>
                        <a className="mr-2" href="https://www.linkedin.com/in/jeremiah-keneth-142942203/">
                            <Img width={24} height={24} src="/linkedin.svg" alt="linkedin icon" />
                        </a>
                        <a className="mr-1" href="https://twitter.com/mzabayuni">
                            <Img width={24} height={24} src="/twitter.svg" alt="twitter icon" />
                        </a>
                    </div>
                </div>
                <span className="text-sm font-light sm:mt-2">&copy; 2021 mzabayuni / younggeeks inc</span>
            </div>
        </div>
    )
};

export default Footer;