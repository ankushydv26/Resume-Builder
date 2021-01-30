import React, { useContext } from 'react'
import {ResumeContext } from "../../Context/ResumeContext"

const HeaderOut = () => {
    const {content} = useContext(ResumeContext)
    console.log(content)
    return (
        <div>
            {content.name}
        </div>
    )
}

export default HeaderOut
