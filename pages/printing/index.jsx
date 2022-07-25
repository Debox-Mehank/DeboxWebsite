import PrintHeader from "../../components/printing/PrintingHeader";
import { useRouter } from 'next/router'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import { useEffect } from "react";
const MySwal = withReactContent(Swal)
import PrintingInquiryForm from '../../components/printing/PrintingInquiryForm';

function index() {
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
        <div className="bg-white">
            <PrintHeader />
            <div className="hidden">
                <PrintingInquiryForm formName="BrochureInquiryForm" productList={[]} />
                <PrintingInquiryForm formName="PackagingInquiryForm" productList={[]} />
                <PrintingInquiryForm formName="InteriorBrandingInquiryForm" productList={[]} />
            </div>
        </div>
    )
}

export default index