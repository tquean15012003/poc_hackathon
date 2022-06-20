import React from 'react'

export default function CompanyManagement() {
  return (
    <>
      <div>
        <h1 className="mt-10 mb-10 sm:text-3xl text-2xl font-medium title-font text-center text-red-900">Management</h1>
        <ul className="nav nav-tabs mx-5 flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <a href="#tabs-1" className="nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent active" id="tabs-1-tab" data-bs-toggle="pill" data-bs-target="#tabs-1" role="tab" aria-controls="tabs-1" aria-selected="true">Program Department</a>
          </li>
          <li className="nav-item" role="presentation">
            <a href="#tabs-2" className="nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent" id="tabs-2-tab" data-bs-toggle="pill" data-bs-target="#tabs-2" role="tab" aria-controls="tabs-2" aria-selected="false">Liaison Department</a>
          </li>
          <li className="nav-item" role="presentation">
            <a href="#tabs-messages" className="nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent" id="tabs-messages-tab" data-bs-toggle="pill" data-bs-target="#tabs-messages" role="tab" aria-controls="tabs-messages" aria-selected="false">Media Department</a>
          </li>
        </ul>
        <div className="tab-content mx-5" id="tabs-tabContent">
          <div className="tab-pane fade show active" id="tabs-1" role="tabpanel" aria-labelledby="tabs-1-tab">
            <div className="container px-5 py-5 mx-auto mt-10">
              <div className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                <div className="w-3/5 sm:text-left text-center ml-20 mt-6 sm:mt-0">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Rosalia Northill</h2>
                  <p className="leading-relaxed text-base"><ul>
                    <li>Position: Backend Intern</li>
                    <li>Salary: $1000</li>
                  </ul></p>
                </div>
                <div>
                  <button type="button" className=" inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md bg-red-500 hover:bg-red-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">View and Edit</button>
                </div>
                <div>
                  <button type="button" className=" ml-5 inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md bg-red-500 hover:bg-red-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Remove</button>
                </div>
              </div>
              <div className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                <div className="w-3/5 sm:text-left text-center ml-20 mt-6 sm:mt-0">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Diona Banjan</h2>
                  <p className="leading-relaxed text-base"><ul>
                    <li>Position: Senior Software Engineer</li>
                    <li>Salary: $6000</li>
                  </ul></p>
                </div>
                <div>
                  <button type="button" className=" inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md bg-red-500 hover:bg-red-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">View and Edit</button>
                </div>
                <div>
                  <button type="button" className=" ml-5 inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md bg-red-500 hover:bg-red-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Remove</button>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="tabs-2" role="tabpanel" aria-labelledby="tabs-2-tab">
            <div className="container px-5 py-5 mx-auto mt-10">
              <div className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                <div className="w-3/5 sm:text-left text-center ml-20 mt-6 sm:mt-0">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Diluc Tamarind</h2>
                  <p className="leading-relaxed text-base"><ul>
                    <li>Position: Communication Manager</li>
                    <li>Salary: $6500</li>
                  </ul></p>
                </div>
                <div>
                  <button type="button" className=" inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md bg-red-500 hover:bg-red-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">View and Edit</button>
                </div>
                <div>
                  <button type="button" className=" ml-5 inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md bg-red-500 hover:bg-red-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Remove</button>
                </div>
              </div>
              <div className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                <div className="w-3/5 sm:text-left text-center ml-20 mt-6 sm:mt-0">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Jane Tanjong</h2>
                  <p className="leading-relaxed text-base"><ul>
                    <li>Position: Marketing Leader</li>
                    <li>Salary: $7000</li>
                  </ul></p>
                </div>
                <div>
                  <button type="button" className=" inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md bg-red-500 hover:bg-red-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">View and Edit</button>
                </div>
                <div>
                  <button type="button" className=" ml-5 inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md bg-red-500 hover:bg-red-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Remove</button>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="tabs-messages" role="tabpanel" aria-labelledby="tabs-profile-tab">
            <div className="container px-5 py-5 mx-auto mt-10">
              <div className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                <div className="w-3/5 sm:text-left text-center ml-20 mt-6 sm:mt-0">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Yoimiya Bugis</h2>
                  <p className="leading-relaxed text-base"><ul>
                    <li>Position: Copywriter Intern</li>
                    <li>Salary: $800</li>
                  </ul></p>
                </div>
                <div>
                  <button type="button" className=" inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md bg-red-500 hover:bg-red-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">View and Edit</button>
                </div>
                <div>
                  <button type="button" className=" ml-5 inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md bg-red-500 hover:bg-red-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Remove</button>
                </div>
              </div>
              <div className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                <div className="w-3/5 sm:text-left text-center ml-20 mt-6 sm:mt-0">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Xiangling Jurong</h2>
                  <p className="leading-relaxed text-base"><ul>
                    <li>Position: Head of Media</li>
                    <li>Salary: $5500</li>
                  </ul></p>
                </div>
                <div>
                  <button type="button" className=" inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md bg-red-500 hover:bg-red-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">View and Edit</button>
                </div>
                <div>
                  <button type="button" className=" ml-5 inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md bg-red-500 hover:bg-red-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Remove</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
