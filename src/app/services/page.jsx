import Head from "next/head";
import Link from "next/link";

const services = [
    {
      title: "Trading",
      description: "Connecting you with reliable global markets, ensuring the best value and quality for your products and services.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQQuposbl6SbLVzfVXLlDPELAZiRlHgXySvQ&s"
    },
    {
      title: "International Supply",
      description: "Streamlining your supply chain operations to enhance efficiency, reduce costs, and ensure timely delivery.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQQuposbl6SbLVzfVXLlDPELAZiRlHgXySvQ&s"
    },
    {
      title: "Logistics",
      description: "Managing the logistics of your goods, ensuring safe and efficient transport across international borders.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQQuposbl6SbLVzfVXLlDPELAZiRlHgXySvQ&s"
    },
    {
      title: "Compliance",
      description: "Ensuring that your trade practices meet all international regulations and standards.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQQuposbl6SbLVzfVXLlDPELAZiRlHgXySvQ&s"
    }
  ];

  const otherServices = [
    { "href": "https://unsplash.com/photos/5fNmWej4tAA", "title": "Market Analysis" },
    { "href": "https://unsplash.com/photos/yHiNpx7Wh2I", "title": "Risk Management" },
    { "href": "https://unsplash.com/photos/wAwEfYdpkag", "title": "Supply Chain Optimization" },
    { "href": "https://unsplash.com/photos/9SoCnyQmkzI", "title": "Customs Brokerage" },
    { 
      href: 'https://images.unsplash.com/photo-1581094478164-6c3e1ce3d2b6', 
      title: 'Training' 
    }
  ];
  
export default function Home() {
  return (
    <div>
      <Head>
        <title>Om Trading Corporation</title>
        <meta
          name="description"
          content="Om Trading Corporation - International Trading and Supply Chain Solutions"
        />
      </Head>

    

      <main className="mx-auto font-[NeoSansPro-Regular]">
        <div className=" flex flex-col  gap-y-32   ">
          <header className="bg-blue-600 py-16    ">
            <div className="sm:container flex max-sm:justify-center max-sm:items-center text-center sm:h-64 mx-10 relative">
              <h1 className=" font-extralight mb-4 text-start text-6xl sm:text-7xl pt-14 sm:pt-24 text-gray-100 font-[NeoSansPro-Medium]">
                Services
              </h1>
              <div className="text-xs sm:text-xl  text-gray-800 max-sm:max-w-[15rem] sm:max-w-lg bg-gray-200 px-4 py-5 sm:px-10 sm:py-12 font-semibold absolute -bottom-32 font-[NeoSansPro-Light]  ">
                Om Trading Corporation is a leading provider of international
                trading and supply chain solutions.
              </div>
            </div>
          </header>
          <div className="flex flex-col max-sm:justify-center max-sm:items-center md:flex-row container mx-auto relative ">
            <p className="text-xl max-w-lg sm:max-w-xl max-sm:text-center sm:ml-10 pt-4 sm:pt-16">
              Our extensive network spans across continents, ensuring the
              seamless movement of goods and services globally.
            </p>
            <div className="bg-white max-w-96 lg:absolute right-10 -top-44 rounded-lg shadow-md p-6">
              {/* Image container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQQuposbl6SbLVzfVXLlDPELAZiRlHgXySvQ&s"
                  alt="Greenhouse"
                  className="w-full h-full object-cover"
                />
                {/* Obscured face placeholders */}
                <div className="absolute inset-0 bg-brown opacity-50"></div>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold mt-4">Our Responsibility</h2>

              {/* Descriptive text */}
              <p className="text-gray-600 mt-2">
                At Om Trading Corporation, our mission of facilitating global
                trade with integrity, efficiency, and sustainability positions
                us as a catalyst for positive change in the international
                marketplace.
              </p>
            </div>
          </div>
        </div>
        <section className=" mx-5 max-sm:flex max-sm:justify-center max-sm:items-center sm:mx-16 pt-20 sm:pt-48">
          <div className="sm:container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
              <div key={index} className="bg-white max-w-80 rounded-lg shadow-md">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-brown opacity-50"></div>
                </div>
                <div className="px-6 py-4">
                  <h2 className="text-2xl font-bold mt-4">{service.title}</h2>
                  <p className="text-gray-600 mt-2">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-6 sm:mx-16 py-8">
        <div className="container mx-auto">
      <h4 className="text-2xl sm:text-4xl font-bold mb-4 text-primary mt-10">
        Other services
      </h4>
      <div className="sm:container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {otherServices.map((service, index) => (
          <div key={index} className="pl-4 py-4 text-gray-800 shadow-lg rounded-lg flex h-[4.25rem] md:h-14">
            <h5 className="text-lg sm:text-xl font-bold mb-2 basis-3/4">
              
                <p>{service.title}</p>
             
            </h5>
            <div className="basis-1/4  relative ">
            <img className="h-14 absolute -top-4 left-3 sm:left-6"  src={service.href} alt="" />
            </div>
            
          </div>
        ))}
      </div>
    </div>
        </section>

        {/* <section className=" py-8 text-center">
            <div className='container mx-auto'>
            <h4 className=" text-3xl font-bold mb-4 text-primary">Looking for something else?</h4>
          <Link href="/regions">
            <p className="bg-primary text-white py-2 px-4 rounded-lg">Explore our services by region</p>
          </Link>
            </div>
          
        </section> */}
      </main>

      {/* <footer className="bg-primary text-white py-8">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <Link href="/">
              <p className="text-lg font-bold">Om Trading Corporation</p>
            </Link>
          </div>
          <nav className="space-x-4 mb-4">
            <Link href="/disclaimer">
              <p>Disclaimer</p>
            </Link>
            <Link href="/terms">
              <p>Terms</p>
            </Link>
            <Link href="/privacy">
              <p>Privacy</p>
            </Link>
            <Link href="/cookies">
              <p>Cookies</p>
            </Link>
            <Link href="/ethical-trading">
              <p>Ethical Trading Statement</p>
            </Link>
          </nav>
          <div>
            <p>
              &copy; {new Date().getFullYear()} Om Trading Corporation. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
