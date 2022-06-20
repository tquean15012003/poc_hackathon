/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function CompanyHome() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Welcome back X,</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Here are some of your company's statistics on
                        1235!</p>
                </div>
                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-red-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                <circle cx={9} cy={7} r={4} />
                                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
                            </svg>
                            <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                            <p className="leading-relaxed">Employees</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-red-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                <path d="M8 17l4 4 4-4m-4-5v9" />
                                <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29" />
                            </svg>
                            <h2 className="title-font font-medium text-3xl text-gray-900">4</h2>
                            <p className="leading-relaxed">Job Posts</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-red-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                <circle cx={9} cy={7} r={4} />
                                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
                            </svg>
                            <h2 className="title-font font-medium text-3xl text-gray-900">74</h2>
                            <p className="leading-relaxed">Applicants</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-red-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                            <h2 className="title-font font-medium text-3xl text-gray-900">46</h2>
                            <p className="leading-relaxed">Verify requests</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
