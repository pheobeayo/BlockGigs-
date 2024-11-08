

const Client = () => {



    return (
        <main className="bg-white w-screen ">
            <section>
                <h1 className="text-[#0A0F29] lg:text-[24px] md:text-[24px] text-[20px] font-serif font-bold  text-center">
                    Join waitlist as a Client
                </h1>
                <div
                    className="  bg-white lg:w-[50%] md:w-[50%] w-[80%] mx-96 text-center p-8 lg:px-0 md:px-0 mt-4"

                >
                     <div className="lg:mx-24 md:mx-24 mx-auto">
                    <label className="block mt-4 mb-2 text-[14px] font-bold text-[#0A0F29]  text-left">
                        Company Name
                    </label>

                    <input
                        type="text"
                        placeholder="Enter your company name"
                        className="bg-white border border-[#0A0F29] text-[#696F8C]  text-[13px] font-bold rounded-lg focus:ring-[#0A0F29] focus:border-white block w-3/4 p-2.5 backdrop-blur-lg mb-4 outline-none"

                    />
                    </div>
                    <div className="lg:mx-24 md:mx-24 mx-auto">
                        <label className="block mt-4 mb-2 text-[14px] font-bold text-[#0A0F29]  text-left">
                            Email
                        </label>
                        <input
                            type="text"
                            placeholder="This is to notify you when the platform is live"
                            className="bg-white border border-[#0A0F29] text-[#696F8C]  text-[13px] font-bold rounded-lg focus:ring-[#0A0F29] focus:border-white block w-3/4 p-2.5 backdrop-blur-lg mb-4 outline-none"

                        />
                    </div>
                    <div className="lg:mx-24 md:mx-24 mx-auto">
                        <label className="block mt-4 mb-2 text-[14px] font-bold text-[#0A0F29] text-left">
                            Location
                        </label>
                        <input
                            type="text"
                            placeholder="E.g, Nigeria"
                            className="bg-white border border-[#0A0F29] text-[#696F8C]  text-sm font-bold rounded-lg focus:ring-[#0A0F29] focus:border-white block w-3/4 p-2.5 backdrop-blur-lg mb-4 outline-none"

                        />
                    </div>
                    <div className="lg:mx-24 md:mx-24 mx-auto">
                        <label className="block mt-4 mb-2 text-[14px] font-bold text-[#0A0F29] text-left">
                            Type of Talent Needed
                        </label>
                        <input
                            type="text"
                            placeholder="e.g., frontend developer, blockchain developer, etc"
                            className="bg-white border border-[#0A0F29] text-[#696F8C]  text-[13px] font-bold rounded-lg focus:ring-[#0A0F29] focus:border-white block w-3/4 p-2.5 backdrop-blur-lg mb-4 outline-none"

                        />
                    </div>
                    <div className="lg:mx-24 md:mx-24 mx-auto">
                        <label className="block mt-4 mb-2 text-[14px] font-bold text-[#0A0F29]  text-left">
                            Number of Positions
                        </label>
                        <input
                            type="text"
                            placeholder="How many positions are you hiring for?"
                            className="bg-white border border-[#0A0F29] text-[#696F8C]  text-[13px] font-bold rounded-lg focus:ring-[#0A0F29] focus:border-white block w-3/4 p-2.5 backdrop-blur-lg mb-4 outline-none"

                        />
                    </div>
                    <div className="lg:mx-24 md:mx-24 mx-auto">
                        <label className="block mt-4 mb-2 text-[14px] font-bold text-[#0A0F29]  text-left">
                            Job Type
                        </label>

                        <input
                            type="text"
                            placeholder="e.g., Full-time, Part-time, Freelance"
                            className="bg-white border border-[#0A0F29] text-[#696F8C]  text-[13px] font-bold rounded-lg focus:ring-[#0A0F29] focus:border-white block w-3/4 p-2.5 backdrop-blur-lg mb-4 outline-none"

                        />
                    </div>
                    <div className="lg:mx-24 md:mx-24 mx-auto">
                        <label className="block mt-4 mb-2 text-[14px] font-bold text-[#0A0F29] text-left">
                            Company’s Website URL (optional)
                        </label>

                        <input
                            type="text"
                            placeholder="Add your company’s URL"
                            className="bg-white border border-[#0A0F29] text-[#696F8C]  text-[13px] font-bold rounded-lg focus:ring-[#0A0F29] focus:border-white block w-3/4 p-2.5 backdrop-blur-lg mb-4 outline-none"

                        />
                    </div>
                    <div className="lg:mx-24 md:mx-24 mx-auto">
                        <label className="block mt-4 mb-2 text-[14px] font-bold text-[#0A0F29] text-left">
                            Payment option
                        </label>

                        <input
                            type="text"
                            placeholder="e.g USDT, Stellar, fiat currency"
                            className="bg-white border border-[#0A0F29] text-[#696F8C]  text-[13px] font-bold rounded-lg focus:ring-[#0A0F29] focus:border-white block w-3/4 p-2.5 backdrop-blur-lg mb-4 outline-none"

                        />
                    </div>
                    <div className="lg:mx-24 md:mx-24 mx-auto">
                        <label className="block mt-4 mb-2 text-[14px] font-bold text-[#0A0F29] text-left">
                            Additional Comments/Requirements
                        </label>

                        <input
                            type="text"
                            placeholder="Any other thing you would like to add"
                            className="bg-white border border-[#0A0F29] text-[#696F8C]  text-[13px] font-bold rounded-lg focus:ring-[#0A0F29] focus:border-white block w-3/4 p-2.5 backdrop-blur-lg mb-4 outline-none"

                        />
                          <button
                        className="bg-[#2F66F6]  text-white md:text-[20px] lg:text-[20px] text-[15px] font-bold rounded-lg focus:ring-[#0A0F29] focus:border-white block w-3/4 p-4 backdrop-blur-lg mb-4 outline-none"
                    >
                        Submit
                    </button>
                    </div>
                  
                </div>

            </section >
        </main >
    );
};

export default Client;
