/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { logInInAction } from '../../redux/actions/LogInAction';

export default function Login() {

  const { navigate } = useSelector(state => state.NavigateReducer)

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      type: "user",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required('Required!'),
      password: Yup.string()
        .required('Required!'),
      type: Yup.string()
        .required('Required!')
    }),
    onSubmit: (values) => {
      dispatch(logInInAction(values))
    }
  })

  useEffect(() => {
  }, [])

  return (
      <form onSubmit={formik.handleSubmit}>
        <h1 className="pt-3 text-6xl font-mono font-bold text-center text-yellow-500">WELCOME TO <i>1235!</i></h1>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-col px-5 pt-24 justify-center items-center">
            <div className="lg:w-2/5 bg-gray-100 rounded-lg p-8 flex flex-col place-self-center">
              {/* Log In */}
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
                <label htmlFor="type" className="leading-6 text-sm text-gray-600">Domain</label>
                <select onChange={formik.handleChange} value={formik.values.type} onBlur={formik.handleBlur} name="type" id="type" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                  <option value="user">User</option>
                  <option value="company">Company</option>
                  <option value="admin">Admin</option>
                </select>
                {formik.touched.type && formik.errors.type ? (<div className="text-red-900"> {formik.errors.type}</div>) : null}
              </div>
              <button type="submit" className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Log In</button>
              {/* Sign up */}
              <p className="text-xs text-gray-500 mt-3 mb-2 text-center"><i>Not registered?</i></p>
              <div />
              <button onClick={() => {
                navigate("/register", { replace: false })
              }} className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-800 rounded text-lg" type="button">
                Sign Up
              </button>
            </div>
          </div>
        </section>
      </form>
  )
}
