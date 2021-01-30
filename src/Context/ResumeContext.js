  
import React, { createContext, useState, useEffect } from "react";

export const ResumeContext = createContext();

const ResumeContextProvider = (props) => {
    const [content, setContent] = useState('');

    function updateHeadingData (data) {
        setContent({...content,heading:data})
    }
    

    return(
        <ResumeContext.Provider
      value={{
        content,
        updateHeadingData
        // control,
        // contentFake,
        // setContent,
        // updateHeaderData,
        // updateProfessionalData,
        // updateEducationData,
        // updateAdditionalData,
        // addFakeData,
        // removeFakeData,
      }}
    >
      {/* This refers to the children that this provider/components wraps. */}
      {props.children}
    </ResumeContext.Provider>
    
        );
        
}
 
export default ResumeContextProvider;