import React from 'react';

const items = [
    {
        image: '/products/1.png',
        name: 'Beoplay M5 Bluetooth Speaker',
        link: '#',
        label: 'New',
        rating: 4,
        price: '$99.00'
    },
    {
        image: '/products/2.png',
        name: 'Apple Smart Watch 6 - Special Edition',
        link: '#',
        label: '',
        rating: 5,
        price: '$299.00'
    },
    {
        image: '/products/3.png',
        name: 'Beylob 90 Speaker',
        link: '#',
        label: 'Sale',
        rating: 3,
        price: '$199.00'
    },
    {
        image: '/products/5.png',
        name: 'Sony WH-1000XM4',
        link: '#',
        label: '',
        rating: 5,
        price: '$349.00'
    },
    {
        image: '/products/6.png',
        name: 'Sony WH-1000XM4',
        link: '#',
        label: '',
        rating: 5,
        price: '$349.00'
    },
    {
        image: '/products/7.png',
        name: 'Sony WH-1000XM4',
        link: '#',
        label: '',
        rating: 5,
        price: '$349.00'
    },
    {
        image: '/products/8.png',
        name: 'Sony WH-1000XM4',
        link: '#',
        label: '',
        rating: 5,
        price: '$349.00'
    },
    {
        image: '/products/9.png',
        name: 'Sony WH-1000XM4',
        link: '#',
        label: '',
        rating: 5,
        price: '$349.00'
    }
];

const FeaturedItems = () => {        
    return (
        <section className="pb-12 sm:pb-16 lg:pb-20 font-[NeoSansPro-Regular]">
            <header className="bg-blue-600 h-52 text-white p-6">
        <div className="container flex max-sm:justify-center max-sm:items-center text-center sm:h-80 mx-10 relative ">
            <h1 className="font-extralight mb-4 text-start text-4xl xl:text-7xl pt-14 sm:pt-24 font-[NeoSansPro-Medium] ">Products</h1>
            <p className="text-sm sm:text-xl  text-gray-800 max-sm:max-w-[15rem] max-lg:max-w-[20rem] lg:max-w-lg bg-blue-50 px-4 py-5 xl:px-10 lg:py-12 absolute max-sm:-bottom-20  bottom-20 sm:-right-14 md:right-8 lg:right-28  font-[NeoSansPro-Light] font-bold rounded-3xl">High-quality products sourced globally, ensuring compliance, reliability, and timely delivery.</p>
        </div>
    </header>
            <div className="px-4 pt-20 mx-auto sm:px-6 lg:px-8 max-w-7xl bg-blue-50 rounded-b-3xl p-6">
                <div className="max-w-md mx-auto text-center">
                    <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">What we supply !</h2>
                    <p className="mt-4 text-base font-normal leading-7 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus faucibus massa dignissim tempus.</p>
                </div>
                <div className="grid grid-cols-2 gap-6 lg:gap-y-10 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-3">
                    {items.map((item, index) => (
                        <div key={index} className="relative group">
                            <div className="overflow-hidden  bg-blue-50 border-0 rounded-3xl">
                                <img className="   transition-all duration-300 group-hover:scale-125" src={item.image} alt={item.name} />
                            </div>
                            {item.label && (
                                <div className={`absolute left-3 top-3 ${item.label === 'New' ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'} rounded-full px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide uppercase`}>
                                    {item.label}
                                </div>
                            )}
                            <div className="flex items-start justify-between mt-4 space-x-4">
                                <div>
                                    <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                                        <a href={item.link} title={item.name}>
                                            {item.name}
                                            <span className="absolute inset-0" aria-hidden="true"></span>
                                        </a>
                                    </h3>
                                    {/* <div className="flex items-center mt-2.5 space-x-px">
                                        {Array.from({ length: 5 }, (_, i) => (
                                            <svg
                                                key={i}
                                                className={`w-3 h-3 sm:w-4 sm:h-4 ${i < item.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div> */}
                                </div>
                                {/* <div className="text-right">
                                    <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">{item.price}</p>
                                </div> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};



export default FeaturedItems;
