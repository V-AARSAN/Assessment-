import axios from 'axios';
import React, {   useState } from 'react';
import {Container,Row,Col,Card, Form,Stack,InputGroup,Button, FormGroup} from "react-bootstrap"
import { useNavigate } from 'react-router-dom';

export default function AddUser() {

    const navigate = useNavigate()
    const[name, setName] = useState()
    const[username, setUsername] = useState()
    const[email, setEmail] = useState()
    const[adderss, setAdderss] = useState()
    const[geo, setGeo] = useState()
    const[phone, setPhone] = useState()
    const[website, setWebsite] = useState()
    const[company_name, setCompanyName] = useState()
    const[company_catchphrase, setCompanyCatchphrase] = useState()
    const[company_bs, setCompanyBs] = useState()

    const hanldesubmit = (e) =>{
        e.preventDefault();

        const data = {
            name:name,
            username:username,
            email:email,
            adderss:adderss,
            geo:geo,
            phone:phone,
            website:website,
            company_name:company_name,
            company_catchphrase:company_catchphrase,
            company_bs:company_bs
        }

        axios.post(`http://localhost:5000/route/UserContoller/adduser`,data)
        .then((res)=>{
            console.log(res.data)
            navigate('/')
        })
    }

  return (
      <>
        <div>
            <Container>
                <Row className="d-flex align-items-center vh-100">
                    <Col lg={8}  md={8} sm={12}  className="mx-auto" >
                        <Card className='addtransparent'>
                            <Form  className='shadow bg-transparent' onSubmit={hanldesubmit} >
                                <Container>
                                    <Stack gap={2} className="m-4">
                                        <h3 className='text-primary fw-bold'><span className="text-decoration-underline ">Add User</span></h3>
                                        <Row className='my-2'>
                                            <Col>
                                            <FormGroup>
                                            <InputGroup>
                                                <InputGroup.Text style={{padding:'0 8px'}}>name</InputGroup.Text>
                                                <Form.Control type='text' placeholder='type name' onChange={(e)=>setName(e.target.value)} />
                                            </InputGroup>
                                            </FormGroup>
                                            </Col>
                                            <Col>
                                            <FormGroup>
                                            <InputGroup>
                                                <InputGroup.Text style={{padding:'0 8px'}}>username</InputGroup.Text>
                                                <Form.Control type='text' placeholder='type username' onChange={(e)=>setUsername(e.target.value)} />
                                            </InputGroup>
                                            </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row  className='my-2'>
                                            <Col>
                                           
                                        <FormGroup>
                                            <InputGroup>
                                                <InputGroup.Text style={{padding:'0 8px'}}>email</InputGroup.Text>
                                                <Form.Control type='text' placeholder='type email' onChange={(e)=>setEmail(e.target.value)} />
                                            </InputGroup>
                                            </FormGroup>
                                            </Col>
                                            <Col>
                                             <FormGroup>
                                            <InputGroup>
                                                <InputGroup.Text style={{padding:'0 16px'}}>adderss</InputGroup.Text>
                                                <Form.Control type='text' placeholder='type adderss' onChange={(e)=>setAdderss(e.target.value)} />
                                            </InputGroup>
                                            </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row  className='my-2'>
                                            <Col>
                                            <FormGroup>
                                            <InputGroup>
                                                <InputGroup.Text style={{padding:'0 14px'}}>geo</InputGroup.Text>
                                                <Form.Control type='text' placeholder='type geo' onChange={(e)=>setGeo(e.target.value)} />
                                            </InputGroup>
                                            </FormGroup>
                                        
                                            </Col>
                                            <Col>
                                            <FormGroup>
                                            <InputGroup>
                                                <InputGroup.Text style={{padding:'0 21px'}}>phone</InputGroup.Text>
                                                <Form.Control type='text' placeholder='type phone' onChange={(e)=>setPhone(e.target.value)} />
                                            </InputGroup>
                                            </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row  className='my-2'>
                                            <Col>
                                            <FormGroup>
                                            <InputGroup>
                                                <InputGroup.Text style={{padding:'0 3px'}}>website</InputGroup.Text>
                                                <Form.Control type='text' placeholder='type website' onChange={(e)=>setWebsite(e.target.value)} />
                                            </InputGroup>
                                            </FormGroup>
                                        
                                            </Col>
                                            <Col>
                                            <FormGroup>
                                            <InputGroup>
                                                <InputGroup.Text style={{padding:'0 5px'}}>company name</InputGroup.Text>
                                                <Form.Control type='text' placeholder='type company name' onChange={(e)=>setCompanyName(e.target.value)} />
                                            </InputGroup>
                                            </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row  className='my-2'>
                                            <Col>
                                            <FormGroup>
                                            <InputGroup>
                                                <InputGroup.Text style={{padding:'0 5px'}}>company catchphrase</InputGroup.Text>
                                                <Form.Control type='text' placeholder='type company catchphrase' onChange={(e)=>setCompanyCatchphrase(e.target.value)} />
                                            </InputGroup>
                                            </FormGroup>
                                        
                                            </Col>
                                            <Col>
                                            <FormGroup>
                                            <InputGroup>
                                                <InputGroup.Text style={{padding:'0 17px'}}>company bs</InputGroup.Text>
                                                <Form.Control type='text' placeholder='type company bs' onChange={(e)=>setCompanyBs(e.target.value)} />
                                            </InputGroup>
                                            </FormGroup>
                                            </Col>
                                        </Row>
                                        <div className="text-end">
                                        <Button type="submit" variant="danger" onClick={()=>navigate('/')} className='mx-2' >Close</Button> 
                                        <Button type="submit" variant="primary" >Submit</Button> 
                                    </div>
                                    </Stack>
                                </Container>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
  )
}
