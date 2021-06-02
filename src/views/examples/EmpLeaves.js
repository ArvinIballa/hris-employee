
import React, {useState} from "react";

// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row,
  Modal, 
  ModalHeader, 
  ModalBody, 
  Button,
  ModalFooter,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  CustomInput,
} from "reactstrap";

// core components
import Header from "components/Headers/Header.js";

      

   



const EmpLeaves = () => {

       //----------MODAL---------------------
       const [modal, setModal] = useState(false);

       const toggle = () => setModal(!modal);
    //--------------------------------------------
 
    const [modalIsOpen, setModalisOpen] = useState(false);
 
    const open = () => setModalisOpen(!modalIsOpen);

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
      <div class="d-flex flex-row-reverse mx-1 mb-3">     
      <Button color="success" type="button"  data-toggle="modal" data-target="#exampleModalCenter"style={{ marginBottom: "10px"}}>File Leave</Button>
      <form  class="modal fade needs-validation" novalidate id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title" id="exampleModalLongTitle">File Leave</h1>
                                    <button type="button" onClick={open} class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true" style={{fontWeight: "bolder", color: "black"}}>X</span>
                                    </button>
                                    <Modal isOpen={modalIsOpen} toggle={open} centered >
                                        <ModalHeader ><h2>Success!!</h2></ModalHeader>
                                        <ModalBody>
                                            Leave has been filed.
                                            
                                        </ModalBody>
                                        <ModalFooter >
                                        <Button color="success" onClick={open}>Ok</Button>
                                        </ModalFooter>
                                    </Modal>
                                </div>
                                <div class="modal-body">
                              
                                <Row>
                                            <Col sm="12">
                                                <FormGroup row>
                                                <label
                                                    class="col-sm-3 col-form-label"
                                                    htmlFor="input-leave"
                                                >
                                                    Leave:
                                                </label>
                                                <Col sm="4">
                                            
                                                    <Input type="select" name="select" id="input-leave">
                                                    <option selected>Whole Day Leave</option>
                                                    <option>Half Day Leave</option>
                                                    </Input>
                                              
                                                </Col>
                                                </FormGroup>
                                            </Col>
                                </Row>
                                <Row>
                                            <Col sm="12">
                                                <FormGroup row>
                                                <label
                                                    class="col-sm-3 col-form-label"
                                                    htmlFor="input-leavetype"
                                                >
                                                    Leave Type:
                                                </label>
                                                <Col sm="4">
                                            
                                                    <Input type="select" name="select" id="input-leavetype">
                                                    <option selected>Vacation Leave</option>
                                                    <option>Sick Leave</option>
                                                    <option>Emergency Leave</option>
                                                    </Input>
                                               
                                                </Col>
                                                </FormGroup>
                                            </Col>
                                </Row>
                                <Row>
                                            <Col sm="12">
                                                <FormGroup row>
                                                <label
                                                    class="col-sm-3 col-form-label"
                                                    htmlFor="input-date"
                                                >
                                                    Date:
                                                </label>
                                                <Col sm="4">
                                                <Input   
                                                        type="date"
                                                        name="date"
                                                        id="input-date"
                                                        placeholder="date placeholder"
                                                    />
                                                </Col>
                                                </FormGroup>
                                            </Col>
                              </Row>
                              <div class="form-group row">
                                            <label
                                                class="col-sm-2 col-form-label"
                                                for="validationCustom01"
                                            >
                                                Reason:
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
                                                     
                                                        required
                                                    />            
                                                </div>
                                            </Col >
                                            </FormGroup>
                                        </Col>
                             </div>
                                </div>
                                <div class="modal-footer mx-4">
                                   
                                    <button type="button" class="btn" data-dismiss="modal" aria-label="Close" style={{color:'white', backgroundColor:'#315A93'}} onClick={open} >FILE</button>
                                </div>
                                </div>
                            </div>
            </form> 
      </div>








        <Row>
        <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0" style={{display:"flex"}}>
                <h2 className="mb-0" style={{color:"indigo"}}>Leaves </h2>
                <Form className="navbar-search form-inline d-none d-md-flex ml-md-auto" style={{float:"right", color: "lightblue"}}>
                    <FormGroup className="mb-0">
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fas fa-search" style={{color: "lightblue"}} />
                          </InputGroupText>
                        </InputGroupAddon >
                        <Input placeholder="Search" type="text" style={{color: "lightblue"}}/>
                      </InputGroup>
                    </FormGroup>
                  </Form>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light" >
                  <tr >
                
                    <th scope="col" style={{color: "indigo"}}>LEAVE TYPE</th>
                    <th scope="col" style={{color: "indigo"}}>DATES FILED</th>
                    <th scope="col" style={{color: "indigo"}}>REMAINING LEAVES</th>
                    <th scope="col" style={{color: "indigo"}}>STATUS</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Vacation Leave</td>
                    <td>05/28/2021</td>
                    <td>10</td>
                    <td  >
                        <Badge style={{backgroundColor: "#E63946", color: "white"}}>DENIED-NEED MANPOWER</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Sick Leave</td>
                    <td>03/07/2021</td>
                    <td>5</td>
                    <td >
                      <Badge style={{backgroundColor: "#FF7D36", color: "white"}}>APPROVED BY SUPERVISOR</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Emergency Leave</td>
                    <td>04/30/2021</td>
                    <td>5</td>
                    <td>
                      <Badge style={{backgroundColor: "#52B788", color: "white"}}>APPROVED BY HR</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Sick Leave</td>
                    <td>05/20/2021</td>
                    <td>3</td>
                    <td>
                      <Badge style={{backgroundColor: "#315A93", color: "white"}}>Filed</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Vacation Leave</td>
                    <td>05/29/2021</td>
                    <td>3</td>
                    <td>
                      <Badge style={{backgroundColor: "#315A93", color: "white"}}>Filed</Badge>
                    </td>
                  </tr>
                </tbody>






              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
               
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                       
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                       
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
          
        </Row>
      </Container>
    </>
  );
};

export default EmpLeaves;
