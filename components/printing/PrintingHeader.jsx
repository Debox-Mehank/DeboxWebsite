
import React from 'react'
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

    const isDesktop = useMediaQuery('(min-width: 960px)');
    return (
        <div style={{ marginBottom: "15vh", marginTop: "15vh" }} className={`mt-36 px-8 ${isDesktop ? 'printing-desktop-view' : ""}`}>
            <HeaderImages imgArray={firstHalf} speed={7000} delay={0} />
            <HeaderImages imgArray={secondHalf} speed={6000} delay={0} />
            <PrintingButtons />
        </div>
    )
}

export default PrintingHeader