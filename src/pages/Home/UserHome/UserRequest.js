/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function UserRequest() {
    return (
        <div>
            <h1 className="mt-10 mb-10 sm:text-3xl text-2xl font-medium title-font text-center text-blue-900">Your Requests </h1>
            <div className="accordion mx-10" id="accordionExample">
                <div className="accordion-item bg-white border border-gray-200">
                    <h2 className="accordion-header mb-0" id="headingOne">
                        <button className="accordion-button relative flex items-center w-full py-4 px-5 text-base text-blue-500 text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Requests received
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body py-4 px-5">
                            <div className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                                <div className="w-3/5 sm:text-left text-center mt-6 sm:mt-0">
                                    <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Object 1</h2>
                                    <p className="leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit.
                                        Corrupti molestias illo, illum praesentium tempore obcaecati! Totam alias ducimus
                                        provident
                                        cumque aliquid vero, quaerat eveniet aut doloribus, porro nihil asperiores
                                        exercitationem!</p>
                                    <a className="mt-3 text-blue-500 inline-flex items-center">View details
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                                <button className="flex space-x-3 mx-3 items-center px-5 py-5 bg-green-500 hover:bg-green-800 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                <button className="flex space-x-3 items-center px-5 py-5 bg-red-500 hover:bg-red-800 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item bg-white border border-gray-200">
                    <h2 className="accordion-header mb-0" id="headingTwo">
                        <button className="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-blue-500 text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Requests sent
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body py-4 px-5">
                            <div className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                                <div className="w-3/5 sm:text-left text-center mt-6 sm:mt-0">
                                    <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Request 1</h2>
                                    <p className="leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit.
                                        Corrupti molestias illo, illum praesentium tempore obcaecati! Totam alias ducimus
                                        provident
                                        cumque aliquid vero, quaerat eveniet aut doloribus, porro nihil asperiores
                                        exercitationem!</p>
                                    <a className="mt-3 text-blue-500 inline-flex items-center">View details
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                                <div>
                                    <h3>Status</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
