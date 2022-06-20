/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function UserEducation() {
    return (
        <section className="m-5 text-gray-600 body-font bg-gray-100 rounded-lg px-8 py-5 flex flex-col place-self-center">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <h2 className="mr-5 text-2xl font-semibold title-font text-gray-700">EDUCATION</h2>
                <button className="flex space-x-3 items-center px-2 py-2 bg-blue-500 hover:bg-blue-800 rounded-full" data-bs-toggle="modal" data-bs-target="#exampleModalLong">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                </button>
                {/* Modal */}
                <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalLong" tabIndex={-1} aria-labelledby="exampleModalLongLabel" aria-hidden="true">
                    <div className="modal-dialog relative w-auto pointer-events-none">
                        <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                                <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLongLabel">
                                    Add education
                                </h5>
                                <button type="button" className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="relative mb-4 px-3">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">School / University</label>
                                <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4 px-3">
                                <label htmlFor="degree" className="leading-7 text-sm text-gray-600">Degree</label>
                                <input type="text" id="degree" name="degree" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4 px-3">
                                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Additional details</label>
                                <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
                            </div>
                            <div className="relative mb-4 px-3">
                                <label htmlFor="issuer" className="leading-7 text-sm text-gray-600">Issuer</label>
                                <select name="issuer" id="issuer" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                    <option value="user">CompA</option>
                                    <option value="company">UniB</option>
                                    <option value="admin">SC</option>
                                </select>
                            </div>
                            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                                <button type="button" className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-dismiss="modal">
                                    Close
                                </button>
                                <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Educations */}
            <div className="container px-5 py-12 mx-auto">
                <div className="-my-8 divide-y-2 divide-gray-100">
                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <span className="font-semibold title-font text-gray-700">University</span>
                            <span className="text-sm text-green-500">Verified</span>
                        </div>
                        <div className="md:flex-grow">
                            <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Nanyang Technological University</h2>
                            <p className="leading-relaxed">Bachelor of Engineering, Computer Science</p>
                            <a className="text-blue-500 inline-flex items-center mt-4">Edit
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
