import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Axios from 'axios'
import { editContact } from '../redux/actions'
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default function ContactDetails() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const params = useParams();
  const dispatch = useDispatch();

  const fetchDetails = ()=>{
    Axios.get(`${process.env.REACT_APP_API_URL}/contacts/${params.id}`)
      .then((response)=>{
        setData(response.data)
      })
      .catch(setError)
      .finally(()=>setLoading(false))
  }

  useEffect(()=>{
    fetchDetails();
  }, [params]);

  if(loading) return(
    <h1>Loading...</h1>
  )
  if(error) return(
    <h1 className="text-danger">Error : {error.message}</h1>
  )

  const handleChangeContact=()=>{
    dispatch(editContact({
      ...data,
      name:data.name,
      lastName:data.lastName,
      number:data.number,
      updatedAt: new Date().toJSON(),
    }, fetchDetails));
  }

  return (
    <div>
      <Card>
        {/* <CardImg top width="100%" src={Profile} alt="Card image cap" /> */}
        <CardBody>
          <CardTitle>Name: {data.name}</CardTitle>
          <CardSubtitle>Last Name: {data.lastName}</CardSubtitle>
          <CardSubtitle>Number: {data.number}</CardSubtitle>
          <p>created at: {" "}
            {new Date(data.createdAt).toLocaleString()}</p>
          <p>
            updated at: {" "}
            {new Date(data.updatedAt).toLocaleString()}
          </p> 
          {/* <Button 
            onClick={handleChangeContact}
          >Edit</Button> */}
        </CardBody>
      </Card>
      {/* <Form>
      <FormGroup>
        <Label for="exampleEmail">Name</Label>
        <Input type="text">{data.name}</Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Last name</Label>
        <Input type="text">{data.lastName}</Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Number</Label>
        <Input type="number">{data.number}</Input>
      </FormGroup>
      <p>created at: {" "}
            {new Date(data.createdAt).toLocaleString()}</p>
          <p>
            updated at: {" "}
            {new Date(data.updatedAt).toLocaleString()}
          </p> 
        <Button 
            onClick={handleChangeContact}
          >Edit</Button>  
      </Form> */}
    </div>
  )
}
