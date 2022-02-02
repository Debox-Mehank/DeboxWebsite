import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const TechPortfolio = () => {
    const router = useRouter()
    useEffect(() => {
        router.replace("https://tech.debox.co.in")
    }, []);

    return <div className='mt-20'>Please Wait...</div>;
};

export default TechPortfolio;
