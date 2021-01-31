import React, { Component } from 'react'
import Resume from "./Resume"
import { Button, Grid, Input } from "@material-ui/core"




class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            el: '',
            role: '',
            address: '',
            city: '',
            phone: '',
            email: '',
            about: '',
            skill1: '',
            skill2: '',
            skill3: '',
            skill4: '',
            skill5: '',
            skill6: '',
            educations: '',
            companyName1:'',
            companyName2:'',
            position1:'',
            position2:'',
            start1:'',
            start2:'',
            end1:'',
            end2:'',
            des1:'',
            des2:'',
            schoolName:'',
            startDate:'',
            endDate:'',
            marks:''

        }
    }

    handletoPdf =(e) =>{
        e.preventDefault()
        let x = document.getElementById('hide');
        x.style.display = 'none'
        window.print()
    }

    render() {
        const { el, role, address, city, phone, email, about, educations, skill1, skill2, skill3, skill4, skill5, skill6, 
            companyName1,companyName2,schoolName, startDate, endDate,position1,position2,start1,start2,end1, end2, des1,des2, marks } = this.state;

        return (
            <>
                <main className="main" style={{ flexGrow: '1', marginLeft: "2em" }}>
                    <Grid container spacing={3} style={{ width: '100wh' }}>

                        <Grid item sm={12} xs={12} md={4} id="hide">
                            <h2 className="head"> Heading</h2>
                            <Input className="box" variant="filled" type="text" name="name" placeholder="name" onChange={(e) => this.setState({ el: e.target.value })} /><br></br>
                            <Input className="box" type="text" placeholder="role" onChange={(e) => this.setState({ role: e.target.value })} /><br></br>
                            <Input className="box" type="text" placeholder="address" onChange={(e) => this.setState({ address: e.target.value })} /><br></br>
                            <Input className="box" type="text" placeholder="city" onChange={(e) => this.setState({ city: e.target.value })} /><br></br>
                            <Input className="box" type="number" placeholder="phone" onChange={(e) => this.setState({ phone: e.target.value })} /><br></br>
                            <Input className="box" type="email" placeholder="email" onChange={(e) => this.setState({ email: e.target.value })} /><br></br>
                            <h2 className="head">About me</h2>
                            <Input textArea placeholder="about me" className="box" onChange={(e) => this.setState({ about: e.target.value })} />
                            <h2 className="head">Skills</h2>
                            <Input placeholder="Skills" className="box" onChange={(e) => this.setState({ skill1: e.target.value })} /> <br></br>
                            <Input placeholder="Skills" className="box" onChange={(e) => this.setState({ skill2: e.target.value })} /> <br></br>
                            <Input placeholder="Skills" className="box" onChange={(e) => this.setState({ skill3: e.target.value })} /> <br></br>
                            <Input placeholder="Skills" className="box" onChange={(e) => this.setState({ skill4: e.target.value })} /> <br></br>
                            <Input placeholder="Skills" className="box" onChange={(e) => this.setState({ skill5: e.target.value })} /> <br></br>
                            <Input placeholder="Skills" className="box" onChange={(e) => this.setState({ skill6: e.target.value })} /> <br></br>
                            <h2 className="head">Experience</h2>
                            <h3 className="head">Company 1</h3>
                            <Input placeholder="Company Name" onChange={(e) => this.setState({companyName1: e.target.value})}/><br></br>
                            <Input placeholder="Position" onChange={(e) => this.setState({position1: e.target.value})}/><br></br>
                            <Input placeholder="Start Month, Year" onChange={(e) => this.setState({start1:e.target.value})}/><br></br>
                            <Input placeholder="End Month, Year" onChange={(e) => this.setState({end1:e.target.value})}/><br></br>
                            <Input placeholder="Description " onChange={(e) => this.setState({des1:e.target.value})}/><br></br>
                            <h3 className="head">Company 2</h3>
                            <Input placeholder="Company Name" onChange={(e) => this.setState({companyName2: e.target.value})}/><br></br>
                            <Input placeholder="Position" onChange={(e) => this.setState({position2: e.target.value})}/><br></br>
                            <Input placeholder="Start Month, Year" onChange={(e) => this.setState({start2:e.target.value})}/><br></br>
                            <Input placeholder="End Month, Year" onChange={(e) => this.setState({end2:e.target.value})}/><br></br>
                            <Input placeholder="Description " onChange={(e) => this.setState({des2:e.target.value})}/><br></br>
                            <h2 className="head" >Education</h2>
                            <Input  placeholder='School Name' onChange={(e) => this.setState({schoolName:e.target.value})}/><br></br>
                            <Input placeholder="Marks Obtaine" onChange={(e) => this.setState({marks:e.target.value})}/><br></br>
                            <p>Start Date</p>
                            <Input placeholder="Starting Date" type="date" onChange={(e) => this.setState({startDate:e.target.value})}/><br></br>
                            <p>End Date</p>
                            <Input placeholder="End Date" type="date" onChange={(e) => this.setState({endDate:e.target.value})}/>

                           <Button onClick={this.handletoPdf} variant="contained" color="primary">Download To Pdf</Button>


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
                                companyName1={companyName1}
                                companyName2={companyName2}
                                position1={position1}
                                position2={position2}
                                des1={des1}
                                des2={des2}
                                end1={end1}
                                end2={end2}
                                start1={start1}
                                start2={start2}
                                schoolName={schoolName}
                                startDate={startDate}
                                endDate={endDate}
                                marks={marks}


                            />

                        </Grid>


                    </Grid>
                </main>

            </>
        )
    }
}

export default App
