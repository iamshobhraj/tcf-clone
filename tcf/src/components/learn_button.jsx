import React, { useState } from 'react';

export default function Learn(){

    return(
        <div className="flex space-x-6">
            <button className="border-solid border-2 p-2" >
                Learn More
            </button>
            <img src="/assets/fe_arrow-left.svg" className={`object-scale-down peer-hover:translate-x-6`} />
        </div>
    )
}