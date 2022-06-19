/* eslint-disable no-unused-vars */
import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Register() {

  const { navigate } = useSelector(state => state.NavigateReducer)

  const dispatch = useDispatch();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      username: "",
      password: "",
      passwordConfirmation: "",
      domain: "user",
      name: ""
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required('Required!')
        .min(8, 'Username must contain at least 8 characters!')
        .max(50, 'Username must contain at most 8 characters!'),
      password: Yup.string()
        .required('Required!'),
      passwordConfirmation: Yup.string()
        .required('Required!')
        .oneOf([Yup.ref('password'), null], 'Password must match'),
      domain: Yup.string()
        .required('Required!'),
      name: Yup.string()
        .required('Required!')
        .max(50, 'Name must contain at most 50 characters!!')
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <h1 className="pt-3 text-6xl font-mono font-bold text-center text-yellow-500">SIGN UP TO <i>1235!</i></h1>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col px-5 pt-8 justify-center items-center">
          <div className="lg:w-2/5 bg-gray-100 rounded-lg p-8 flex flex-col place-self-center">
            {/* Sign Up */}
            <div className="relative mb-4">
              <label htmlFor="username" className="leading-6 text-sm text-gray-600">Username</label>
              <input onChange={formik.handleChange} value={formik.values.username} onBlur={formik.handleBlur} type="username" id="username" name="username" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              {formik.touched.username && formik.errors.username ? (<div className="text-red-900"> {formik.errors.username}</div>) : null}
            </div>
            <div className="relative mb-4">
              <label htmlFor="password" className="leading-6 text-sm text-gray-600">Password</label>
              <input onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              {formik.touched.password && formik.errors.password ? (<div className="text-red-900"> {formik.errors.password}</div>) : null}
            </div>
            <div className="relative mb-4">
              <label htmlFor="passwordConfirmation" className="leading-6 text-sm text-gray-600">Password Confirmation</label>
              <input onChange={formik.handleChange} value={formik.values.passwordConfirmation} onBlur={formik.handleBlur} type="password" id="passwordConfirmation" name="passwordConfirmation" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation ? (<div className="text-red-900"> {formik.errors.passwordConfirmation}</div>) : null}
            </div>
            <div className="relative mb-4">
              <label htmlFor="domain" className="leading-6 text-sm text-gray-600">Domain</label>
              <select onChange={formik.handleChange} value={formik.values.domain} onBlur={formik.handleBlur} name="domain" id="domain" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                <option value="user">User</option>
                <option value="company">Company</option>
              </select>
              {formik.touched.domain && formik.errors.domain ? (<div className="text-red-900"> {formik.errors.domain}</div>) : null}
            </div>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-6 text-sm text-gray-600">Name</label>
              <input onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} type="name" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              {formik.touched.name && formik.errors.name ? (<div className="text-red-900"> {formik.errors.name}</div>) : null}
            </div>
            <button className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg" type="submit">Sign up</button>
            {/*Back To Log in*/}
            <p className="text-xs text-gray-500 mt-3 mb-2 text-center"><i>Already have an account?</i></p>
            <div />
            <button onClick={() => {
              navigate("/login", { replace: false })
            }} className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-800 rounded text-lg" type="button">
              Back to Log In
            </button>
          </div>
        </div>
      </section>
    </form >
  )
}
