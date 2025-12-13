import React from "react";
import code_2 from "../images/code_2.jpg";


export default function Banner_4(){
    return(
        <div className="relative w-full h-[36rem]">
             <img
                src={code_2}
                alt="more computer code"
                className="w-full h-full object-cover opacity-90"
             />
                {/* subtle gradient fade for drama */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90"></div>
         </div>


    )

}

