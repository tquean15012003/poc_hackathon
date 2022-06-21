/* eslint-disable jsx-a11y/anchor-is-valid */
import { useFormik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup';
import { addUserEducationAction, deleteEducationAction } from '../../../../redux/actions/UserActions';

export default function UserEducation() {

    const { userEducation, companyList } = useSelector(state => state.UserReducer)

    const dispatch = useDispatch()

    const renderEducation = () => {
        return userEducation.map((education, index) => {
            return (
                <div className="-my-8 divide-y-2 divide-gray-100" key={index}>
                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <span className="font-semibold title-font text-gray-700">{education?.level}</span>
                            {(education.claimID === "" || typeof education.claimID === "undefined" )? <span className="text-sm text-yellow-500">Pending review</span> : <span className="text-sm text-green-500">Verified</span>}
                        </div>
                        <div className="md:flex-grow">
                            <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{education?.name}</h2>
                            <p className="leading-relaxed">{education?.description}</p>
                            <a onClick={() => {
                                if (window.confirm("Are you sure to delete?")){
                                    dispatch(deleteEducationAction(education?.id))
                                }
                            }} className="cursor-pointer text-red-500 inline-flex items-center mt-4">Delete<span className="text-xl">X</span>
                            </a>
                        </div>
                    </div>
                </div>
            )
        })
    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            level: "",
            name: "",
            description: "",
            issuer: companyList[0]?.username,
        }
        ,
        validationSchema: Yup.object({
            level: Yup.string()
                .required('Required!'),
            name: Yup.string()
                .required('Required!'),
            description: Yup.string()
                .required('Required!'),
            issuer: Yup.string()
                .required('Required!')
        }),
        onSubmit: (values) => {
            console.log(values)
            dispatch(addUserEducationAction(values))
            formik.setFieldValue("level", "");
            formik.setFieldValue("name", "");
            formik.setFieldValue("description", "");
        }
    })

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
                <form onSubmit={formik.handleSubmit} className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalLong" tabIndex={-1} aria-labelledby="exampleModalLongLabel" aria-hidden="true">
                    <div className="modal-dialog relative w-auto pointer-events-none">
                        <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                                <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLongLabel">
                                    Add education
                                </h5>
                                <button type="button" className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="relative mb-4 px-3">
                                <label htmlFor="level" className="leading-7 text-sm text-gray-600">Level</label>
                                <input onChange={formik.handleChange} value={formik.values.level} onBlur={formik.handleBlur} type="text" id="level" name="level" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                {formik.touched.level && formik.errors.level ? (<div className="text-red-900"> {formik.errors.level}</div>) : null}
                            </div>
                            <div className="relative mb-4 px-3">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                <input onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                {formik.touched.name && formik.errors.name ? (<div className="text-red-900"> {formik.errors.name}</div>) : null}
                            </div>
                            <div className="relative mb-4 px-3">
                                <label htmlFor="description" className="leading-7 text-sm text-gray-600">Description</label>
                                <input onChange={formik.handleChange} value={formik.values.description} onBlur={formik.handleBlur} type="text" id="description" name="description" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                {formik.touched.description && formik.errors.description ? (<div className="text-red-900"> {formik.errors.description}</div>) : null}
                            </div>
                            <div className="relative mb-4 px-3">
                                <label htmlFor="issuer" className="leading-7 text-sm text-gray-600">Issuer</label>
                                <select onChange={formik.handleChange} value={formik.values.issuer} onBlur={formik.handleBlur} name="issuer" id="issuer" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                    {companyList.map((company, index) => {
                                        return(
                                        <option value={company.username} key={index}>{company.name}</option>
                                        )
                                    })}
                                </select>
                                {formik.touched.issuer && formik.errors.issuer ? (<div className="text-red-900"> {formik.errors.issuer}</div>) : null}
                            </div>
                            <div className="relative mb-4 px-3">By click "Add" button, you accept to share your VC if you are successfully issued with a VC</div>
                            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                                <button type="button" className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-dismiss="modal">
                                    Close
                                </button>
                                <button type="submit" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1" data-bs-dismiss="modal">
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            {/* Educations */}
            <div className="container px-5 py-12 mx-auto">
                {renderEducation()}
            </div>
        </section>
    )
}
