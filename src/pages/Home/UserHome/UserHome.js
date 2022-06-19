/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function UserHome() {

    const renderJobs = () => {
        const jobs = ["1", "2"];
        return jobs.map((job, index) => {
            return (
                <div className="container px-5 py-5 mx-auto mt-10" key={index}>
                    <div className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                            </svg>
                        </div>
                        <div className="w-3/5 sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Job 1</h2>
                            <p className="leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Corrupti molestias illo, illum praesentium tempore obcaecati! Totam alias ducimus provident
                                cumque aliquid vero, quaerat eveniet aut doloribus, porro nihil asperiores exercitationem!</p>
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
                    </div>
                </div>
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
