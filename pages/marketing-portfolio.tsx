import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const MarketingPortfolio = () => {
    const router = useRouter()
    useEffect(() => {
        router.replace("https://marketing.debox.co.in")
    }, []);

    return <div className='mt-20'>Please Wait...</div>;
};

export default MarketingPortfolio;
