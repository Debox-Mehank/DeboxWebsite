import React from 'react'
import PrintingButtons from '../../components/printing/PrintingButtons'
import PrintBanners from "../../public/Debox_Print_Banners.jpg"
import useMediaQuery from '../../hooks/useMediaQuery';
import Link from 'next/link';
import PrintingButton from '../reusable/PrintingButton';
import Pamplet from "../../public/FlyerIcon.png"


const print = [
    {
        img : "https://res.cloudinary.com/debox/image/upload/v1657109438/Debox%20/Printing/Printing/BrandingIcon_enck4r.png",
        alt : "Branding"
    },
    {
        img : "https://res.cloudinary.com/debox/image/upload/v1657109438/Debox%20/Printing/Printing/PackagingIcon_anf2nv.png",
        alt : "Packaging"
    },
    {
        img : "https://res.cloudinary.com/debox/image/upload/v1657109438/Debox%20/Printing/Printing/FlyerIcon_lo0ran.png",
        alt : "Flyer"
    }
]

function PrintHeader(){
    const isDesktop = useMediaQuery('(min-width: 960px)');

    return(
        
        <div>
            <div className='PrintBanner flex flex-col'>
            
            
            </div>               
            {/* <PrintingButtons /> */}
            <div className=' flex flex-col md:flex-row'>
                <div className=' flex flex-col md:flex-row gap-28 md:pl-40 items-center'>
               
                <Link href="/printing/brochure-pamphlets#btn">
                  <PrintingButton img="">Brochure & Pamphlets</PrintingButton>    
                </Link>
                
                <Link href="/printing/custom-packaging#btn">
                    <PrintingButton img={print[1].img}>Customized Packaging</PrintingButton>
                </Link>
                
                <Link href="/printing/space-interior-branding#btn">
                <PrintingButton>Space & Internal Branding</PrintingButton></Link>
                {/* <Link href="/printing/custom-packaging#btn">
                <a className="buttons inline-block md:mx-4 px-4 md:px-4 py-16 md:py-16 text-md md:text-md sm:font-medium  hover:text-white border-2 border-red-700 shadow-md hover:shadow-2xl hover:bg-red-800 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
                        id="btn"
                 >
                        Brochure & Pamphlets
                    </a>

                </Link> */}

                </div>

            </div>
        </div>

    )
}


export default PrintHeader