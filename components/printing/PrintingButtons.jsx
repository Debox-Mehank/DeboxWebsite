import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import PrintButton from './PrintButton'
import { useRouter } from 'next/router'


function PrintingButtons() {
    const router = useRouter()
    return (
        <div className="flex justify-center items-center flex-col px-3 py-1 xl:px-15 xl:py-1  select-none mt-4 ">

             
          <div className="flex flex-col text-center gap-3 md:flex-row md:-mt-20">
            <div onClick={() => {router.push("/printing/brochure-pamphlets#btn")}}>    
             <Link href="/printing/brochure-pamphlets#btn" >
            
             <PrintButton imgLink = "https://res.cloudinary.com/debox/image/upload/v1657109438/Debox%20/Printing/Printing/FlyerIcon_lo0ran.png" >
             Brochure & Pamphlets   
             </PrintButton>
                    
             </Link>
            </div>
                
                
            <div onClick={() => {router.push("/printing/custom-packaging#btn")}}>  
                <Link href="/printing/custom-packaging#btn">
                <PrintButton imgLink = "https://res.cloudinary.com/debox/image/upload/v1657109438/Debox%20/Printing/Printing/PackagingIcon_anf2nv.png">
                Customized Packaging
                </PrintButton>
                    
                        
                    
                </Link>
            </div>
            <div onClick={() => {router.push("/printing/space-interior-branding#btn")}}>    
                <Link href="/printing/space-interior-branding#btn">
                
                <PrintButton imgLink = "https://res.cloudinary.com/debox/image/upload/v1657109438/Debox%20/Printing/Printing/BrandingIcon_enck4r.png">
                Space & Internal Branding
                </PrintButton>                
                </Link>
            </div>    
         </div>

        </div>
    );
}

export default PrintingButtons