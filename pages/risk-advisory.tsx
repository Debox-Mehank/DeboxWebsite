import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const RiskAdvisory = () => {
    const router = useRouter()
    useEffect(() => {
        router.replace("https://riskadvisory.debox.co.in")
    }, []);

    return <div className='mt-20'>Please Wait...</div>;
};

export default RiskAdvisory;
