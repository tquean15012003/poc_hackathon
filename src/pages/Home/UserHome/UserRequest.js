/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getRequestReceivedAction, getRequestSentAction, rejectRequestAction } from '../../../redux/actions/UserActions';
import _ from 'lodash';

export default function UserRequest() {

    const { user, requestReceivedList, requestSentList } = useSelector(state => state.UserReducer);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getRequestReceivedAction(user.id))
        dispatch(getRequestSentAction(user.id))
    }, [])

    const renderRequestHeader = (request) => {
        return (
            <h2 className="text-gray-900 text-2xl font-bold title-font mb-2">{_.capitalize(request.requestType)}</h2>
        )
    }

    const renderRequestInfo = (request) => {
        return Object.keys(JSON.parse(request.data)).map((item, index) => {
            if (item !== "issuer") {
                return (
                    <p className="leading-relaxed text-base" key={index}><span className="font-bold">{_.capitalize(item)}:</span> {JSON.parse(request.data)[item]}</p>
                )
            }
            return (<></>)
        })

    }

    const renderRequestReceived = () => {
        return requestReceivedList.map((request, index) => {
            return (
                <div className="accordion-body py-4 px-5" key={index}>
                    <div className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                        <div className="w-3/5 sm:text-left text-center mt-6 sm:mt-0">
                            {renderRequestHeader(request)}
                            {renderRequestInfo(request)}
                        </div>
                        {request.isdone === "false" ?
                            <>
                                <button className="flex space-x-3 mx-3 items-center px-5 py-5 bg-green-500 hover:bg-green-800 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                <button onClick={() => {
                                    dispatch(rejectRequestAction(request))
                                }} className="flex space-x-3 items-center px-5 py-5 bg-red-500 hover:bg-red-800 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </> : (request.claimID === "" ?
                                <button disabled className="flex space-x-3 items-center px-5 py-5 bg-red-500 hover:bg-red-800 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                :
                                <button disabled className="flex space-x-3 mx-3 items-center px-5 py-5 bg-green-500 hover:bg-green-800 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            )}
                    </div>
                </div>
            )
        })
    }

    const renderRequestSent = () => {
        return requestSentList.map((request, index) => {
            return (
                <div className="accordion-body py-4 px-5" key={index}>
                    <div className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                        <div className="w-3/5 sm:text-left text-center mt-6 sm:mt-0">
                            {renderRequestHeader(request)}
                            {renderRequestInfo(request)}
                        </div>
                        <div>
                            {request.isdone === "false" ? <h3 className="text-yellow-500">Pending review</h3> : (request.claimID === "" ? <h3 className="text-red-500">Rejected</h3> : <h3 className="text-green-500">Approved</h3>)}
                        </div>
                    </div>
                </div>
            )
        })
    }

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
                        {renderRequestReceived()}
                    </div>
                </div>
                <div className="accordion-item bg-white border border-gray-200">
                    <h2 className="accordion-header mb-0" id="headingTwo">
                        <button className="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-blue-500 text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Requests sent
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        {renderRequestSent()}
                    </div>
                </div>
            </div>
        </div>
    )
}
