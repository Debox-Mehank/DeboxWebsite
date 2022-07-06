import Link from "next/link"
import Image from "next/image";


function PrintingButton(props){
    return(
        <div>
           <a className="buttons inline-block md:mx-4 px-4 md:px-4 py-16 md:py-16 text-md md:text-md sm:font-medium  hover:text-white border-2 border-red-700 shadow-md hover:shadow-2xl hover:bg-red-800 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
                        id="btn">
                    {props.children}
        </a>

        {/* <Image src={props.img} height="20" width="20" />  */}
     

        </div>

        
        
        
    )

}    


export default PrintingButton