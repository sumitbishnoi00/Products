import React, { useEffect, useState } from 'react'
import Icons from '../common/Icons';

const Cards = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        async function apiFetch() {
            setLoading(true);

            const response = await fetch("https://dummyjson.com/products");
            const data = await response.json();

            setProducts(data.products);
            setLoading(false);

            console.log(data);
        }

        apiFetch();

    }, []);
    return (

        <div className='max-w-7xl mx-auto py-10 px-3'>
            <div className='flex flex-col items-center justify-center'>
                <Icons icon={"line"} />
                <h1 className='font-bold text-[48px] leading-[100%] text-black text-center mt-2'>Choose your Product</h1>

                {loading && <h2 className='text-center'>Loading...</h2>}

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6.25 mt-8.25'>
                    {products.map((item) => (

                        <div key={item.id} className='border rounded-[30px] border-light-gray p-8.75 hover:shadow-[0px_8px_35px_0px_#0000001A] hover:border-none transition-all duration-500 cursor-pointer'>
                            <img src={item.thumbnail} alt={item.title} className='w-full h-52 object-contain object-center rounded-[20px]' />

                            <h2 className='font-semibold text-2xl leading-[150%] text-black mt-2'>{item.title}</h2>

                            <p className='font-normal text-[18px] leading-[150%] text-gray mt-3 mb-5'>{item.description}</p>

                            <span className='font-normal text-[24px] leading-[100%] text-red-400'>Price: ${item.price}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Cards