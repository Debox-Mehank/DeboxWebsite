
import React, { useEffect, useRef } from 'react'
import PrintingButtons from '../../components/printing/PrintingButtons'
import HeaderImages from '../../components/printing/HeaderImages'
import useMediaQuery from '../../hooks/useMediaQuery';
import imgData from '../../components/printing/imgData';

const midIndex = Math.ceil(imgData.length / 2)
const shuffledArray = imgData.sort((a, b) => 0.5 - Math.random());
const firstHalf = shuffledArray.slice().splice(0, midIndex);
const secondHalf = shuffledArray.slice().splice(-midIndex);

// const interiorImgs = imgData.filter(img => img.category === "space-interior")
// const brochureImgs = imgData.filter(img => img.category === "brochures-pamphlets")


function PrintingHeader() {
    const banner = useRef(null)
    useEffect(
        () => {
            var lastScroll = 0;
            const onScroll = () => {
                let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value
                const strNum = banner.current.style.backgroundPosition.slice(0, banner.current.style.backgroundPosition.substring.length - 11)
                const num = Number(strNum)

                if (currentScroll > 0 && lastScroll <= currentScroll) {
                    lastScroll = currentScroll;
                    banner.current.style.backgroundPosition = `${num + 5}px center`
                } else {
                    lastScroll = currentScroll;
                    banner.current.style.backgroundPosition = `${num - 5}px center`
                }

            };
            window.addEventListener("scroll", onScroll);
            return () => window.removeEventListener("scroll", onScroll);
        }, []
    );


    const isDesktop = useMediaQuery('(min-width: 960px)');
    return (
        // <div style={{ marginBottom: "15vh", marginTop: "15vh" }} className={`mt-36 px-8 ${isDesktop ? 'printing-desktop-view' : ""}`}>
        //     <HeaderImages imgArray={firstHalf} speed={7000} delay={0} />
        //     <HeaderImages imgArray={secondHalf} speed={6000} delay={0} />
        //     
        // </div>
        <div className=' bg-marketingBg pb-10'>
            <div style={{ backgroundPosition: "0px center" }} className=' PrintHead mt-28 md:mt-36' ref={banner} ></div>

            <PrintingButtons />
        </div>


    )
}

export default PrintingHeader