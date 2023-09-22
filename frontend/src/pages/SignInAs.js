import React from 'react'

import lawyer from "../assets/images/lawyer.svg"

import "../assets/css/SignInAs.css"
import RoundedBtn from '../components/RoundedBtn'

const SignInAs = () => {
    const signInAsData = [
        {
            image: lawyer,
            text: "User"
        },
        {
            image: lawyer,
            text: "Lawyer"
        },
        {
            image: lawyer,
            text: "Judge"
        }
    ]
    return (
        <>
            <div className='sInAsMainContainer'>
                <h1 className="sInAsHeading">Sign In As</h1>
                <div className='flexContainer'>
                    {
                        signInAsData.map((val) => {
                            return (
                                <div className='alignCenter'>
                                    <div className='signInAsContainer'>
                                        <img src={val.image} alt="User" className='sInAsImg' />
                                        <h1 className='sInAs'>{val.text}</h1>
                                    </div>
                                    <div className="btnContainer">
                                        <RoundedBtn>Sign In</RoundedBtn>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </>
    )
}

export default SignInAs
