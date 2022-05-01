import Image from "next/image"
import aboutimg from "../assets/aboutimg.jpg";
import results from "../assets/about/results.svg";
import ownership from "../assets/about/ownership.svg";
import commitment from "../assets/about/commitment.svg";
import empowerment from "../assets/about/empowerment.svg";

export default function AboutUs() {

    const values = [
        {
            name: "RESULTS",
            content: "We clearly focus on the financial & non-financial value we would be adding through our services and the end benefit we would be delivering for all the stakeholders involved.",
            svg: results
        },
        {
            name: "OWNERSHIP",
            content: "We put ourselves in the shoes of our clients and drive the projects as we would do it if it was our own business",
            svg: ownership
        },
        {
            name: "COMMITMENT",
            content: "We commit to the fullest and are focused on driving success even it requires us to go over and above the scope of work to achieve the same.",
            svg: commitment
        },
        {
            name: "EMPOWERMENT",
            content: "We fully empower and trust in our people and give them opportunities and information necessary for them to excel.",
            svg: empowerment
        }
    ]

    return (

        <main className="mx-auto">

            <div className="h-screen bg-cover bg-center about-div ">

            </div>

            <div className="text-xl">
                <div >
                    <h1 className="text-2xl text-center font-bold sm:text-4xl mb-8 bg-primary py-6 text-white"> About Us</h1>

                </div>
                <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" className="px-4 md:px-12 lg:px-40">
                    <p className="mb-6">The name Debox stands for '<span className="border-red-700 border-b-2">Out of the Box</span>'.</p>
                    <p className="mb-6">We believe in doing things differently, we
                        believe in challenging the status quo and breaking the normal. We believe in delivering
                        performance that stands out and gets noticed. We are a boutique consulting firm that focuses on designing holistic and measurable
                        business solutions. We partner with businesses to build a Sustainable Growth path
                        through synergies of People, Processes and Technology.
                    </p>
                    <p className="mb-6">
                        Founded in 2017, we have delivered exceptional results for our clients be it Consulting,
                        Marketing or Custom Tech. We have built a solid trust amongst our clients and have a
                        high customer referral rate and we take pride in the same.
                    </p>
                </div>

                <div className="px-4 md:px-12 lg:px-40">
                    <p className="mb-3">Debox offers services in the following areas:</p>

                    <ul className="ml-6 mb-2 mt-5 flex flex-col gap-4 ">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-block mr-2 text-red-600" viewBox="0 0 16 16">
                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                            </svg>
                            Business & HR Consulting</li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-block mr-2 text-red-600" viewBox="0 0 16 16">
                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                            </svg>
                            Process Consulting</li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-block mr-2 text-red-600" viewBox="0 0 16 16">
                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                            </svg>
                            Risk Advisory</li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-block mr-2 text-red-600" viewBox="0 0 16 16">
                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                            </svg>
                            Marketing Consulting</li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-block mr-2 text-red-600" viewBox="0 0 16 16">
                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                            </svg>
                            Tech & Data Consulting</li>
                    </ul>
                </div>
                {/* Divider */}
                <div className="py-4 mb-2">
                    <div className="w-full border-t border-gray-300"></div>
                </div>
                {/*Divider End */}

                <div className="px-4 md:px-12 lg:px-40">
                    <p className="my-5"><span className="font-bold">OUR MISSION</span></p>
                    To be a trusted name in the field of operations known for delivering exceptional results
                    and unmatched customer satisfaction.

                    <p className="my-5"><span className="font-bold">OUR VISION</span></p>
                    We intend to build a team of exceptional performers coming together from various
                    domains who are willing to take risks, take on newer challenges to deliver path
                    breaking solutions.
                </div>
                <div className="px-4 md:px-12 lg:px-40 mb-4">
                    <p className="my-5"><span className="font-bold">OUR CORE VALUES</span></p>
                    <p className="mb-2">We live by Our Core Values - ROCE (also stands for Return on Capital Employed in
                        financial terms).</p>

                    <p>What ROCE stands for at Debox:</p>
                </div>
                <div className="bg-gray-200 flex flex-col lg:flex-row justify-around p-10 md:align-baseline gap-8 pb-16">
                    {
                        values.map(value => {
                            return (
                                <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" className="flex-1 flex flex-col sm:flex-col items-center gap-6">
                                    <Image height={100} width={200} src={value.svg}></Image>
                                    <h4 className="font-bold">{value.name}</h4>
                                    <p className="mb-12 md:mb-0 text-center">{value.content}</p>
                                </div>
                            )
                        })
                    }

                </div>




            </div>

        </main>

    )
}