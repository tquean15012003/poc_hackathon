import React from 'react'
import CompanyHomeFooter from './CompanyHomeFooter/CompanyHomeFooter'
import CompanyHomeHeader from './CompanyHomeHeader/CompanyHomeHeader'

export default function CompanyHomeTemplate(props) {
    const { Component } = props

    return (
        <>
            <CompanyHomeHeader />
            <Component />
            <CompanyHomeFooter />
        </>
    )
}
