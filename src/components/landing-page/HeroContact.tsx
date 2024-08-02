
const HeroContact = () => {
    return (
        <div className="flex h-full  px-4 md:px-0 items-center justify-around flex-col lg:flex-row">
            <div className="max-w-xl">
                <h1 className="text-white text-[2.15rem] md:text-[2.50rem] mt-7 md:mt-0 text-center md:text-left font-bold" style={{ lineHeight: "3rem" }}>
                    Work From Anywhere, <br />
                    Grow Everywhere.
                    Get Your Instant Virtual <br />
                    Office
                </h1>
            </div>
            <div className="bg-white mt-7  h-fit text-center p-7 max-w-[30.063rem]">
                <h1 className="font-bold   md:mt-0 text-xl flex justify-center">
                    Get in touch with us
                </h1>
                <p className="text-subFont ">
                    Submit your Details to get an Instant
                    <span className="text-btYellow font-medium">
                        All-inclusive
                    </span>
                    Quote to your email and a
                    <span className="text-btYellow font-medium">
                        FREE
                    </span>
                    Expert consultation
                </p>

                <form action="" className=" ">
                    <div className="flex flex-col gap-2">
                        <div>
                            <label
                                htmlFor="first_name"
                                className="block mb-2 text-left text-sm font-medium text-gray-500"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="first_name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="John"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="mobile"
                                className="block mb-2 text-left text-sm font-medium text-gray-500"
                            >
                                Mobile
                            </label>
                            <input
                                type="text"
                                id="mobile"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Mobile No."
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="company"
                                className="block mb-2 text-sm text-left font-medium text-gray-500"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="city"
                                className="block mb-2 text-sm  text-left font-medium text-gray-500"
                            >
                                City
                            </label>
                            <input
                                type="text"
                                id="city"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="City Name"
                                pattern=""
                                required
                            />
                        </div>
                        <button type="button" className=" justify-center mt-4 items-center px-5 py-2.5 text-sm font-medium flex  text-white bg-[#3424C2] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                            Get a Detailed Quotation Now!
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default HeroContact
