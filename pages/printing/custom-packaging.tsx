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

const packagingImgs = imgData.filter(img => img.category === "Packaging")

const options = [
  {
    label: "Tissue Papper",
    value: "tissue-paper"
  },
  {
    label: "Carrybags",
    value: "carrybags"
  },
  {
    label: "Biryani containers",
    value: "biryani-containers"
  },
  {
    label: "Curry containers",
    value: "curry-containers"
  },
  {
    label: "Appetizer containers",
    value: "appetizer-containers"
  },
  {
    label: "Dessert containers",
    value: "dessert-containers"
  },
  {
    label: "Ice-cream pints",
    value: "icecream-pints"
  },
  {
    label: "Dosa containers",
    value: "dosa-containers"
  },
  {
    label: "Salad bowl",
    value: "salad-bowl"
  },
  {
    label: "Drink cups",
    value: "drink-cups"
  },
  {
    label: "Drink/Cup holder for takeout",
    value: "takeout-cup-holders"
  },
  {
    label: "Noodle Box",
    value: "noodle-box"
  },
  {
    label: "Juice container",
    value: "juice-container"
  },
  {
    label: "Takeaway bags",
    value: "takeaway-bags"
  },
  {
    label: "Thali packaging box/combo box",
    value: "thali-packaging-combo-box"
  },
  {
    label: "Pizza box",
    value: "pizza-box"
  },
  {
    label: "Burger box",
    value: "burger-box"
  },
  {
    label: "Bakery box",
    value: "bakery-box"
  },
  {
    label: "Straws",
    value: "straws"
  },
  {
    label: "Dabba Garam Lunch box",
    value: "lunch-box"
  },
  {
    label: "Butter paper/Wrapping paper",
    value: "butter-wrapping-paper"
  },
  {
    label: "Drink bottles",
    value: "drink-bottles"
  },
  {
    label: "Seal pouches",
    value: "seal-pouches"
  },
  {
    label: "Cup Holder",
    value: "cup-holder"
  },
  {
    label: "Paper Pillow Cone Shaped Box",
    value: "paper-pillow-cone-box"
  },
  {
    label: "Brownie Box",
    value: "brownie-box"
  },
  {
    label: "hamper Box",
    value: "hamper-box"
  },
  {
    label: "Cupcake Box",
    value: "cupcake-box"
  },
  {
    label: "Paper Straws",
    value: "paper-straws"
  },
  {
    label: "Zip Lock Pouch",
    value: "zip-lock-pouch"
  },
  {
    label: "Party Centric Spoon",
    value: "party-centric-spoon"
  },
  {
    label: "Bucket stickers",
    value: "bucket-stickers"
  },
  {
    label: "Container stickers",
    value: "container-stickers"
  },
  {
    label: "Bottle stickers",
    value: "bottle-stickers"
  },
  {
    label: "Takeaway Bag stickers",
    value: "takeaway-bag-stickers"
  },
  {
    label: "Takeaway Bag Freshness Tape Sticker",
    value: "freshness-tape-sticker"
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
      <div className="px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8 bg-marketingBg">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-full gap-8">
            <div className="relative z-10 lg:py-16">
            <div className='box-shadow rounded-2xl  '>
              <div className="relative h-64 sm:h-80 lg:h-full">
                <Carousel imgArray={packagingImgs} />
              </div>
              </div>
            </div>

            <div className="relative flex items-center">
              {/* <span
                className="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-red-100 lg:block lg:-left-16"
              ></span> */}

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-2xl font-bold sm:text-3xl text-rose-600"> 
                  Customised Packaging
                </h2>

                <p className="mt-4 text-gray-600">
                  Be it launching a new product or just giving your existing packaging a fresh feel. With our unique and out-of-the-box packaging ideas and designs, your customers are surely going to love the new touch that we will give to your business.
                </p>

                <div className='flex flex-col text-center md:gap-8 md:flex-row'>
                  <button onClick={onOpenModal}
                   className="cursor-pointer inline-block px-12 py-3 mt-8 text-md font-medium text-white bg-red-600 shadow-md hover:shadow-2xl hover:bg-red-800 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none rounded-full"
                  >
                    Get a quote.
                  </button>

                  <a
                    className="inline-block px-12 py-3 mt-8 text-md font-semibold text-green-600 bg-white shadow-md hover:shadow-2xl hover:bg-gray-200 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none rounded-full"
                    href="https://api.whatsapp.com/send?phone=14047316010"
                  >
                    Chat on WhatsApp!
                  </a>

                  <Modal open={open} onClose={onCloseModal} center>
                    <PrintingInquiryForm productList={options} formName="PackagingInquiryForm" />
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