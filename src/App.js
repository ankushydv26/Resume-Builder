import React, { Component } from 'react'
import Resume  from "./Resume"
import {Grid,Input} from "@material-ui/core"



 class App extends Component {
     constructor(props){
         super(props)
         this.state ={
             el:'',
             role:'',
             address:'',
             city:'',
             phone:'',
             email:'',
             about:''
         }
     }
     
    render() {
        const {el,role,address,city, phone,email,about} = this.state;
        
        return (
            <>
               <main className="main" style={{flexGrow:'1'}}>
               <Grid container spacing={3} style={{width:'100wh'}}>
                   <Grid item sm={12} md={4}>
                   <h2> Heading</h2>
                   <Input className="box" type="text" name="name" placeholder="name" onChange={(e) =>  this.setState({el: e.target.value})}/><br></br>
                   <Input className="box" type="text" name="name" placeholder="role" onChange={(e) =>  this.setState({role: e.target.value})}/><br></br>
                   <Input className="box" type="text" name="name" placeholder="address" onChange={(e) =>  this.setState({address: e.target.value})}/><br></br>
                   <Input className="box" type="text" name="name" placeholder="city" onChange={(e) =>  this.setState({city: e.target.value})}/><br></br>
                   <Input className="box" type="number" name="name" placeholder="phone"onChange={(e) =>  this.setState({phone: e.target.value})}/><br></br>
                   <Input className="box" type="email" name="name" placeholder="email"onChange={(e) =>  this.setState({email: e.target.value})}/><br></br>
                    <h2>About me</h2>
                   <Input textArea placeholder="about me" className="box" onChange={(e) => this.setState({about: e.target.value})} /> 
                   </Grid>
                   <Grid item md={8} sm={12}>
                      <Resume
                         el={el}
                         role={role}
                         address={address}
                         city={city}
                         phone={phone}
                         email={email}
                         about={about}


                        />

                   </Grid>


               </Grid>
               </main>
                
            </>
        )
    }
}

export default App
