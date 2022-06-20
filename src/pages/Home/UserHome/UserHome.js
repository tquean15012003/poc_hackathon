/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function UserHome() {

    const renderJobs = () => {
        const jobs = ["1"];
        return jobs.map((job, index) => {
            return (
                <>
                    <div className="container px-5 py-5 mx-auto mt-10" key={index}>
                        <div className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                            <div className="w-3/5 sm:text-left text-center ml-20 mt-6 sm:mt-0">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Junior Software Engineer, Gookgle</h2>
                                <p className="leading-relaxed text-base"><ul>
                                    <li>Description: Develop software using AI</li>
                                    <li>Skills: C++, Java, Python</li>
                                </ul></p>
                                <a className="mt-3 text-blue-500 inline-flex items-center">View details
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>

                            <div className="mx-10 sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <p>Match</p>
                            </div>
                            <div>
                                <button type="button" className="mx-10 sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-white font-medium text-xs leading-tight uppercase shadow-md bg-blue-500 hover:bg-blue-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#applyModal">Apply</button>
                                {/* Modal */}
                                <form className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="applyModal" tabIndex={-1} aria-labelledby="exampleModalLongLabel" aria-hidden="true">
                                    <div className="modal-dialog relative w-auto pointer-events-none">
                                        <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                                            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                                                <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLongLabel">
                                                    Apply
                                                </h5>
                                                <button type="button" className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="modal" aria-label="Close" />
                                            </div>
                                            <div className="relative mb-4 px-3">
                                                <label htmlFor="sends" className="leading-7 text-sm text-gray-600">What would you like to share?</label>
                                                <div>
                                                    <div className="form-check">
                                                        <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" defaultValue id="flexCheckDefault" />
                                                        <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckDefault">
                                                            Contact information
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
                                                        <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckChecked">
                                                            Profile
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative mb-4 px-3">
                                                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Additional details</label>
                                                <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
                                            </div>
                                            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                                                <button type="button" className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-dismiss="modal">
                                                    Close
                                                </button>
                                                <button type="submit" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1" data-bs-dismiss="modal">
                                                    Apply
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="container px-5 py-5 mx-auto mt-3" key={index}>
                        <div className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                            <div className="w-3/5 sm:text-left text-center ml-20 mt-6 sm:mt-0">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">AI Engineer, Meta-strat</h2>
                                <p className="leading-relaxed text-base"><ul>
                                    <li>Description: Maintain our AI systems</li>
                                    <li>Skills: Python, AI, Math</li>
                                </ul></p>
                                <a className="mt-3 text-blue-500 inline-flex items-center">View details
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>

                            <div className="mx-10 sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <p>Match</p>
                            </div>
                            <div>
                                <button type="button" className="mx-10 sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-white font-medium text-xs leading-tight uppercase shadow-md bg-blue-500 hover:bg-blue-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#applyModal">Apply</button>
                                {/* Modal */}
                                <form className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="applyModal" tabIndex={-1} aria-labelledby="exampleModalLongLabel" aria-hidden="true">
                                    <div className="modal-dialog relative w-auto pointer-events-none">
                                        <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                                            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                                                <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLongLabel">
                                                    Apply
                                                </h5>
                                                <button type="button" className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="modal" aria-label="Close" />
                                            </div>
                                            <div className="relative mb-4 px-3">
                                                <label htmlFor="sends" className="leading-7 text-sm text-gray-600">What would you like to share?</label>
                                                <div>
                                                    <div className="form-check">
                                                        <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" defaultValue id="flexCheckDefault" />
                                                        <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckDefault">
                                                            Contact information
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
                                                        <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckChecked">
                                                            Profile
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative mb-4 px-3">
                                                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Additional details</label>
                                                <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
                                            </div>
                                            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                                                <button type="button" className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-dismiss="modal">
                                                    Close
                                                </button>
                                                <button type="submit" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1" data-bs-dismiss="modal">
                                                    Apply
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="container px-5 py-5 mx-auto mt-3" key={index}>
                        <div className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-0 border-gray-200 sm:flex-row flex-col">
                            <div className="w-3/5 sm:text-left text-center ml-20 mt-6 sm:mt-0">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Delivery Driver, Shopers</h2>
                                <p className="leading-relaxed text-base"><ul>
                                    <li>Delivery goods to customers</li>
                                    <li>Skills: Communication, Driving</li>
                                </ul></p>
                                <a className="mt-3 text-blue-500 inline-flex items-center">View details
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>

                            <div className="mx-10 sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                                <p>Not Match</p>
                            </div>
                            <div>
                                <button type="button" className="mx-10 sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-white font-medium text-xs leading-tight uppercase shadow-md bg-blue-500 hover:bg-blue-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#applyModal">Apply</button>
                                {/* Modal */}
                                <form className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="applyModal" tabIndex={-1} aria-labelledby="exampleModalLongLabel" aria-hidden="true">
                                    <div className="modal-dialog relative w-auto pointer-events-none">
                                        <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                                            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                                                <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLongLabel">
                                                    Apply
                                                </h5>
                                                <button type="button" className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="modal" aria-label="Close" />
                                            </div>
                                            <div className="relative mb-4 px-3">
                                                <label htmlFor="sends" className="leading-7 text-sm text-gray-600">What would you like to share?</label>
                                                <div>
                                                    <div className="form-check">
                                                        <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" defaultValue id="flexCheckDefault" />
                                                        <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckDefault">
                                                            Contact information
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
                                                        <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckChecked">
                                                            Profile
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative mb-4 px-3">
                                                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Additional details</label>
                                                <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
                                            </div>
                                            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                                                <button type="button" className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-dismiss="modal">
                                                    Close
                                                </button>
                                                <button type="submit" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1" data-bs-dismiss="modal">
                                                    Apply
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            )
        })
    }

    return (
        <div>
            <h1 className="mt-10 sm:text-3xl text-2xl font-medium title-font text-center text-blue-900">Your Job Recommendations
            </h1>
            <section className="text-gray-600 body-font">
                {renderJobs()}
            </section>
        </div>
    )
}