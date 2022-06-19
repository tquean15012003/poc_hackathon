/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function UserProfile() {
    return (
        <div>
            <h1 className="mt-10 sm:text-3xl font-medium title-font text-center text-blue-900">Your Profile</h1>
            {/* INFORMATION */}
            <section className="m-5 text-gray-600 body-font bg-gray-100 rounded-lg px-8 py-5 flex flex-col place-self-center">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <h2 className="mr-5 text-2xl font-semibold title-font text-gray-700">INFORMATION</h2>
                    <button className="flex space-x-3 items-center px-2 py-2 bg-blue-500 hover:bg-blue-800 rounded-full" data-bs-toggle="modal" data-bs-target="#infoModal">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                    </button>
                </div>
                {/* Modal */}
                <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="infoModal" tabIndex={-1} aria-labelledby="exampleModalLongLabel" aria-hidden="true">
                    <div className="modal-dialog relative w-auto pointer-events-none">
                        <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                                <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLongLabel">
                                    Edit information
                                </h5>
                                <button type="button" className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="relative mb-4 px-3">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4 px-3">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Contact</label>
                                <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4 px-3">
                                <label htmlFor="location" className="leading-7 text-sm text-gray-600">Location</label>
                                <input type="text" id="location" name="location" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                                <button type="button" className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-dismiss="modal">
                                    Close
                                </button>
                                <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
                                    Edit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container px-5 py-24 mx-auto">
                    <div className="-my-8 divide-y-2 divide-gray-100">
                        <div className="py-8 flex flex-wrap md:flex-nowrap">
                            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <span className="font-semibold title-font text-gray-700">Basic Information</span>
                                <span className="text-sm text-green-500">Verified</span>
                            </div>
                            <div className="md:flex-grow">
                                <div className="mb-2">
                                    <h3 className="text-xl font-medium text-gray-900 title-font mb-2">Name</h3>
                                    <p className="leading-relaxed">Johnny Dang</p>
                                </div>
                                <div className="mb-2">
                                    <h3 className="text-xl font-medium text-gray-900 title-font mb-2">Contact</h3>
                                    <p className="leading-relaxed">johndang@gmail.com</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-gray-900 title-font mb-2">Location</h3>
                                    <p className="leading-relaxed">Singapore</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* EDUCATION */}
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
                <div className="container px-5 py-24 mx-auto">
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
            {/* SKILLS */}
            <section className="m-5 text-gray-600 body-font bg-gray-100 rounded-lg px-8 py-5 flex flex-col place-self-center">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <h2 className="mr-5 text-2xl font-semibold title-font text-gray-700">SKILLS</h2>
                    <button className="flex space-x-3 items-center px-2 py-2 bg-blue-500 hover:bg-blue-800 rounded-full" data-bs-toggle="modal" data-bs-target="#skillModal">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
                            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                    </button>
                    {/* Modal */}
                    <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="skillModal" tabIndex={-1} aria-labelledby="exampleModalLongLabel" aria-hidden="true">
                        <div className="modal-dialog relative w-auto pointer-events-none">
                            <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                                <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                                    <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLongLabel">
                                        Add skill
                                    </h5>
                                    <button type="button" className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="relative mb-4 px-3">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Skill</label>
                                    <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <div className="relative mb-4 px-3">
                                    <label htmlFor="level" className="leading-7 text-sm text-gray-600">Level</label>
                                    <select name="level" id="level" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
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
                {/* Skills */}
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-auto gap-3">
                        <div class="flex justify-center">
                            <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                                <h5 class="text-gray-900 text-lg leading-tight font-medium mb-2">Python</h5>
                                <p class="text-gray-700 text-sm mb-4">
                                    Level 3 (verified)
                                </p>
                                <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Edit</button>
                            </div>
                        </div>
                        <div class="flex justify-center">
                            <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                                <h5 class="text-gray-900 text-lg leading-tight font-medium mb-2">C++</h5>
                                <p class="text-gray-700 text-sm mb-4">
                                    Level 2 (verified)
                                </p>
                                <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Edit</button>
                            </div>
                        </div>
                        <div class="flex justify-center">
                            <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                                <h5 class="text-gray-900 text-lg leading-tight font-medium mb-2">Java</h5>
                                <p class="text-gray-700 text-sm mb-4">
                                    Level 4 (not verified)
                                </p>
                                <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Edit</button>
                            </div>
                        </div>
                        <div class="flex justify-center">
                            <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                                <h5 class="text-gray-900 text-lg leading-tight font-medium mb-2">Business Administrator</h5>
                                <p class="text-gray-700 text-sm mb-4">
                                    Level 1 (verified)
                                </p>
                                <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* EXPERIENCE */}
            <section className="m-5 text-gray-600 body-font bg-gray-100 rounded-lg px-8 py-5 flex flex-col place-self-center">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <h2 className="mr-5 text-2xl font-semibold title-font text-gray-700">EXPERIENCE</h2>
                    <button className="flex space-x-3 items-center px-2 py-2 bg-blue-500 hover:bg-blue-800 rounded-full" data-bs-toggle="modal" data-bs-target="#experienceModal">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
                            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                    </button>
                    {/* Modal */}
                    <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="experienceModal" tabIndex={-1} aria-labelledby="exampleModalLongLabel" aria-hidden="true">
                        <div className="modal-dialog relative w-auto pointer-events-none">
                            <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                                <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                                    <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLongLabel">
                                        Add experience
                                    </h5>
                                    <button type="button" className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="relative mb-4 px-3">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Organization</label>
                                    <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <div className="relative mb-4 px-3">
                                    <label htmlFor="pos" className="leading-7 text-sm text-gray-600">Position</label>
                                    <input type="text" id="pos" name="pos" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <div className="relative mb-4 px-3">
                                    <label htmlFor="time" className="leading-7 text-sm text-gray-600">Period</label>
                                    <input type="text" id="time" name="time" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
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
                {/* Experiences */}
                <div className="container px-5 py-24 mx-auto">
                    <div className="-my-8 divide-y-2 divide-gray-100">
                        <div className="py-8 flex flex-wrap md:flex-nowrap">
                            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <span className="font-semibold title-font text-gray-700">Software Engineer Intern</span>
                                <span className="text-gray-700">Jan 2022 — May 2022</span>
                                <span className="text-sm text-green-500">Verified</span>
                            </div>
                            <div className="md:flex-grow">
                                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Apple</h2>
                                <p className="leading-relaxed">Intern in year 3 to gain experience from Apple.</p>
                                <a className="text-blue-500 inline-flex items-center mt-4">Edit
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="py-8 flex flex-wrap md:flex-nowrap">
                            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <span className="font-semibold title-font text-gray-700">Undergraduate Researcher</span>
                                <span className="text-gray-700">Aug 2021 — Present</span>
                                <span className="text-sm text-green-500">Verified</span>
                            </div>
                            <div className="md:flex-grow">
                                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">NTU-NLP Research Group</h2>
                                <p className="leading-relaxed">Researching on summary generation and question answering based on chart input without underlying data table and conducted literature review for chart information reasoning such as PlotQA.
                                    Published a paper as co-author on ACL 2022.
                                </p>
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
        </div>
    )
}
