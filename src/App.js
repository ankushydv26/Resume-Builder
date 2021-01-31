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
             about:'',
             skill1:'',
             skill2:'',
             skill3:'',
             skill4:'',
             skill5:'',
             skill6:'',
             experience:'',
             educations:''
            
         }
     }
     
    render() {
        const {el,role,address,city, phone,email,about,educations,skill1,skill2,skill3,skill4,skill5,skill6, experience} = this.state;
        
        return (
            <>
               <main className="main" style={{flexGrow:'1',marginLeft:"2em"}}>
               <Grid container spacing={3} style={{width:'100wh'}}>
                   <Grid item sm={12}  xs={12} md={4} style={{ overflowY: '1000px' }}>
                   <h2 className="head"> Heading</h2>
                   <Input className="box" variant="filled" type="text" name="name" placeholder="name" onChange={(e) =>  this.setState({el: e.target.value})}/><br></br>
                   <Input className="box" type="text"  placeholder="role" onChange={(e) =>  this.setState({role: e.target.value})}/><br></br>
                   <Input className="box" type="text"  placeholder="address" onChange={(e) =>  this.setState({address: e.target.value})}/><br></br>
                   <Input className="box" type="text"  placeholder="city" onChange={(e) =>  this.setState({city: e.target.value})}/><br></br>
                   <Input className="box" type="number"  placeholder="phone"onChange={(e) =>  this.setState({phone: e.target.value})}/><br></br>
                   <Input className="box" type="email"  placeholder="email"onChange={(e) =>  this.setState({email: e.target.value})}/><br></br>
                   <h2 className="head">About me</h2>
                   <Input textArea placeholder="about me" className="box" onChange={(e) => this.setState({about: e.target.value})} /> 
                   <h2 className="head">Skills</h2>
                   <Input  placeholder="Skills" className="box" onChange={(e) => this.setState({skill1: e.target.value})} /> <br></br>
                   <Input  placeholder="Skills" className="box" onChange={(e) => this.setState({skill2: e.target.value})} /> <br></br>
                   <Input  placeholder="Skills" className="box" onChange={(e) => this.setState({skill3: e.target.value})} /> <br></br>
                   <Input  placeholder="Skills" className="box" onChange={(e) => this.setState({skill4: e.target.value})} /> <br></br>
                   <Input  placeholder="Skills" className="box" onChange={(e) => this.setState({skill5: e.target.value})} /> <br></br>
                   <Input  placeholder="Skills" className="box" onChange={(e) => this.setState({skill6: e.target.value})} /> <br></br>
                   <h2></h2>
                   </Grid>
                   <Grid item md={8} xs={12} sm={12}>
                      <Resume
                         el={el}
                         role={role}
                         address={address}
                         city={city}
                         phone={phone}
                         email={email}
                         about={about}
                         educations={educations}
                         skill1={skill1}
                         skill2={skill2}
                         skill3={skill3}
                         skill4={skill4}
                         skill5={skill5}
                         skill6={skill6}


                        />

                   </Grid>


               </Grid>
               </main>
                
            </>
        )
    }
}

export default App
