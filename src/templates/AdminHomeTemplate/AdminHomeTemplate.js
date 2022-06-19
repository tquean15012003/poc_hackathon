import React from 'react'
import AdminHomeFooter from './AdminHomeFooter/AdminHomeFooter'
import AdminHomeHeader from './AdminHomeHeader/AdminHomeHeader'

export default function AdminHomeTemplate(props) {
    const { Component } = props

    return (
        <>
            <AdminHomeHeader />
            <Component />
            <AdminHomeFooter />
        </>
    )
}