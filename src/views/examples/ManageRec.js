
import React, {useState} from "react";

// reactstrap components
import 'bootstrap';
import Line42 from '../../assets/img/brand/Line42.png';
import Ellipse10 from '../../assets/img/brand/Ellipse10.png';
import AddTimeline from '../../assets/img/brand/AddTimeline.png';


import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  CustomInput,
  Modal, ModalHeader, ModalBody, ModalFooter
} from "reactstrap";

import { v4 as uuidv4 } from 'uuid';
// core components
import UserHeader from "components/Headers/UserHeader.js";

function ManageRecords  ( props )  {
    const {
        buttonLabel,
        className
      } = props;

      const [modal, setModal] = useState(false);

      const toggle = () => setModal(!modal);

// ------------------- FOR ADD ROW BTTN
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), Name: '' , dateTaken: '', score: ''},
  ]);

  const [inputFields2, setInputFields2] = useState([
    { id: uuidv4(), Name2: '' , dateTaken2: ''},
  ]);

  const [inputFields3, setInputFields3] = useState([
    { id: uuidv4(), empName: '' , empAdd: '',  empTelNo: '', empSuVisor: '', empTitle: '', empStartIncome: '', empLastIncone: '', empRFL: '', empYoN: '', empReason: '' },
  ]);

  const [inputFields4, setInputFields4] = useState([
    { id: uuidv4(), Name4: '' , occupation: '', age: '', emp:''},
  ]);

  const [inputFields5, setInputFields5] = useState([
    {id: uuidv4(),  Namechld: '' ,  agechld: ''},
  ]);

  const [inputFields6, setInputFields6] = useState([
    {id: uuidv4(),  Nameref: '' ,  occref: '', empref:''},
  ]);

  const [inputFields7, setInputFields7] = useState([
    {id: uuidv4(),  NameOrg: '' ,  descOrg: '',},
  ]);

  const [inputFields8, setInputFields8] = useState([
    {id: uuidv4(),  NatureOff: '' ,  courtJuri: '', dateFiled: ''}
  ]);


  const handleAddFields = () => {
    setInputFields([...inputFields, { Name: '', dateTaken: '', score: ''}])
  }
 
  const handleAddFields2 = () => {
    setInputFields2([...inputFields2, { Name2: '', dateTaken2: '',}])
  }

  const handleAddFields3 = () => {
    setInputFields3([...inputFields3, { empName: '' , empAdd: '',  empTelNo: '', empSuVisor: '', empTitle: '', empStartIncome: '', empLastIncone: '', empRFL: '', empYoN: '', empReason: '' }])
  }

  const handleAddFields4 = () => {
    setInputFields4([...inputFields4, { Name4: '', occupation: '', age: '', emp:''}])
  }

  const handleAddFields5 = () => {
    setInputFields5([...inputFields5, { Namechld: '', agechld: ''}])
  }

  const handleAddFields6 = () => {
    setInputFields6([...inputFields6, { Nameref: '' ,  occref: '', empref:''}])
  }

  const handleAddFields7 = () => {
    setInputFields7([...inputFields7, { NameOrg: '' ,  descOrg: '',}])
  }

  const handleAddFields8 = () => {
    setInputFields8([...inputFields8, {NatureOff: '' ,  courtJuri: '', dateFiled: ''}])
  }


  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    
    setInputFields(newInputFields);
  }

  const handleChangeInput2 = (id, event) => {
    const newInputFields2 = inputFields2.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    setInputFields2(newInputFields2);
  }

  const handleChangeInput3 = (id, event) => {
    const newInputFields3 = inputFields3.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    setInputFields3(newInputFields3);
  }

  const handleChangeInput4 = (id, event) => {
    const newInputFields4 = inputFields4.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    setInputFields2(newInputFields4);
  }

  const handleChangeInput5 = (id, event) => {
    const newInputFields5 = inputFields5.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    setInputFields5(newInputFields5);
  }

  const handleChangeInput6 = (id, event) => {
    const newInputFields6 = inputFields6.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    setInputFields6(newInputFields6);
  }

  const handleChangeInput7 = (id, event) => {
    const newInputFields7 = inputFields7.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    setInputFields2(newInputFields7);
  }

  const handleChangeInput8 = (id, event) => {
    const newInputFields8 = inputFields8.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    setInputFields8(newInputFields8);
  }

  

// ---------------------------------

//-------FOR SALARY-----------------
const [inputFields9, setInputFields9] = useState([
    {id: uuidv4(),  prevSal: '' ,  amountInc: '', DOI: '', descSal:''}
  ]);


const handleAddFields9 = () => {
    setInputFields9([...inputFields9, { prevSal: '' ,  amountInc: '', DOI: '', descSal:''}])
  }

  const handleChangeInput9 = (id, event) => {
    const newInputFields9 = inputFields9.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    setInputFields9(newInputFields9);
  }


  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h2 className="mb-0">A. PERSONAL INFORMATION</h2>
                  </Col>
                
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                
                  <div className="pl-lg-0">
                    <Row>
                      <Col sm="6" >
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-username"
                          >
                            S.A. No:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-username"
                            type="text"
                            placeholder="123ABC"
                          />
                          </Col>
                        </FormGroup>
                      </Col>

                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-sa"
                          >
                           Employee No.:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-sa"
                            type="text"
                            placeholder="2021-ABC"
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                     <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-dateemp"
                          >
                              Date Employed:
                          </label>
                          <Col sm="4">
                    
                            <Input
                              type="date"
                              name="date"
                              id="input-dateemp"
                              placeholder="02/18/2021"
                            />
                        
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-othName"
                          >
                            Other Names/Aliases:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-othName"
                            type="text"
                            placeholder="JD"
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-name"
                          >
                            Name (LN,FN,MN):
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-name"
                            type="text"
                              placeholder="DOE,JOHN,JAMES"
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-DoB"
                          >
                            Date of Birth:
                          </label>
                          <Col sm="4">
                          <Input
                            class="form-control"
                            id="input-DoB"
                            type="date"
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-nickName"
                          >
                            Nickname:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-nickName"
                            type="text"
                            placeholder="JOHN"
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-landNo"
                          >
                            Landline No.:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-last-landNo"
                            type="text"
                            placeholder="123-4567"
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    
                    <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-Weight"
                          >
                            Weight:
                          </label>
                          <Col sm="3">
                          <Input
                            class="form-control"
                            id="input-Weight"
                            type="text"
                            placeholder="75kg"
                          />
                          </Col >
                          
                          <label
                            class="col-sm-2 col-form-label "
                            htmlFor="input-Height"
                          >
                            Height:
                          </label>
                          <Col sm="3">
                          <Input
                            class="form-control"
                            id="input-first-Height"
                            type="text"
                            placeholder="173cm"
                          />
                          </Col>
                        </FormGroup>
                      </Col>


                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-landNo"
                          >
                            Cellphone No.:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-last-landNo"
                            type="text"
                            placeholder="09123456789"
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-Religion"
                          >
                            Religion:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-Religion"
                            type="text"
                            placeholder="Iglesia Ni Cristo"
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="gender"
                          >
                            Gender:
                          </label>
                          <Col sm='2'>
                      
                            <Input type="select" name="select" id="gender">
                              <option selected>Male</option>
                              <option>Female</option>
                         
                            </Input>
                     
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    {/* Need Ayusin */}
                    <Row>
                      <Col md="1" style={{marginRight:65}}>
                        <FormGroup row>
                          <label
                            class="col-sm-auto col-form-label "
                            htmlFor="input-cityAdd"
                          >
                            City Address:
                          </label>
                     
                        </FormGroup>
                      </Col>
                      <Col xs="10">
                      <FormGroup row>
                          <Col >
                          <Input
                            class="form-control "
                            id="input-cityAdd"
                            type="text"
                            placeholder="123 Street, Block 1, Brgy. Avenue, Syudad City"
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="2" >
                        <FormGroup row>
                          <label
                            class="col-sm-auto col-form-label "
                            htmlFor="input-provAdd"
                          >
                            Province Address:
                          </label>
                     
                        </FormGroup>
                      </Col>
                      <Col xs="10" style={{marginLeft:-65}}>
                      <FormGroup row>
                          <Col >
                          <Input
                            class="form-control "
                            id="input-provAdd"
                            type="text"
                            placeholder="--"
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-civStatus"
                          >
                            Civil Status:
                          </label>
                          <Col sm='2'>
                            <Input type="select" name="select" id="input-civStatus">
                              <option selected>Single</option>
                              <option>Married</option>
                              <option>Widow</option>
                            </Input>
                          </Col>
                        </FormGroup>
                      </Col>
              
                    </Row>
                    <span class="d-flex flex-row-reverse mx-6"  >
                        <button type="button" class="btn btn-success" >Save</button>
                    </span>

                    {/* <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-tin"
                          >
                            TIN:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-tin"
                            type="text"
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-pagibig"
                          >
                            Pag-ibig Fund No.:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-pagibig"
                            type="text"
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-sss"
                          >
                            SSS No:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-sss"
                            type="text"
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-philHealth"
                          >
                            PhilHealth No.:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-philHealth"
                            type="text"
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row> */}
                  </div>


                {/* EDUCATIONAL BG */}
               
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">B. EDUCATIONAL BACKGROUND</h1>
                      </Col>
                   </Row>
             
                  
                
                  <div className="pl-lg-0">
                  <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-primSchool"
                          >
                           Primary School:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-primSchool"
                            type="text"
                            placeholder="Junior School Academy"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-secondSchool"
                          >
                           Secondary School:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-secondSchool"
                            type="text"
                            placeholder="Senior School Academy"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-primAddSchool"
                          >
                           Address:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-primAddSchool"
                            type="text"
                            placeholder="Lorem Street, Ipsum City"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-secondAddSchool"
                          >
                           Address:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-secondAddSchool"
                            type="text"
                            placeholder="Lorem Street, Ipsum City"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="yearGradPrim"
                          >
                            Year Graduated:
                          </label>
                          <Col sm='3'>
                          <FormGroup>
                            <Input type="select" name="select" id="yearGradPrim" disabled>
                            <option selected disabled>Select</option>
                              <option>1980</option>
                              <option>1981</option>
                              <option>1982</option>
                              <option>1983</option>
                              <option>1984</option>
                              <option>1985</option>
                              <option>1986</option>
                              <option>1987</option>
                              <option>1988</option>
                              <option>1989</option>
                              <option>1990</option>
                              <option>1991</option>
                              <option>1992</option>
                              <option>1993</option>
                              <option>1994</option>
                              <option>1995</option>
                              <option>1996</option>
                              <option>1997</option>
                              <option>1998</option>
                              <option>1999</option>
                              <option>2000</option>
                              <option>2001</option>
                              <option>2002</option>
                              <option>2003</option>
                              <option>2004</option>
                              <option>2005</option>
                              <option>2006</option>
                              <option>2007</option>
                              <option>2008</option>
                              <option>2009</option>
                              <option>2010</option>
                              <option>2011</option>
                              <option>2012</option>
                              <option>2013</option>
                              <option>2014</option>
                              <option>2015</option>
                              <option>2016</option>
                              <option>2017</option>
                              <option>2018</option>
                              <option>2019</option>
                              <option>2020</option>
                              <option>2021</option>
                            </Input>
                          </FormGroup>
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="yearGradSecond"
                          >
                            Year Graduated:
                          </label>
                          <Col sm='3'>
                          <FormGroup>
                            <Input type="select" name="select" id="yearGradSecond" disabled>
                            <option selected disabled>Select</option>
                              <option>1980</option>
                              <option>1981</option>
                              <option>1982</option>
                              <option>1983</option>
                              <option>1984</option>
                              <option>1985</option>
                              <option>1986</option>
                              <option>1987</option>
                              <option>1988</option>
                              <option>1989</option>
                              <option>1990</option>
                              <option>1991</option>
                              <option>1992</option>
                              <option>1993</option>
                              <option>1994</option>
                              <option>1995</option>
                              <option>1996</option>
                              <option>1997</option>
                              <option>1998</option>
                              <option>1999</option>
                              <option>2000</option>
                              <option>2001</option>
                              <option>2002</option>
                              <option>2003</option>
                              <option>2004</option>
                              <option>2005</option>
                              <option>2006</option>
                              <option>2007</option>
                              <option>2008</option>
                              <option>2009</option>
                              <option>2010</option>
                              <option>2011</option>
                              <option>2012</option>
                              <option>2013</option>
                              <option>2014</option>
                              <option>2015</option>
                              <option>2016</option>
                              <option>2017</option>
                              <option>2018</option>
                              <option>2019</option>
                              <option>2020</option>
                              <option>2021</option>
                            </Input>
                          </FormGroup>
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
          {/* ---------------------------------------------------- */}
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5"></h1>
                      </Col>
                   </Row>
         {/* ---------------------------------------------------- */}

                   <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-college"
                          >
                          College:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-college"
                            type="text"
                            placeholder="Senior University"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-gradSch"
                          >
                           Grad School:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-gradSch"
                            type="text"
                            placeholder="--"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-addCollSch"
                          >
                           Address:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-addCollSch"
                            type="text"
                            placeholder="Lorem Street, Ipsum City"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-addGradSch"
                          >
                           Address:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-addGradSch"
                            type="text"
                            placeholder="--"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-degColl"
                          >
                           Degree:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-degColl"
                            type="text"
                            placeholder="Lorem Street, Ipsum City"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-degGrad"
                          >
                           Degree:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-degGrad"
                            type="text"
                            placeholder="--"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="yearColl"
                          >
                            Year Graduated:
                          </label>
                          <Col sm='3'>
                          <FormGroup>
                            <Input type="select" name="select" id="yearColl" disabled>
                            <option selected disabled>Select</option>
                              <option>1980</option>
                              <option>1981</option>
                              <option>1982</option>
                              <option>1983</option>
                              <option>1984</option>
                              <option>1985</option>
                              <option>1986</option>
                              <option>1987</option>
                              <option>1988</option>
                              <option>1989</option>
                              <option>1990</option>
                              <option>1991</option>
                              <option>1992</option>
                              <option>1993</option>
                              <option>1994</option>
                              <option>1995</option>
                              <option>1996</option>
                              <option>1997</option>
                              <option>1998</option>
                              <option>1999</option>
                              <option>2000</option>
                              <option>2001</option>
                              <option>2002</option>
                              <option>2003</option>
                              <option>2004</option>
                              <option>2005</option>
                              <option>2006</option>
                              <option>2007</option>
                              <option>2008</option>
                              <option>2009</option>
                              <option>2010</option>
                              <option>2011</option>
                              <option>2012</option>
                              <option>2013</option>
                              <option>2014</option>
                              <option>2015</option>
                              <option>2016</option>
                              <option>2017</option>
                              <option>2018</option>
                              <option>2019</option>
                              <option>2020</option>
                              <option>2021</option>
                            </Input>
                          </FormGroup>
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="yearGrad"
                          >
                            Year Graduated:
                          </label>
                          <Col sm='3'>
                          <FormGroup>
                            <Input type="select" name="select" id="yearGrad" disabled>
                            <option selected disabled>Select</option>
                              <option>1980</option>
                              <option>1981</option>
                              <option>1982</option>
                              <option>1983</option>
                              <option>1984</option>
                              <option>1985</option>
                              <option>1986</option>
                              <option>1987</option>
                              <option>1988</option>
                              <option>1989</option>
                              <option>1990</option>
                              <option>1991</option>
                              <option>1992</option>
                              <option>1993</option>
                              <option>1994</option>
                              <option>1995</option>
                              <option>1996</option>
                              <option>1997</option>
                              <option>1998</option>
                              <option>1999</option>
                              <option>2000</option>
                              <option>2001</option>
                              <option>2002</option>
                              <option>2003</option>
                              <option>2004</option>
                              <option>2005</option>
                              <option>2006</option>
                              <option>2007</option>
                              <option>2008</option>
                              <option>2009</option>
                              <option>2010</option>
                              <option>2011</option>
                              <option>2012</option>
                              <option>2013</option>
                              <option>2014</option>
                              <option>2015</option>
                              <option>2016</option>
                              <option>2017</option>
                              <option>2018</option>
                              <option>2019</option>
                              <option>2020</option>
                              <option>2021</option>
                            </Input>
                          </FormGroup>
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="1" style={{marginRight:65}}>
                        <FormGroup row>
                          <label
                            class="col-sm-auto col-form-label "
                            htmlFor="input-others"
                          >
                            Others:
                          </label>
                     
                        </FormGroup>
                      </Col>
                      <Col xs="10">
                      <FormGroup row>
                          <Col >
                          <Input
                            class="form-control "
                            id="input-others"
                            type="text"
                            placeholder="--"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    

                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">EXAMINATIONS TAKEN</h1>
                      </Col>
                   </Row>



                    
                 
               
                        

                        { inputFields.map(inputField => (
                          <div >  

                            <div class="form-group row">
                                    <label
                                      class="col-sm-1 col-form-label" htmlFor="input-examName">Name:</label>
                                <div class="col-sm-5 mx-6">
                                    <Input
                                      
                                      class="form-control"
                                      id="input-examName"
                                      name="Name"
                                      label="Name"
                                      variant="filled"
                                      value={inputField.Name}
                                      placeholder="Lorem Exam"
                                      onChange={event => handleChangeInput(inputField.id, event)}
                                    />
                                    </div>
                            </div>
                              
                        
                        
                     
                      
                            <div class="form-group row">
                                    <label
                                      class="col-sm-1 col-form-label"
                                      htmlFor="input-examTaken"
                                    >
                                    Date Taken:
                                    </label>
                                    <div class="col-sm-2 mx-6">
                                    <Input
                                     type="date"
                                      class="form-control"
                                      id="input-examTaken"
                                      name="dateTaken"
                                      label="Name"
                                      variant="filled"
                                      value={inputField.dateTaken}
                                      onChange={event => handleChangeInput(inputField.id, event)}
                                    />
                                    </div>

                                  
                                    <label
                                      class="col-sm-auto col-form-label mx-5 "
                                      htmlFor="input-scoreExam"
                                    >
                                    score:
                                    </label>
                                    <div class="col-sm-1" >
                                    <Input
                                     style={{marginLeft:15}}
                                      class="form-control"
                                      id="input-scoreExam"
                                      name="score"
                                      variant="filled"
                                      placeholder="98%"
                                      value={inputField.score}
                                      onChange={event => handleChangeInput(inputField.id, event)}
                                    />
                                    </div>
                           </div>    
                           <span class="d-flex flex-row-reverse mx-6"  >
                           <button type="button" class="btn btn-success" >Save</button>
                           </span>
 
                          </div>
                          )) }
                      

                      
                   
                

                    {/* <Row>
                    <Col sm="6">
                        <FormGroup >
                        { inputFields.map(inputField => (
                          <div>
                          <label
                            class="col-sm-auto col-form-label"
                            htmlFor="input-first-name"
                          >
                           Date Taken:
                          </label>
                          <Col sm="12">
                          <Input
                            className="form-control-alternative"
                            name="Name"
                            label="Name"
                            variant="filled"
                            value={inputField.dateTaken}
                            // onChange={event => handleChangeInput(inputField.id, event)}
                          />
                          </Col>
                          </div>
                          )) }
                          
                          <label
                            class="col-lr-1 col-form-label ml-6"
                            htmlFor="input-first-name"
                          >
                            Score:
                          </label>
                          <Col sm="2">
                          <Input
                            className="form-control-alternative"
                            id="input-first-name"
                            type="text"
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row> */}

                    
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">OTHER SKILLS / MACHINES OPERATED</h1>
                      </Col>
                   </Row>

                   
                   <Row>
                      <Col sm="12">
                        <FormGroup row>
                          <label
                            class="col-sm-1 col-form-label mr-6 "
                            htmlFor="input-skills"
                          >
                            Skills:
                          </label>
                          <Col sm="10" >
                          <Input
                            class="form-control"
                            id="input-skills"
                            type="text"
                            placeholder="Autocad, Autodesk, MAYA"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">SEMINARS / TRAININGS ATTENDED</h1>
                      </Col>
                   </Row>
                  
                   
                      
                        
                        { inputFields2.map(inputField2 => (
                          <div >  

                            <div class="form-group row">
                                    <label
                                      class="col-sm-1 col-form-label" >Name:</label>
                                <div class="col-sm-5 mx-6">
                                    <Input
                                      class="form-control"
                                      id="nameSeminar"
                                      name="Name2"
                                      label="Name"
                                      variant="filled"
                                      placeholder="Lorem Seminar"
                                      value={inputField2.Name2}
                                      onChange={event => handleChangeInput2(inputField2.id, event)}
                                    />
                                    </div>
                            </div>
                              
                        
                        
                     
                      
                            <div class="form-group row">
                                    <label
                                      class="col-sm-1 col-form-label"
                                      
                                    >
                                    Date Taken:
                                    </label>
                                    <div class="col-sm-2 mx-6">
                                    <Input
                                       type="date"
                                      class="form-control"
                                      id="dateTaken"
                                      name="dateTaken2"
                                      label="Name"
                                      variant="filled"
                                      value={inputField2.dateTaken2}
                                      onChange={event => handleChangeInput2(inputField2.id, event)}
                                    />
                                    </div>
                           </div>    
                           <span class="d-flex flex-row-reverse mx-6"  >
                            <button type="button" class="btn btn-success" >Save</button>
                            </span>
 
                          </div>
                          )) }

                    {/* ---------------------------------------------------- */}
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">C. EMPLOYMENT HISTORY</h1>
                      </Col>
                   </Row>
                      {/* ---------------------------------------------------- */}

                   
                        
                        { inputFields3.map(inputField3 => (
                          <div >  

                            <div class="form-group row">
                                    <label
                                      class="col-sm-auto col-form-label" >Employer Name:</label>
                                <div class="col-sm-5 mx-5">
                                    <Input
                                      class="form-control"
                                      id="empName"
                                      name="empName"
                                      label="empName"
                                      variant="filled"
                                      placeholder="Lorem Inc"
                                      disabled
                                      value={inputField3.empName}
                                      onChange={event => handleChangeInput3(inputField3.id, event)}
                                    />
                                    </div>
                            </div>
                            <div class="form-group row">
                                    <label
                                      class="col-sm-auto col-form-label mr-2" >Address:</label>
                                <div class="col-sm-5 mx-7">
                                    <Input
                                      class="form-control"
                                      id="empAdd"
                                      name="empAdd"
                                      label="empAdd"
                                      variant="filled"
                                      placeholder="Lorem City"
                                      disabled
                                      value={inputField3.empAdd}
                                      onChange={event => handleChangeInput3(inputField3.id, event)}
                                    />
                                    </div>
                            </div>

                            <div class="form-group row">
                                    <label
                                      class="col-sm-auto col-form-label mr-2"
                                      
                                    >
                                    Telephone No.:
                                    </label>
                                    <div class="col-sm-3 mx-5">
                                    <Input
                                      class="form-control"
                                      id="empTelNo"
                                      name="empTelNo"
                                      label="empTelNo"
                                      variant="filled"
                                      placeholder="123-4567"
                                      disabled
                                      value={inputField3.empTelNo}
                                      onChange={event => handleChangeInput3(inputField3.id, event)}
                                    />
                                    </div>
                           </div>    

                           <div class="form-group row">
                                    <label
                                      class="col-sm-auto col-form-label mr-3"
                                      
                                    >
                                    Supervisor:
                                    </label>
                                    <div class="col-sm-3 mx-6">
                                    <Input
                                      class="form-control"
                                      id="empSuVisor"
                                      name="empSuVisor"
                                      label="empSuVisor"
                                      variant="filled"
                                      placeholder="Chad Wick"
                                      disabled
                                      value={inputField3.empSuVisor}
                                      onChange={event => handleChangeInput3(inputField3.id, event)}
                                    />
                                    </div>
                           </div>  
                           <div class="form-group row">
                                    <label
                                      class="col-sm-auto col-form-label "
                                      
                                    >
                                    Job Title:
                                    </label>
                                    <div class="col-sm-3" style={{marginLeft:110}}>
                                    <Input
                                      class="form-control"
                                      id="empTitle"
                                      name="empTitle"
                                      label="empTitle"
                                      variant="filled"
                                      placeholder="Lorem Engineer"
                                      disabled
                                      value={inputField3.empTitle}
                                      onChange={event => handleChangeInput3(inputField3.id, event)}
                                    />
                                    </div>
                           </div>  
                           <div class="form-group row">
                                    <label
                                      class="col-sm-auto col-form-label"
                                      
                                    >
                                    Starting Income:
                                    </label>
                                    <div class="col-sm-3 " style={{marginLeft:52}}>
                                    <Input
                                      class="form-control"
                                      id="empStartIncome"
                                      name="empStartIncome"
                                      label="empStartIncome"
                                      variant="filled"
                                      placeholder="12,0000"
                                      disabled
                                      value={inputField3.empStartIncome}
                                      onChange={event => handleChangeInput3(inputField3.id, event)}
                                    />
                                    </div>
                           </div>  
                           <div class="form-group row">
                                    <label
                                      class="col-sm-auto col-form-label"
                                      
                                    >
                                    Last Income:
                                    </label>
                                    <div class="col-sm-3" style={{marginLeft:80}}>
                                    <Input
                                      class="form-control"
                                      id="empLastIncone"
                                      name="empLastIncone"
                                      label="empLastIncone"
                                      variant="filled"
                                      placeholder="20,0000"
                                      disabled
                                      value={inputField3.empLastIncone}
                                      onChange={event => handleChangeInput3(inputField3.id, event)}
                                    />
                                    </div>
                           </div>  
                           <div class="form-group row">
                                    <label
                                      class="col-sm-auto col-form-label" >Reason for Leaving:</label>
                                <div class="col-sm-5 mx-4">
                                    <Input
                                      class="form-control"
                                      id="empRFL"
                                      name="empRFL"
                                      label="empRFL"
                                      variant="filled"
                                      placeholder="Shift in career"
                                      disabled
                                      value={inputField3.empRFL}
                                      onChange={event => handleChangeInput3(inputField3.id, event)}
                                    />
                                    </div>
                            </div>

                            <div class="form-group row">
                            <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-first-name"
                          >
                            Have you ever terminated in a job?
                          </label>
                          
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="terminated" id="inlineRadio1" value="option1" disabled/>
                            <label class="form-check-label" for="inlineRadio1">YES</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="terminated" id="inlineRadio2" value="option2" checked disabled/>
                            <label class="form-check-label" for="inlineRadio2">NO</label>
                          </div>
                            </div>
                          
                          <div class="form-group row">
                          <label
                            class="col-sm-auto col-form-label"
                            htmlFor="input-first-name"
                          >
                            If yes, state the reason:
                          </label>
                          <Col sm="10">
                        <FormGroup row>
                        
                          <Col>
                          <div className="pl-lg-0">
                                <FormGroup>
                                
                                  <Input
                                    className="form-control-alternative"
                                    rows="6"
                                    type="textarea"
                                    placeholder="--"
                                    disabled
                                  />
                                </FormGroup>
                          </div>
                          </Col >
                        </FormGroup>
                       </Col>
                          </div>
                          </div>
                          )) }

                       {/* ---------------------------------------------------- */}
                       <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">D. FAMILY BACKGROUND</h1>
                      </Col>
                   </Row>
                      {/* ---------------------------------------------------- */}

                      <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-nameFather"
                          >
                           Father's Name:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-nameFather"
                            type="text"
                            placeholder="Lorem Ipsum"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-occuFather"
                          >
                           Occupation:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-last-occuFather"
                            type="text"
                            placeholder="Lorem Ipsum"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-bdayFather"
                          >
                            Birthday:
                          </label>
                          <Col sm="4">
                          <Input
                            class="form-control"
                            id="input-bdayFather"
                            type="date"
                            disabled
                          />
                          </Col >
                          
                          <label
                            class="col-lr-1 col-form-label ml-7"
                            htmlFor="input-ageFather"
                          >
                            Age:
                          </label>
                          <Col sm="2">
                          <Input
                            class="form-control"
                            id="input-first-ageFather"
                            type="text"
                            placeholder="46"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>


                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-empFather"
                          >
                            Employer:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-empFather"
                            type="text"
                            placeholder="Lorem Inc."
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    
                      {/* ---------------------------------------------------- */}
                      <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5"></h1>
                      </Col>
                     </Row>
                     {/* ---------------------------------------------------- */}

                     <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-nameMother"
                          >
                           Mothers's Name:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-nameMother"
                            type="text"
                            placeholder="Lorem Ipsum"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-occuMother"
                          >
                           Occupation:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-occuMother"
                            type="text"
                            placeholder="--"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-birthdayMother"
                          >
                            Birthday:
                          </label>
                          <Col sm="4">
                          <Input
                            class="form-control"
                            id="input-birthdayMother"
                            type="date"
                            disabled
                          />
                          </Col >
                          
                          <label
                            class="col-lr-1 col-form-label ml-7"
                            htmlFor="input-ageMother"
                          >
                            Age:
                          </label>
                          <Col sm="2">
                          <Input
                            class="form-control"
                            id="input-ageMother"
                            type="text"
                            placeholder="46"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>


                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-empMother"
                          >
                            Employer:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-empMother"
                            type="text"
                            placeholder="--"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>


                    <Row>
                  
                       <Col sm="8">
                        <FormGroup row>
                          <label
                            class="col-sm-2 col-form-label  "
                            htmlFor="input-addMother"
                          >
                            Address:
                          </label>
                          <Col sm="9" >
                            <div class="mx-4">
                          <Input
                          
                            class="form-control"
                            id="input-addMother"
                            type="text"
                            placeholder="Lorem Street, Ipsum City"
                            disabled
                          />
                          </div>
                          </Col>
                        </FormGroup>
                      </Col>

                      <Col sm="4">
                        <FormGroup row >
                          <label
                            class="col-sm-4 col-form-label mr-3"
                            htmlFor="input-telMother"
                          >
                            Telephone No.:
                          </label>
                          <Col sm="6" >
                          <Input
                            class="form-control"
                            id="input-telMother"
                            type="text"
                            placeholder="1234567"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">BROTHERS & SISTERS</h1>
                      </Col>
                     </Row>

                 

                        { inputFields4.map(inputField4 => (
                          <div >  

                            <div class="form-group row">
                                    <label
                                      class="col-sm-1 col-form-label" >Name:</label>
                                <div class="col-sm-5 mx-6">
                                    <Input
                                      class="form-control"
                                      id="nameBrother"
                                      name="Name4"
                                      label="Name"
                                      variant="filled"
                                      placeholder="Lorem Ipsum"
                                      disabled
                                      value={inputField4.Name4}
                                      onChange={event => handleChangeInput4(inputField4.id, event)}
                                    />
                                    </div>
                            </div>
                              
                        
                        
                     
                      
                            <div class="form-group row">
                                    <label
                                      class="col-sm-1 col-form-label"
                                      
                                    >
                                    Occupation:
                                    </label>
                                    <div class="col-sm-3 mx-6">
                                    <Input
                                      class="form-control"
                                      id="occuBrother"
                                      name="occupation"
                                      label="Name"
                                      variant="filled"
                                      placeholder="--"
                                      disabled
                                      value={inputField4.occupation}
                                      onChange={event => handleChangeInput4(inputField4.id, event)}
                                    />
                                    </div>

                                  
                                    <label
                                      class="col-sm-auto col-form-label mx--1 "
                                     
                                    >
                                    Age:
                                    </label>
                                    <div class="col-sm-1" >
                                    <Input
                                      class="form-control"
                                      id="ageBrother"
                                      name="age"
                                      variant="filled"
                                      placeholder="15"
                                      disabled
                                      value={inputField4.age}
                                      onChange={event => handleChangeInput4(inputField4.id, event)}
                                    />
                                    </div>
                           </div>    

                           <div class="form-group row">
                                    <label
                                      class="col-sm-1 col-form-label" >Employer:</label>
                                <div class="col-sm-5 mx-6">
                                    <Input
                                      class="form-control"
                                      id="empBrother"
                                      name="emp"
                                      label="Name"
                                      variant="filled"
                                      placeholder="--"
                                      disabled
                                      value={inputField4.emp}
                                      onChange={event => handleChangeInput4(inputField4.id, event)}
                                    />
                                    </div>
                            </div>
 
                          </div>
                          )) }

                    
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">IF MARRIED</h1>
                      </Col>
                     </Row>

                     <Row>
                      <Col sm="6" >
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="nameSpouse"
                         
                          >
                            Name of Spouse:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="nameSpouse"
                            type="text"
                            placeholder="--"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>

                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="occuSpouse"
                          
                          >
                           Occupation:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="occuSpouse"
                            type="email"
                            placeholder="--"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="birthdaySpouse"
                          
                          >
                            Birthday:
                          </label>
                          <Col sm="4">
                          <Input
                            class="form-control"
                            id="birthdaySpouse"
                            type="date"
                            placeholder="--"
                            disabled
                          />
                          </Col >
                          
                          <label
                            class="col-lr-1 col-form-label ml-7"
                            htmlFor="ageSpouse"
                          >
                            Age:
                          </label>
                          <Col sm="2">
                          <Input
                            class="form-control"
                            id="ageSpouse"
                            type="text"
                            placeholder="--"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="empSpouse"
                          >
                            Employer Name:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="empSpouse"
                            type="text"
                            placeholder="--"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="8">
                        <FormGroup row>
                          <label
                            class="col-sm-2 col-form-label  "
                            htmlFor="addEmpSpouse"
                          >
                            Address:
                          </label>
                          <Col sm="9" >
                            <div class="mx-4">
                          <Input
                          
                            class="form-control"
                            id="addEmpSpouse"
                            type="text"
                            placeholder="--"
                            disabled
                          />
                          </div>
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5"></h1>
                      </Col>
                     </Row>

                   

                        { inputFields5.map(inputField5 => (
                          <div >  
                            <div class="form-group row">
                                    <label
                                      class="col-sm-auto col-form-label"
                                  
                                    >
                                    Name of Child:
                                    </label>
                                    <div class="col-sm-3 mx-5">
                                    <Input
                                    style={{marginLeft:10}}
                                      class="form-control"
                                      id="nameChild"
                                      name="Namechld"
                                      label="Name"
                                      variant="filled"
                                      placeholder="--"
                                      disabled
                                      value={inputField5.Namechld}
                                      onChange={event => handleChangeInput5(inputField5.id, event)}
                                    />
                                    </div>

                                  
                                    <label
                                      class="col-sm-auto col-form-label mx--1 "
                                      htmlFor="input-first-name"
                                    >
                                    Age:
                                    </label>
                                    <div class="col-sm-1" >
                                    <Input
                                      class="form-control"
                                      name="agechld"
                                      id="ageChild"
                                      variant="filled"
                                      placeholder="--"
                                      disabled
                                      value={inputField5.agechld}
                                      onChange={event => handleChangeInput5(inputField5.id, event)}
                                    />
                                    </div>
                           </div>    

 
                          </div>
                          )) }

                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">E. MEDICAL HISTORY</h1>
                      </Col>
                     </Row>

                     <Row>
                      <Col sm="9">
                        <FormGroup row>
                          <label
                            class="col-sm-4 col-form-label"
                            htmlFor="input-first-name"
                          >
                            1. Have you had or do you have illnesses?
                          </label>
                          <Col sm="8">
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="illnesses" id="inlineRadio3" value="option1" disabled/>
                            <label class="form-check-label" for="inlineRadio3">YES</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="illnesses" id="inlineRadio4" value="option2" checked disabled/>
                            <label class="form-check-label" for="inlineRadio4">NO</label>
                          </div>

                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>
                    <Row>
                      <Col sm="8">
                        <FormGroup row>
                          <label
                            class="col-sm-auto col-form-label"
                            htmlFor="details"
                          >
                            If yes, give details:
                          </label>
                          <Col>
                          <div className="pl-lg-0">
                                <FormGroup>
                                
                                  <Input
                                    class="form-control"
                                    id="details"
                                    rows="5"
                                
                                    type="textarea"
                                    disabled
                                  />
                                </FormGroup>
                          </div>
                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>

                    <Row>
                      <Col sm="12">
                        <FormGroup row>
                          <label
                            class="col-sm-5 col-form-label"
                            htmlFor="input-first-name"
                          >
                            2. Have you been hospitalized or under a doctor's care within the past 5 years?
                          </label>
                          <Col sm="3">
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="hospitalized" id="inlineRadio5" value="option1" disabled/>
                            <label class="form-check-label" for="inlineRadio5">YES</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="hospitalized" id="inlineRadio6" value="option2" checked disabled/>
                            <label class="form-check-label" for="inlineRadio6">NO</label>
                          </div>

                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>
                    <Row>
                      <Col sm="8">
                        <FormGroup row>
                          <label
                            class="col-sm-auto col-form-label"
                            htmlFor="details2"
                          >
                            If yes, give details:
                          </label>
                          <Col>
                          <div className="pl-lg-0">
                                <FormGroup>
                                
                                  <Input
                                    class="form-control"
                                    id="details2"

                                    rows="5"
                                
                                    type="textarea"
                                    disabled
                                  />
                                </FormGroup>
                          </div>
                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>
                    <Row>
                      <Col sm="12">
                        <FormGroup row>
                          <label
                            class="col-sm-5 col-form-label"
                            htmlFor="input-first-name"
                          >
                            3. Last Medical Checkup
                          </label>
                      
                        </FormGroup>
                       </Col>
                    </Row>
                    <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-purpose"
                          >
                            Purpose:
                          </label>
                          <Col sm="8">
                          <Input
                          style={{marginLeft:13}}
                            class="form-control"
                            id="input-purpose"
                            type="text"
                            placeholder="--"
                            disabled
                            
                          />
                          </Col >
                        </FormGroup>
                       </Col>
                      
                    </Row>
                    <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-place"
                          >
                            Place:
                          </label>
                          <Col sm="8">
                          <Input
                           style={{marginLeft:13}}
                            class="form-control"
                            id="input-place"
                            type="text"
                            placeholder="--"
                            disabled
                            
                          />
                          </Col >
                        </FormGroup>
                       </Col>
                      
                    </Row>
                    <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                          
                            class="col-sm-3 col-form-label"
                            htmlFor="input-dateCheckUp"
                          >
                            Date:
                          </label>
                          <Col sm="8">
                          <Input
                           style={{marginLeft:13}}
                            class="form-control"
                            id="input-dateCheckUp"
                            type="date"
                            placeholder="--"
                            disabled
                            
                          />
                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>

                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5"></h1>
                      </Col>
                     </Row>

                     <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-auto col-form-label  "
                            htmlFor="input-distMarks"
                          >
                            4. Distinguishing Marks:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-distMarks"
                            type="text"
                            placeholder="--"
                            disabled
                            
                          />
                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>
                    {/* -------------------------------------------- */}
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">F. References</h1>
                      </Col>
                     </Row>
                     {/* -------------------------------------------- */}

                    

                        { inputFields6.map(inputField6 => (
                          <div >  
                            <div class="form-group row">
                                    <label
                                      class="col-sm-1 col-form-label"
                                     
                                    >
                                    Name :
                                    </label>
                                    <div class="col-sm-4 mx-6">
                                    <Input
                                      class="form-control"
                                      id="nameRef"
                                      name="Nameref"
                                      label="Name"
                                      variant="filled"
                                      placeholder="Lorem Ipsum"
                                      disabled
                                      value={inputField6.Nameref}
                                      onChange={event => handleChangeInput6(inputField6.id, event)}
                                    />
                                    </div>
                           </div> 
                           <div class="form-group row">
                                    <label
                                      class="col-sm-1 col-form-label"
                                   
                                    >
                                    Occupation :
                                    </label>
                                    <div class="col-sm-4 mx-6">
                                    <Input
                                      id="occRef"
                                      class="form-control"
                                      name="occref"
                                      label="Name"
                                      variant="filled"
                                      placeholder="Lorem Ipsum"
                                      disabled
                                      value={inputField6.occref}
                                      onChange={event => handleChangeInput6(inputField6.id, event)}
                                    />
                                    </div>
                           </div>
                           <div class="form-group row">
                                    <label
                                      class="col-sm-1 col-form-label"
                                  
                                    >
                                    Employer :
                                    </label>
                                    <div class="col-sm-4   mx-6">
                                    <Input
                                      id="empRef"
                                      class="form-control"
                                      name="empref"
                                      label="Name"
                                      variant="filled"
                                      placeholder="Lorem Ipsum"
                                      disabled
                                      value={inputField6.empref}
                                      onChange={event => handleChangeInput6(inputField6.id, event)}
                                    />
                                    </div>
                           </div>         

 
                          </div>
                          )) }


                    {/* -------------------------------------------- */}
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">G. ORGANIZATIONS</h1>
                      </Col>
                     </Row>
                     {/* -------------------------------------------- */}
                   

                        { inputFields7.map(inputField7 => (
                          <div >  
                            <div class="form-group row">
                                    <label
                                      class="col-sm-auto col-form-label"
                                 
                                    >
                                    Organization Name :
                                    </label>
                                    <div class="col-sm-6 mx-2">
                                    <Input
                                      id="nameOrg"
                                      class="form-control"
                                      name="NameOrg"
                                      label="Name"
                                      variant="filled"
                                      placeholder="Lorem Ipsum"
                                      disabled
                                      value={inputField7.NameOrg}
                                      onChange={event => handleChangeInput7(inputField7.id, event)}
                                    />
                                    </div>
                           </div> 
                           <div class="form-group row">
                                    <label
                                      class="col-sm-auto col-form-label"
                                   
                                    >
                                    Description :
                                    </label>
                                    <div class="col-sm-6">
                                    <Input
                                    style={{marginLeft:67}}
                                      id="descOrg"
                                      class="form-control"
                                      name="descOrg"
                                      label="Name"
                                      variant="filled"
                                      placeholder="Lorem Ipsum"
                                      disabled
                                      value={inputField7.descOrg}
                                      onChange={event => handleChangeInput7(inputField7.id, event)}
                                    />
                                    </div>
                           </div>
                          </div>
                          )) }




                    <Row>
                      <Col sm="12">
                        <FormGroup row>
                          <label
                            class="col-sm-6 col-form-label"
                            htmlFor="input-first-name"
                          >
                            1. Have you ever been convicted, judicially or administratively of an offense or judicially declared 
                              insolvent, spendthrift, or incapacitated to contract? 
                          </label>
                          <Col sm="3">
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="convicted" id="inlineRadio7" value="option1" disabled/>
                            <label class="form-check-label" for="inlineRadio7">YES</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="convicted" id="inlineRadio8" value="option2" disabled checked/>
                            <label class="form-check-label" for="inlineRadio8">NO</label>
                          </div>

                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>

                 
                        { inputFields8.map(inputField8 => (
                          <div >  
                            <div class="form-group row">
                                    <label
                                      class="col-sm-auto col-form-label"
                                      
                                    >
                                    Nature of Offense:
                                    </label>
                                    <div class="col-sm-6 mx-3">
                                    <Input
                                      class="form-control"
                                      name="NatureOff"
                                      label="Name"
                                      variant="filled"
                                      placeholder="--"
                                      disabled
                                      value={inputField8.NatureOff}
                                      onChange={event => handleChangeInput8(inputField8.id, event)}
                                    />
                                    </div>
                           </div> 
                           <div class="form-group row">
                                    <label
                                      class="col-sm-auto col-form-label"
                                    
                                    >
                                    Court of Jurisdiction :
                                    </label>
                                    <div class="col-sm-6 ">
                                    <Input
                                   
                                      class="form-control"
                                      name="courtJuri"
                                      label="Name"
                                      variant="filled"
                                      placeholder="--"
                                      disabled
                                      value={inputField8.courtJuri}
                                      onChange={event => handleChangeInput8(inputField8.id, event)}
                                    />
                                    </div>
                           </div>
                           <div class="form-group row">
                                    <label
                                      class="col-sm-auto col-form-label"
                                     
                                    >
                                    Date Filed :
                                    </label>
                                    <div class="col-sm-6 mx-6">
                                    <Input
                                      class="form-control"
                                      name="dateFiled"
                                      label="Name"
                                      variant="filled"
                                      type='date'
                                      placeholder="--"
                                      disabled
                                      value={inputField8.dateFiled}
                                      onChange={event => handleChangeInput8(inputField8.id, event)}
                                    />
                                    </div>
                           </div>
                          </div>
                          )) }

                    <Row>
                      <Col sm="12">
                        <FormGroup row>
                          <label
                            class="col-sm-6 col-form-label"
                            htmlFor="input-first-name"
                          >
                            2. Have you had a record of any denial of registration, or termination for cause, and of any disciplinary 
                            action taken, or sanction imposed, upon by agency, or by any exchange including any finding that 
                            you were a cause of any disciplinary action or had violated any law?

                          </label>
                          <Col sm="3">
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="termination" id="inlineRadio9" value="option1" disabled/>
                            <label class="form-check-label" for="inlineRadio9">YES</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="termination" id="inlineRadio10" value="option2" disabled checked/>
                            <label class="form-check-label" for="inlineRadio10">NO</label>
                          </div>

                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>

                    <Row>
                      <Col sm="12">
                        <FormGroup row>
                          <label
                            class="col-sm-6 col-form-label"
                            htmlFor="input-first-name"
                          >
                            3. Have you had a record of any denial, suspension, expulsion or revocation of any registration of a 
                            broker or dealer with which you were associated in any capacity when such action was taken?
                          </label>
                          <Col sm="3">
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="denial" id="inlineRadio11" value="option1" disabled/>
                            <label class="form-check-label" for="inlineRadio11">YES</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="denial" id="inlineRadio12" value="option2" disabled checked/>
                            <label class="form-check-label" for="inlineRadio12">NO</label>
                          </div>

                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>

                    <Row>
                      <Col sm="12">
                        <FormGroup row>
                          <label
                            class="col-sm-6 col-form-label"
                            htmlFor="input-first-name"
                          >
                            4. Have you had a record of any permanent or temporary injunction entered against you or any broker 
                            or dealer with which you were associated in any capacity at the time such injunction was entered?
                          </label>
                          <Col sm="3">
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="injunction" id="inlineRadio13" value="option1" disabled/>
                            <label class="form-check-label" for="inlineRadio13">YES</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="injunction" id="inlineRadio14" value="option2" disabled checked/>
                            <label class="form-check-label" for="inlineRadio14">NO</label>
                          </div>

                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>

                    <Row>
                      <Col sm="12">
                        <FormGroup row>
                          <label
                            class="col-sm-6 col-form-label"
                            htmlFor="input-first-name"
                          >
                            5. Have you had a record of any arrest or indictment for any felony, or any misdemeanor pertaining to 
                            securities, commodities, banking, insurance or real estate, fraud, false statements or omissions, 
                            wrongful taking of property or bribery, forgery, counterfeiting or extortion, and the disposition of the 
                            foregoing?
                          </label>
                          <Col sm="3">
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="indictment" id="inlineRadio15" value="option1" disabled/>
                            <label class="form-check-label" for="inlineRadio15">YES</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="indictment" id="inlineRadio16" value="option2" disabled checked/>
                            <label class="form-check-label" for="inlineRadio16">NO</label>
                          </div>

                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>
{/* ---------------------------------------------------- */}
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">IN CASE OF EMERGENCY, PLEASE NOTIFY:</h1>
                      </Col>
                     </Row>
{/* --------------------------------------------------- */}

                    <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-emerName"
                          >
                            Name:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-emerName"
                            type="text"
                            placeholder="Lorem Ipsum"
                            disabled
                            
                          />
                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>
                    <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-emerRelation"
                          >
                            Relationship:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-emerRelation"
                            type="text"
                            placeholder="Father"
                            disabled
                            
                          />
                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>

                    <Row>
                      <Col sm="7">
                        <FormGroup row>
                          <label
                            class="col-sm-auto col-form-label mr-7"
                            htmlFor="input-emerAdd"
                          >
                            Address:
                          </label>
                          <Col sm="9">
                          <Input
                            class="form-control"
                            id="input-emerAdd"
                            type="text"
                            placeholder="Lorem Ipsum City"
                            disabled
                            style={{marginLeft:2}}
                            
                          />
                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>

                    <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-emerNum"
                          >
                            Phone Number:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-emerNumv"
                            type="text"
                            placeholder="1234-5678"
                            disabled
                            
                          />
                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>

                    {/* ---------------------------------------------------- */}
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">IMPORTANT NOTICE:</h1>
                      </Col>
                     </Row>
                    {/* --------------------------------------------------- */}


                    <Row>
                      <Col sm="12">
                        <FormGroup row>
                          <label
                            class="col-sm-6 col-form-label"
                            htmlFor="input-first-name"
                          >
                           I hereby certify that all information given above are true and correct to the best of my knowledge and belief and fully 
                           understand that any false statement herein, upon discovery thereof, will be sufficient cause for my immediate 
                           separation from the service of the Company.

                          </label>
                     
                        </FormGroup>
                       </Col>
                    </Row>


                    
                    {/* ---------------------------------------------------- */}
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5"></h1>
                      </Col>
                     </Row>
                    {/* --------------------------------------------------- */}

                  
                    
                 

                   
                  </div>
              
                </Form>
              </CardBody>
            </Card>



        
          </Col>
        </Row>


        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow mt-5">
              <CardHeader className="bg-white border-0" >
                <Row className="align-items-center">
                  <Col xs="8">
                    <h2 className="mb-0">Work Information</h2>
                  </Col>
                
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                
                  <div className="pl-lg-0">

                  <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-emerName"
                          >
                            Position:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-emerName"
                            type="text"
                            placeholder="UI / UX Designer"
                          />
                          </Col >
                        </FormGroup>
                     </Col>
                  </Row>
                  <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-emerName"
                          >
                            Supervisor:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-emerName"
                            type="text"
                            placeholder="JOHN JOSHUA DOE"
                          />
                          </Col >
                        </FormGroup>
                     </Col>
                  </Row>
                  <div class="form-group row">
                          <label
                            class="col-sm-auto col-form-label mr-4 "
                            htmlFor="input-first-name"
                          >
                            Responsibilities:
                          </label>
                          <Col sm="10">
                       
                        
                          <Col>
                          <div >
                                  <Input
                                    style={{marginLeft:5}}
                                    class="form-control " 
                                    rows="6"
                                    type="textarea"
                                    placeholder=" - Create user-friendly interfaces
                                                 - Conduct user research
                                                 - Create user personas"
                                  />
                               
                          </div>
                          </Col >
                        
                       </Col>
                  </div>
                  <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-emerName"
                          >
                            Leave Counts:
                          </label>
                          <Col sm="3">
                          <Input
                            class="form-control"
                            id="input-emerName"
                            type="number"
                            placeholder="15"
                          />
                           {/* <MDBInput class="form-control"  type="number" /> */}
                          </Col >
                        </FormGroup>
                     </Col>
                  </Row>
                  <span class="d-flex flex-row-reverse mx-7"  >
                        <button type="button" class="btn btn-success" >Save</button>
                  </span>
                  </div>
              
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>


        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow mt-5">
              <CardHeader className="bg-white border-0" >
                <Row className="align-items-center">
                  <Col xs="8">
                    <h2 className="mb-0">Payroll Information</h2>
                  </Col>
                
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                
                  <div className="pl-lg-0">
                  <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-tin"
                          >
                            Current Salary:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-tin"
                            type="text"
                            placeholder="PHP18,000.00"
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                  <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-tin"
                          >
                            TIN:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-tin"
                            type="text"
                            placeholder="1234567879"
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-pagibig"
                          >
                            Pag-ibig Fund No.:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-pagibig"
                            type="text"
                            placeholder="1234567879"
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-sss"
                          >
                            SSS No:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-sss"
                            type="text"
                            placeholder="1234567879"
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-philHealth"
                          >
                            PhilHealth No.:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-philHealth"
                            type="text"
                            placeholder="1234567879"
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>


                         {/* ---------------------------------------------------- */}
                         <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5"></h1>
                      </Col>
                   </Row>
                      {/* ---------------------------------------------------- */}


                      { inputFields9.map(inputField9 => (
                            <div>
                                
                          
                        
                           <div>
                           <img src={Line42} alt="Line42" style={{position:'absolute', height:275, top:380}} />
                           <img src={Ellipse10} alt="Ellipse10" style={{position:'absolute', right:1528,marginTop:12, }} />
                           <button type="button"  data-toggle="modal" data-target="#exampleModalCenter"><img src={AddTimeline}  style={{position:'absolute',marginTop:270, right:1529  }}/></button>
                


                            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLongTitle">Increase Salary</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true"></span>
                                    </button>
                                </div>
                                <div class="modal-body">
                              
                                <Row>
                                            <Col sm="12">
                                                <FormGroup row>
                                                <label
                                                    class="col-sm-auto col-form-label"
                                                    htmlFor="input-tin"
                                                >
                                                    Increase Amount:
                                                </label>
                                                <Col sm="9">
                                                <Input
                                                     name="amountInc"
                                                     label="amountInc"
                                                     variant="filled"
                                                    
                                                   
                                                />
                                                </Col>
                                                </FormGroup>
                                            </Col>
                              </Row>
                              <div class="form-group row">
                                            <label
                                                class="col-sm-auto col-form-label mr-5"
                                                htmlFor="input-first-name"
                                            >
                                                Description:
                                            </label>
                                        <Col sm="9">
                                            <FormGroup row>
                                            
                                            <Col>
                                                <div className="pl-lg-0">
                                               
                                                    
                                                    <Input
                                                        class="form-control mx-5"
                                                        rows="6"
                                                        type="textarea"
                                                       
                                                   
                                                    />
                                                   
                                                </div>
                                            </Col >
                                            </FormGroup>
                                        </Col>
                             </div>
                          
                                </div>
                                <div class="modal-footer">
                                   
                                    <button type="button" class="btn btn-success" data-dismiss="modal" onClick={handleAddFields9}>INCREASE SALARY</button>
                                </div>
                                </div>
                            </div>
                            </div>
                    </div> 
                           
                            <div class="form-group row">
                                    <label
                                      class="col-sm-auto col-form-label" style={{marginLeft:45}} >Previous Salary:</label>
                                <div class="col-sm-4">
                                    <Input
                                      class="form-control"
                                      id="prevSal"
                                      name="prevSal"
                                      label="prevSal"
                                      variant="filled"
                                      placeholder="PHP15,000.00"
                                      value={inputField9.prevSal}
                                      disabled
                                      onChange={event => handleChangeInput9(inputField9.id, event)}
                                    />
                                    </div>
                            </div>
                    
           
                            <div class="form-group row">
                                    <label
                                      class="col-sm-auto col-form-label" style={{marginLeft:45}} > Increase Amount:</label>
                                <div class="col-sm-4">
                                    <Input
                                     style={{marginLeft:-12}}
                                      class="form-control"
                                      id="amountInc"
                                      name="amountInc"
                                      label="amountInc"
                                      variant="filled"
                                      placeholder="PHP3,000.00"
                                      value={inputField9.amountInc}
                                      disabled
                                      onChange={event => handleChangeInput9(inputField9.id, event)}
                                    />
                                    </div>
                            </div>
                    
              

                            <div class="form-group row">    
                                    <label
                                      class="col-sm-auto col-form-label" style={{marginLeft:45}} >  Date of Increase:</label>
                                <div class="col-sm-4">
                                    <Input
                                     style={{marginLeft:-5}}
                                      class="form-control"
                                      id="DOI"
                                      name="DOI"
                                      label="DOI"
                                      variant="filled"
                                      placeholder="03/07/2021"
                                      value={inputField9.DOI}
                                      disabled
                                      onChange={event => handleChangeInput9(inputField9.id, event)}
                                    />
                                    </div>
                            </div>
                    
                  
                         <div class="form-group row">    
                                    <label
                                      class="col-sm-auto col-form-label" style={{marginLeft:45}} >  Description:</label>
                                <div class="col-sm-4">
                                    <Input
                                     style={{marginLeft:30}}
                                      class="form-control"
                                      id="descSal"
                                      name="descSal"
                                      label="descSal"
                                      variant="filled"
                                      placeholder="Promoted to Level 2 Position"
                                      value={inputField9.descSal}
                                      disabled
                                      onChange={event => handleChangeInput9(inputField9.id, event)}
                                    />
                                    </div>
                            </div>

                            </div>
                      )) }
                   
                    
                

                    <span class="d-flex flex-row-reverse mx-7"  >
                        <button type="button" class="btn btn-success" >Save</button>
                    </span>



                  </div>
              
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};


export default ManageRecords;
