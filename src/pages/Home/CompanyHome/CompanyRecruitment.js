/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function CompanyRecruitment() {
  return (
    <div>
      {/* add job posting */}
      <div className="container mx-auto mt-10 mb-0 flex p-5 flex-row items-center">
        <a href className="flex flex-row mx-auto items-center">
          <div><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="brown" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg></div>
          <div><span className="text-xl font-medium title-font text-red-900">Add job post</span></div>
        </a>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0 justify-center items-center">
              <h2 className="text-gray-900 text-lg text-center title-font font-medium mb-2">Digital Marketer</h2>
              <div className="flex flex-row gap-3 eading-relaxed text-base justify-center">
                <div>Full Time</div>
                <div>Singapore</div>
                <div>$3500-$4000</div>
              </div>
              <div class="flex justify-center">
                <a href="/viewApplicants" className="mt-3 text-red-500 inline-flex items-center">View Applications
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0 justify-center items-center">
              <h2 className="text-gray-900 text-lg text-center title-font font-medium mb-2">Junior Software Engineer</h2>
              <div className="flex flex-row gap-3 eading-relaxed text-base justify-center">
                <div>Full Time</div>
                <div>Singapore</div>
                <div>$4500-$5000</div>
              </div>
              <div class="flex justify-center">
                <a href="/viewApplicants" className="mt-3 text-red-500 inline-flex items-center">View Applications
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0 justify-center items-center">
              <h2 className="text-gray-900 text-lg text-center title-font font-medium mb-2">Senior Software Engineer</h2>
              <div className="flex flex-row gap-3 eading-relaxed text-base justify-center">
                <div>Full Time</div>
                <div>Singapore</div>
                <div>$6500-$7000</div>
              </div>
              <div class="flex justify-center">
                <a href="/viewApplicants" className="mt-3 text-red-500 inline-flex items-center">View Applications
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0 justify-center items-center">
              <h2 className="text-gray-900 text-lg text-center title-font font-medium mb-2">CEO</h2>
              <div className="flex flex-row gap-3 eading-relaxed text-base justify-center">
                <div>Full Time</div>
                <div>Singapore</div>
                <div>$10500-$11000</div>
              </div>
              <div class="flex justify-center">
                <a href="/viewApplicants" className="mt-3 text-red-500 inline-flex items-center">View Applications
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
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
