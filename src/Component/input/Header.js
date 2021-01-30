import React, { useContext } from 'react';
import {TextField} from "@material-ui/core"
import {useForm } from "react-hook-form";
import { ResumeContext} from "../../Context/ResumeContext"

const Header = () => {
    // const { content, updateHeadingData } = useContext(
    //     ResumeContext
    //   );
    const {content, updateHeadingData} = useContext(ResumeContext)
    const {register, handleSubmit} = useForm();
    const onSubmit =(data) =>{
        updateHeadingData(data)
    }
    return (
       <>
         <form noValidate autoComplete="off">
             <TextField
             label="name"
             id="filled-basic"
             name="name"
             defaultValue={content.heading}
             inputRef={register}
             onChange={handleSubmit(onSubmit)}
             />

         </form>
       </>
    )
}

export default Header
