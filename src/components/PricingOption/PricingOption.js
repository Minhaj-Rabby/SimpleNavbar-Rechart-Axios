import React from 'react';
import Feature from '../Feature/Feature';

const PricingOption = ({option}) => {
    const{name,price,features}=option;
    return (
        <div className='bg-indigo-300 m-3 rounded-md p-3'> 
            <div>
                <p><span className='text-6xl font-bold text-white'>{price}</span><span className='text-2xl text-gray-200'>/mon</span></p>
                <p className='text-3xl my-4'>{name}</p>
            </div>
            {
                features.map((feature,idx)=><Feature key={idx} feature={feature}></Feature>)
            }
           <button className='bg-green-500 hover:bg-yellow-500 mt-3 w-full py-3 rounded-md text-white font-bold'>Buy Now</button>
        </div>
        
    );
};

export default PricingOption;