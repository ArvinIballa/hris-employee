import React, {useState, useRef, useEffect} from "react";

// reactstrap components
import 'bootstrap';



import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, 
    Container,Col, CardDeck,FormGroup, DropdownMenu,
    Input, CustomInput, Modal, ModalHeader, ModalBody, Label, ModalFooter
} from "reactstrap";

import { v4 as uuidv4 } from 'uuid';
// core components
import UserHeader from "components/Headers/UserHeader.js";
import AddTimeline from '../../assets/img/brand/AddTimeline.png';

function Memoform  ( props )  {
    const {
        buttonLabel,
        className
      } = props;
   //----------Memo---------------------
      const [input, setInput] = useState('');
      const [input2, setInput2] = useState('');
      const [input3, setInput3] = useState('');



      const handleChange = e => {
        setInput(e.target.value);
      };
      const handleChange2 = e => {
        setInput2(e.target.value);
      };
      const handleChange3 = e => {
        setInput3(e.target.value);
      };







      const handleSubmit = e => {
        e.preventDefault();
    
        props.onSubmit({
          id: Math.floor(Math.random() * 10000),
          text:  input,
          text2: input2,
          text3: input3,
          

        });
        setInput('');
        setInput2('');
        setInput3('');
      };
   //--------------------------------------------



      //----------MODAL---------------------
      const [modal, setModal] = useState(false);

      const toggle = () => setModal(!modal);
   //--------------------------------------------

   const [modalIsOpen, setModalisOpen] = useState(false);

   const open = () => setModalisOpen(!modalIsOpen);
  
  return (
    <>
      <UserHeader />
      {/* Page content */}
     
      <Container className="mt--9 " fluid>
      <div class="d-flex flex-row-reverse mx-1 mb-3">       
             <Button color="success" type="button"  data-toggle="modal" data-target="#exampleModalCenter"style={{marginTop:"50px", marginBottom: "10px"}}>Create memo</Button>
                


                            <form onSubmit={handleSubmit} class="modal fade needs-validation" novalidate id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title" id="exampleModalLongTitle">Create Memo</h1>
                                    <button type="button" onClick={open} class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true" style={{fontWeight: "bolder", color: "black"}}>X</span>
                                    </button>
                                    <Modal isOpen={modalIsOpen} toggle={open} centered >
                                        <ModalHeader style={{borderBottom: "2px solid #E5ECF3"}}><h2>Cancel Memo</h2></ModalHeader>
                                        <ModalBody>
                                            All changes will not be saved.<br/>
                                            Are you sure you want to cancel?
                                        </ModalBody>
                                        <ModalFooter style={{borderTop: "2px solid #E5ECF3"}}>
                                        <Button color="success" onClick={open}>Ok</Button>
                                        </ModalFooter>
                                    </Modal>
                                </div>
                                <div class="modal-body">
                              
                                <Row>
                                            <Col sm="12">
                                                <FormGroup row>
                                                <label
                                                    class="col-sm-auto col-form-label"
                                                    htmlFor="input-tin"
                                                >
                                                    Send to:
                                                </label>
                                                <Col sm="9">
                                                <Input
                                                    style={{marginLeft:76}}
                                                     name="sendTo"
                                                     label="sendTo"
                                                     variant="filled"
                                                     onChange={handleChange}
                                                     value={input}
                                                     required
                                                >
                                                
                                              
                                                </Input>
                                                
                                                
                                                <div class="dropdown" style={{position:'absolute', left:603, top:2, height:20}}>
                                                    <Button style={{height: "40px", width: "40px", borderRadius: "200px", backgroundColor: "#457B9D"}}class=" dropdown-toggle"  href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" >
                                                        <i className="ni ni-fat-add" style={{marginLeft: "-15px", marginTop: "-6px",fontSize: "30px", color: "white"}}></i>
                                                    </Button>
                                                        <DropdownMenu class="dropdown-menu" right >
                                                            <Label check style={{marginLeft: "30px"}}>
                                                            <Input type="checkbox" /> Everyone
                                                            </Label><br/>
                                                            <Label check style={{marginLeft: "30px"}}>
                                                            <Input type="checkbox" /> HR Department
                                                            </Label><br/>
                                                            <Label check style={{marginLeft: "30px"}}>
                                                            <Input type="checkbox" /> Admin
                                                            </Label><br/>
                                                            <Label check style={{marginLeft: "30px"}}>
                                                            <Input type="checkbox" /> IT Department
                                                            </Label>
                                                        </DropdownMenu>     
                                                </div>


                                                </Col>
                                                </FormGroup>
                                            </Col>
                              </Row>
                              <Row>
                                            <Col sm="12">
                                                <FormGroup row>
                                                <label
                                                    class="col-sm-auto col-form-label"
                                                    htmlFor="input-tin"
                                                >
                                                    Subject:
                                                </label>
                                                <Col sm="9">
                                                <Input
                                                style={{marginLeft:76}}
                                                     name="subj"
                                                     label="subj"
                                                     variant="filled"
                                                     onChange={handleChange2}
                                                     value={input2}
                                                     required
                                                    
                                                   
                                                />
                                                </Col>
                                                </FormGroup>
                                            </Col>
                              </Row>
                              <div class="form-group row">
                                            <label
                                                class="col-sm-auto col-form-label"
                                                for="validationCustom01"
                                            >
                                                Message:
                                            </label>
                                        <Col sm="9">
                                            <FormGroup row>         
                                            <Col>
                                                <div className="pl-lg-0">
                                                    <Input
                                                        style={{marginLeft:65}}
                                                        id="validationCustom01"
                                                        class="form-control"
                                                        name="messg"
                                                        label="messg"
                                                        rows="6"
                                                        type="textarea"
                                                        onChange={handleChange3}
                                                        value={input3}
                                                        required
                                                    />            
                                                </div>
                                            </Col >
                                            </FormGroup>
                                        </Col>

                                        <div  style={{marginLeft:425}}>
                                        <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" label="Upload Image" required/>
                                        </div>
                             </div>
                                </div>
                                <div class="modal-footer mx-4">
                                   
                                    <button type="submit" class="btn btn-success" data-dismiss="modal" onClick={handleSubmit} >SEND MEMO</button>
                                </div>
                                </div>
                            </div>
                            </form> 
      </div> 
     
      </Container>
      
    </>
  );
};


export default Memoform;
