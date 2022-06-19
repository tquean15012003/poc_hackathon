import React from 'react'

export default function CompanyManagement() {
  return (
    <>
      <div>
        <h1 className="mt-10 mb-10 sm:text-3xl text-2xl font-medium title-font text-center text-red-900">Management</h1>
        <ul className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tab" role="tablist">
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
        <div className="tab-content" id="tabs-tabContent">
          <div className="tab-pane fade show active" id="tabs-1" role="tabpanel" aria-labelledby="tabs-1-tab">
            Tab 1 content
          </div>
          <div className="tab-pane fade" id="tabs-2" role="tabpanel" aria-labelledby="tabs-2-tab">
            Tab 2 content
          </div>
          <div className="tab-pane fade" id="tabs-messages" role="tabpanel" aria-labelledby="tabs-profile-tab">
            Tab 3 content
          </div>
        </div>
      </div>

    </>
  )
}
