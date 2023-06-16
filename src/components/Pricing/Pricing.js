import React from 'react';
import PricingOption from '../PricingOption/PricingOption';
const Pricing = () => {
    const pricingOptions=[
        {id:1, name:'Free', price:0, features:[
            'Awosome Features','Extra','Ajaira','Hudai','Never'
        ]},
        {id:2, name:'Medium', price:9.99, features:[
            'Everything on Free','Awosome Features','Extra','Ajaira','Hudai'
        ]},
        {id:3, name:'Primium', price:19.99, features:[
            'Everything on Medium','Awosome Features','Extra','Ajaira','Hudai'
        ]},
    ]
    return (
        <div>
            <h2 className='text-5xl font-bold bg-indigo-300 text-white p-8 m-3 rounded-md'>The Best Deal of town</h2>
            <div className='grid md:grid-cols-3 gap-3'>
            

            {
                pricingOptions.map(option=><PricingOption key={option.id} option={option}></PricingOption>)

            }
            </div>
        </div>
    );
};

export default Pricing;