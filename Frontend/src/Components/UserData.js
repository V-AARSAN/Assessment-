import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {Container,Row,Col,Card, Form,Stack,InputGroup,Button, FormGroup, Table, Alert} from "react-bootstrap"
import { useNavigate } from "react-router-dom";


export default function UserData(){

    const[data,setData] = useState([])
    const[search,setSearch] = useState()
    const navigate = useNavigate()

    const[id, setId] = useState()
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
    const[showData, setShowData] = useState(true)
    const[showEdit, setShowEdit] = useState(false)

    const getData = () =>{
        axios.get(`http://localhost:5000/route/UserContoller/getuser`)
        .then((res)=>{
            setData(res.data)
        })
    }

    const handleclose = () =>{
        setShowData(true)
        setShowEdit(false)
    }


    const searchTerm = new RegExp(search,"gi")
    const filterData = data.filter((item)=>{
        return searchTerm.test(item.name) || searchTerm.test(item.username) 
    })

    const handleEdit = (id) =>{
        const filter = data.find((item)=>item.id == id)
        console.log(filter)
        setId(id)
        setName(filter?.name)
        setUsername(filter?.username)
        setEmail(filter?.email)
        setAdderss(filter?.adderss)
        setGeo(filter?.geo)
        setPhone(filter?.phone)
        setWebsite(filter?.website)
        setCompanyName(filter?.company_name)
        setCompanyCatchphrase(filter?.company_catchphrase)
        setCompanyBs(filter?.company_bs)
        setShowData(false)
        setShowEdit(true)
    }
    const handleDelete = (id) =>{
        console.log(id)
        const data = {
            id:id
        }
        axios.delete(`http://localhost:5000/route/UserContoller/deleteuser`,{data})
        .then((res)=>{
            console.log(res.data)
            getData()

        })
    }

    const hanldesubmit = (e) =>{
        e.preventDefault();

        const data = {
            id:id,
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

        axios.put(`http://localhost:5000/route/UserContoller/updateuser`,data)
        .then((res)=>{
            console.log(res.data)
            setShowData(true)
            setShowEdit(false)
            getData()
        })
    }

    useEffect(()=>{
        getData()
    },[])

    return(
        <>
        {showData && 
        <Container fluid>
        <h2 className="text-center py-3">User Data</h2>
        <div className="my-3 ms-3 d-flex justify-content-between me-2">
        <Form.Control type="text" placeholder="search" style={{width:"300px"}} onChange={(e)=>setSearch(e.target.value)} />
        <Button onClick={()=>navigate('/adduser')}>Add User</Button>
        </div>
        <Container fluid>
        <div className="table-container overflow-auto" style={{ maxHeight: '400px'}}  >
        <Table  striped hover  className="text-center mb-0 shadow text-nowrap"  >
            <thead className="table-dark fw-bold position-sticky top-0">
                <tr>
                    <td>S.No</td>
                    <td>Action</td>
                    <td>Name</td>
                    <td>Username</td>
                    <td>Email</td>
                    <td>Address</td>
                    <td>Geo</td>
                    <td>Phone</td>
                    <td>Website</td>
                    <td>Company Name</td>
                    <td>Company catchPhrase</td>
                    <td>Company Bs</td>
                </tr>
            </thead>
            <tbody >
                { filterData.map((item,index)=>(
                    <tr key={index}>
                        <td>{index+1}</td>
                         <td>{[
                            {name:"Edit",icon:faEdit,color:"outline-primary",event:handleEdit},
                            {name:"Delete",icon:faTrash,color:"outline-danger",event:handleDelete}].map((handler,index)=>(
                            <Button key={`${index}_${handler.name}`} variant={handler.color} className="mx-2 rounded-circle" onClick={()=>handler.event(item.id)}><FontAwesomeIcon icon={handler.icon}/></Button>
                            ))}</td>
                        <td>{item?.name}</td>
                        <td>{item?.username}</td>
                        <td>{item?.email}</td>
                        <td>{item?.adderss}</td>
                        <td>{item?.geo}</td>
                        <td>{item?.phone}</td>
                        <td>{item?.website}</td>
                        <td>{item?.company_name}</td>
                        <td>{item?.company_catchphrase}</td>
                        <td>{item?.company_bs}</td>
                       
                    </tr>
                ))}
            </tbody>
        </Table>
       </div>
        </Container>
        </Container>}
        {showEdit && 
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
                                         <Form.Control type='text' placeholder='type name' value={name} onChange={(e)=>setName(e.target.value)} />
                                     </InputGroup>
                                     </FormGroup>
                                     </Col>
                                     <Col>
                                     <FormGroup>
                                     <InputGroup>
                                         <InputGroup.Text style={{padding:'0 8px'}}>username</InputGroup.Text>
                                         <Form.Control type='text' placeholder='type username'  value={username} onChange={(e)=>setUsername(e.target.value)} />
                                     </InputGroup>
                                     </FormGroup>
                                     </Col>
                                 </Row>
                                 <Row  className='my-2'>
                                     <Col>
                                    
                                 <FormGroup>
                                     <InputGroup>
                                         <InputGroup.Text style={{padding:'0 8px'}}>email</InputGroup.Text>
                                         <Form.Control type='text' placeholder='type email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                                     </InputGroup>
                                     </FormGroup>
                                     </Col>
                                     <Col>
                                      <FormGroup>
                                     <InputGroup>
                                         <InputGroup.Text style={{padding:'0 16px'}}>adderss</InputGroup.Text>
                                         <Form.Control type='text' placeholder='type adderss'  value={adderss} onChange={(e)=>setAdderss(e.target.value)} />
                                     </InputGroup>
                                     </FormGroup>
                                     </Col>
                                 </Row>
                                 <Row  className='my-2'>
                                     <Col>
                                     <FormGroup>
                                     <InputGroup>
                                         <InputGroup.Text style={{padding:'0 14px'}}>geo</InputGroup.Text>
                                         <Form.Control type='text' placeholder='type geo'  value={geo} onChange={(e)=>setGeo(e.target.value)} />
                                     </InputGroup>
                                     </FormGroup>
                                 
                                     </Col>
                                     <Col>
                                     <FormGroup>
                                     <InputGroup>
                                         <InputGroup.Text style={{padding:'0 21px'}}>phone</InputGroup.Text>
                                         <Form.Control type='text' placeholder='type phone'  value={phone} onChange={(e)=>setPhone(e.target.value)} />
                                     </InputGroup>
                                     </FormGroup>
                                     </Col>
                                 </Row>
                                 <Row  className='my-2'>
                                     <Col>
                                     <FormGroup>
                                     <InputGroup>
                                         <InputGroup.Text style={{padding:'0 3px'}}>website</InputGroup.Text>
                                         <Form.Control type='text' placeholder='type website'  value={website} onChange={(e)=>setWebsite(e.target.value)} />
                                     </InputGroup>
                                     </FormGroup>
                                 
                                     </Col>
                                     <Col>
                                     <FormGroup>
                                     <InputGroup>
                                         <InputGroup.Text style={{padding:'0 5px'}}>company name</InputGroup.Text>
                                         <Form.Control type='text' placeholder='type company name'  value={company_name} onChange={(e)=>setCompanyName(e.target.value)} />
                                     </InputGroup>
                                     </FormGroup>
                                     </Col>
                                 </Row>
                                 <Row  className='my-2'>
                                     <Col>
                                     <FormGroup>
                                     <InputGroup>
                                         <InputGroup.Text style={{padding:'0 5px'}}>company catchphrase</InputGroup.Text>
                                         <Form.Control type='text' placeholder='type company catchphrase'  value={company_catchphrase} onChange={(e)=>setCompanyCatchphrase(e.target.value)} />
                                     </InputGroup>
                                     </FormGroup>
                                 
                                     </Col>
                                     <Col>
                                     <FormGroup>
                                     <InputGroup>
                                         <InputGroup.Text style={{padding:'0 17px'}}>company bs</InputGroup.Text>
                                         <Form.Control type='text' placeholder='type company bs' value={company_bs} onChange={(e)=>setCompanyBs(e.target.value)} />
                                     </InputGroup>
                                     </FormGroup>
                                     </Col>
                                 </Row>
                                 <div className="text-end">
                                 <Button type="submit" variant="danger" onClick={handleclose} className='mx-2' >Close</Button> 
                                 <Button type="submit" variant="primary" >Submit</Button> 
                             </div>
                             </Stack>
                         </Container>
                     </Form>
                 </Card>
             </Col>
            </Row>
        </Container>
        }
        </>
    )
}