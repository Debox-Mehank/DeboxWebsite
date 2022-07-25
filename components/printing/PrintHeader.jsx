import React from 'react'
import PrintingButtons from '../../components/printing/PrintingButtons'
import PrintBanners from "../../public/Debox_Print_Banners.jpg"
import useMediaQuery from '../../hooks/useMediaQuery';
import Link from 'next/link';
import PrintingButton from '../reusable/PrintingButton';
import Pamplet from "../../public/FlyerIcon.png"
import PrintingHeader from "../printing/PrintingHeader"

const print = [
    {
        img: "https://res.cloudinary.com/debox/image/upload/v1657109438/Debox%20/Printing/Printing/BrandingIcon_enck4r.png",
        alt: "Branding"
    },
    {
        img: "https://res.cloudinary.com/debox/image/upload/v1657109438/Debox%20/Printing/Printing/PackagingIcon_anf2nv.png",
        alt: "Packaging"
    },
    {
        img: "https://res.cloudinary.com/debox/image/upload/v1657109438/Debox%20/Printing/Printing/FlyerIcon_lo0ran.png",
        alt: "Flyer"
    }
]

function PrintHeader() {
    const isDesktop = useMediaQuery('(min-width: 960px)');

    return (

        <div>
            <div className='PrintBanner flex flex-col'>
                <PrintingHeader />

            </div>
            {/* <PrintingButtons /> */}
        </div>

    )
}


export default PrintHeader