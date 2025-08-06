import React from "react";
import Meta from '../assets/Meta.jpg';
import utube from '../assets/youtube.jpg';
import Snapchat from '../assets/Snapchat.jpg';
export const Partners = () => {
    return ( 
        <>
        <div className="ms-23">
        <div className="text-[23px] font-semibold pb-2">Official Partners</div>
        <div className="flex flex-row gap-8 ">
            
                <img src={Meta} alt="meta" className="w-20 h-20" />
                <img src={utube} alt="utube" className="w-30 h-18" />
                <img src={Snapchat} alt="snapchat" className="w-20 h-20" />
                
            
        </div>
        </div>
        </>
     );
}
 
