import { useState } from 'react';
import Link from 'next/link'
import PrintingButtons from '../../components/printing/PrintingButtons'
import HeaderImages from '../../components/printing/HeaderImages'
import Image from 'next/image'
import imgData from '../../components/printing/imgData';
import PrintingInquiryForm from '../../components/printing/PrintingInquiryForm';
import Carousel from '../../components/swiper/Carousel';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import PrintingHeader from "../../components/printing/PrintingHeader";

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

                                    <Modal open={open} onClose={onCloseModal} center>
                                        <PrintingInquiryForm productList={options} formName="brochure_inquiry_form" />
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