import React from 'react'
import Background from '../../assets/images/user_background.jpg';

export default function UserTemplate(props) {
    const { Component } = props
    return (
        <div style={{
            backgroundImage: `url(${Background})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="bg-black/20 w-screen h-screen text-white flex justify-center items-center">
                <Component />
            </div>
        </div>

    )
}
