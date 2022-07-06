import React from 'react'
import Link from 'next/link'


function PrintingButtons() {
    return (
        <div className="flex justify-center items-center flex-col px-3 py-1 xl:px-15 xl:py-1 xl:m-1 select-none">

            <div className="flex flex-col text-center gap-3 md:flex-row">
                <Link href="/printing/brochure-pamphlets#btn">
                    
                    
                </Link>
                <Link href="/printing/custom-packaging#btn">
                    <a className="inline-block md:mx-4 px-4 md:px-12 py-4 text-md md:text-2xl sm:font-medium  hover:text-white border-2 border-red-700 shadow-md hover:shadow-2xl hover:bg-red-800 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
                        id="btn">
                        Customized Packaging
                    </a>
                </Link>
                <Link href="/printing/space-interior-branding#btn">
                    <a className="inline-block md:mx-4 px-4 md:px-12 py-4 text-md md:text-2xl sm:font-medium  hover:text-white border-2 border-red-700 shadow-md hover:shadow-2xl hover:bg-red-800 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
                        id="btn">
                        Space & Internal Branding
                    </a>
                </Link>
            </div>

        </div>
    );
}

export default PrintingButtons