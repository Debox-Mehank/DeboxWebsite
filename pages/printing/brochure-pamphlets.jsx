import Link from 'next/link'
import Image from 'next/image'
// Data
import imgData from '../../components/printing/imgData';
// Components
import PrintingHeader from "../../components/printing/PrintingHeader";
import PrintingButtons from '../../components/printing/PrintingButtons'
import HeaderImages from '../../components/printing/HeaderImages'
import PrintingInquiryForm from '../../components/printing/PrintingInquiryForm';
import Carousel from '../../components/swiper/Carousel';
import { Modal } from 'react-responsive-modal';
import withReactContent from 'sweetalert2-react-content'
// Hooks
import { useState, useEffect, Component } from 'react';
import { useRouter } from 'next/router';
// Utilities
import 'react-responsive-modal/styles.css';
import 'react-phone-number-input/style.css'
import Input from 'react-phone-number-input/input'
import PhoneInput from 'react-phone-number-input'
import Select from 'react-select'
import Swal from 'sweetalert2'
const MySwal = withReactContent(Swal)

const brochureImgs = imgData.filter(img => img.category === "brochures-pamphlets")

const options = [
    {
        label: "Letterhead",
        value: "letterhead"
    },
    {
        label: "Business Card",
        value: "business-card"
    },
    {
        label: "Diary",
        value: "diary"
    },
    {
        label: "Writing Pad",
        value: "writing-pad"
    },
    {
        label: "Booklet",
        value: "booklet"
    },
    {
        label: "Brochures",
        value: "brochures"
    },
    {
        label: "Stickers",
        value: "stickers"
    },
    {
        label: "Envelopes",
        value: "envelopes"
    },
    {
        label: "Bookmarks",
        value: "bookmarks"
    },
    {
        label: "Menu Cards",
        value: "menu-cards"
    },
    {
        label: "Takeaway Menu",
        value: "takeaway-menu"
    },
    {
        label: "Tent Card",
        value: "tent-card"
    },
    {
        label: "Flyer",
        value: "flyer"
    },
    {
        label: "Vouchers",
        value: "vouchers"
    },
    {
        label: "Gift Card",
        value: "gift-card"
    },
    {
        label: "Tags",
        value: "tags"
    },
    {
        label: "Certificates",
        value: "certificates"
    },
    {
        label: "Calendars",
        value: "calenders"
    },
    {
        label: "Danglers",
        value: "danglers"
    },
    {
        label: "Placemats",
        value: "placemats"
    },
    {
        label: "Catering Tags",
        value: "catering-tags"
    }
]


const BrochurePamphlets = () => {

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const router = useRouter()
    const query = router.query

    useEffect(() => {
        if (query && query.submit === "true") {
            MySwal.fire({
                icon: "success",
                titleText: "Inquiry Submitted!",
                html: `<p class="pb-2">Thank you for the inquiry! </p> <p>We'll get back to you shortly!</p>`,
                timer: 3500,
                showConfirmButton: false
            })
        }
    }, [query])

    return (
        <div className=''>
            <PrintingHeader />
            <section>
                <div className="px-4 md:py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-full gap-8">
                        <div className="relative z-10 lg:py-16">
                            <div className="relative h-64 sm:h-80 lg:h-full">
                                <Carousel imgArray={brochureImgs} />
                            </div>
                        </div>

                        <div className="relative flex items-center bg-red-100">
                            <span
                                className="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-red-100 lg:block lg:-left-16"
                            ></span>

                            <div className="p-8 sm:p-16 lg:p-24">
                                <h2 className="text-2xl font-bold sm:text-3xl">
                                    Brochure & Pamphlet
                                </h2>

                                <p className="mt-4 text-gray-600">
                                    Market your business and standout with our unique and eye-catching brochures and pamphlets. Be it a tri-fold or a bi-fold, choose from a varied paper qualities to put your best foot forward for promoting your business.
                                </p>

                                <div className='flex flex-col text-center md:gap-8 md:flex-row'>
                                    <button onClick={onOpenModal}
                                        className="cursor-pointer inline-block px-12 py-3 mt-8 text-md font-medium text-white bg-red-600 shadow-md hover:shadow-2xl hover:bg-red-800 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
                                    >
                                        Get a quote.
                                    </button>

                                    <a
                                        className="inline-block px-12 py-3 mt-8 text-md font-medium text-white bg-green-700 shadow-md hover:shadow-2xl hover:bg-green-900 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
                                        href="https://api.whatsapp.com/send?phone=14047316010"
                                    >
                                        Chat on WhatsApp!
                                    </a>
                                    {/* Props :- productList: options, formName: brochure_inquiry_form */}
                                    <Modal open={open} onClose={onCloseModal} center>

                                        <form name="contact23" data-netlify="true" action="/printing/brochure-pamphlets/?submit=true" method="POST" className="w-full px-8 lg:px-20 xl:px-20 py-4 lg:py-0 xl:py-0 flex flex-col justify-center gap-6">
                                            <input type="hidden" name="form-name" value="contact" />
                                            <p className="text-black font-semibold text-xs md:text-sm lg:text-sm xl:text-sm my-2">Fields marked with an <span className="text-red-800">*</span> are required.</p>
                                            <div className="flex flex-col gap-1">
                                                <label className="text-xs md:text-sm lg:text-sm xl:text-sm">What services are you looking for?<span className="text-red-800">*</span></label>
                                                <div className="flex items-center justify-start gap-2">
                                                    <input required type="radio" name="services" id="services-consulting" />
                                                    <label htmlFor="services-consulting" className="text-xs md:text-sm lg:text-sm xl:text-sm">Consulting</label>
                                                </div>
                                                <div className="flex items-center justify-start gap-2">
                                                    <input required type="radio" name="services" id="services-marketing" />
                                                    <label htmlFor="services-marketing" className="text-xs md:text-sm lg:text-sm xl:text-sm">Marketing</label>
                                                </div>
                                                <div className="flex items-center justify-start gap-2">
                                                    <input required type="radio" name="services" id="services-tech" />
                                                    <label htmlFor="services-tech" className="text-xs md:text-sm lg:text-sm xl:text-sm">Tech</label>
                                                </div>
                                                <div className="flex items-center justify-start gap-2">
                                                    <input required type="radio" name="services" id="services-design" />
                                                    <label htmlFor="services-design" className="text-xs md:text-sm lg:text-sm xl:text-sm">Design</label>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <label htmlFor="urgency" className="text-xs md:text-sm lg:text-sm xl:text-sm">How urgent is the project?<span className="text-red-800">*</span></label>
                                                <select required id="urgency" name="urgency" className="bg-gray-100 p-2 rounded text-sm md:text-base lg:text-base xl:text-base">
                                                    <option value="low">Low</option>
                                                    <option value="medium">Medium</option>
                                                    <option value="high">High</option>
                                                </select>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <label htmlFor="duedate" className="text-xs md:text-sm lg:text-sm xl:text-sm">Due Date<span className="text-red-800">*</span></label>
                                                <input required id="duedate" name="duedate" type={"date"} className="bg-gray-100 p-2 rounded text-sm md:text-base lg:text-base xl:text-base" />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <label htmlFor="desc" className="text-xs md:text-sm lg:text-sm xl:text-sm">Describe Your Project<span className="text-red-800">*</span></label>
                                                <textarea required rows={4} id="desc" name="desc" className="bg-gray-100 p-2 rounded text-sm md:text-base lg:text-base xl:text-base" />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <label htmlFor="fullname" className="text-xs md:text-sm lg:text-sm xl:text-sm">Full Name<span className="text-red-800">*</span></label>
                                                <input required id="fullname" name="fullname" type="text" className="bg-gray-100 p-2 rounded text-sm md:text-base lg:text-base xl:text-base" />
                                            </div>
                                            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                                                <div className="flex flex-col gap-1">
                                                    <label htmlFor="email" className="text-xs md:text-sm lg:text-sm xl:text-sm">Email<span className="text-red-800">*</span></label>
                                                    <input required id="email" name="email" type="email" className="bg-gray-100 p-2 rounded text-sm md:text-base lg:text-base xl:text-base" />
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <label htmlFor="phone" className="text-xs md:text-sm lg:text-sm xl:text-sm">Mobile Number<span className="text-red-800">*</span></label>
                                                    <input required id="phone" name="phone" type="number" maxLength={10} className="bg-gray-100 p-2 rounded text-sm md:text-base lg:text-base xl:text-base" />
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <input type="submit" value="Submit" className="text-white bg-primary font-semibold text-sm shadow-md cursor-pointer rounded-sm py-1.5 px-4 mt-3 lg:py-2 hover:text-black hover:bg-gray-300 w-max uppercase" />
                                            </div>
                                        </form>
                                        {/* 
                                        <section className="bg-gray-100 shadow-2xl">
                                            <div className="max-w-screen-2xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                                                <div className="">
                                                    <div className="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">
                                                        <form name="brochureInquiryForm" data-netlify="true" action='/printing/brochure-pamphlets/?submit=true' method="POST" className="space-y-4">
                                                            <div>
                                                                <label className="sr-only" htmlFor="name">Full Name</label>
                                                                <input
                                                                    className="w-full p-3 text-sm md:text-base lg:text-base xl:text-base border-2 border-gray-200 rounded-lg"
                                                                    placeholder="Full Name"
                                                                    type="text"
                                                                    id="name"
                                                                    name='fullName' />
                                                            </div>

                                                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                                                <div>
                                                                    <label className="sr-only" htmlFor="email">Email</label>
                                                                    <input
                                                                        className="w-full p-3 text-sm md:text-base lg:text-base xl:text-base border-2 border-gray-200 rounded-lg"
                                                                        placeholder="Email address"
                                                                        type="email"
                                                                        id="email"
                                                                        name='email'
                                                                    />
                                                                </div>

                                                                <div>
                                                                    <label className="sr-only" htmlFor="phone">Phone</label>
                                                                    <Input
                                                                        className="bg-white w-full p-3 rounded text-sm md:text-base border-2 border-gray-200     lg:text-base xl:text-base "
                                                                        country="US"
                                                                        onChange={() => null}
                                                                        placeholder="Phone Number"
                                                                        name="Phone Number"
                                                                    />

                                                                </div>
                                                            </div>


                                                            <Select name='Products Required' options={options} placeholder="Product(s) Required" isMulti={true} />


                                                            <div>
                                                                <label className="sr-only" htmlFor="message">Message</label>
                                                                <textarea
                                                                    className="w-full p-3 text-sm md:text-base lg:text-base xl:text-base border-2 border-gray-200 rounded-lg"
                                                                    placeholder="Message"
                                                                    rows="8"
                                                                    id="message"
                                                                    name='Remarks'
                                                                ></textarea>
                                                            </div>


                                                            <div className='pl-2 flex gap-4'>
                                                                Urgent Requirement?
                                                                <div className='flex items-center gap-4'>
                                                                    <div>
                                                                        <input className='mx-1' type="radio" name="Urgent" id="urgent" />
                                                                        <label htmlFor="urgent">Yes</label>
                                                                    </div>
                                                                    <div>
                                                                        <input className='mx-1' type="radio" name="Urgent" id="not-urgent" />
                                                                        <label htmlFor="not-urgent">No</label>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div className="mt-4">
                                                                <button
                                                                    type="submit"
                                                                    className="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-primary rounded-lg sm:w-auto"
                                                                >
                                                                    <span className="font-medium"> Send Enquiry </span>

                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        className="w-5 h-5 ml-3"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        stroke="currentColor"
                                                                    >
                                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                                    </svg>
                                                                </button>
                                                            </div>

                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </section> */}
                                    </Modal>



                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>



    );
}

export default BrochurePamphlets