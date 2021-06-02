
import React, {useState} from "react";

// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
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
} from "reactstrap";

// core components
import Header from "components/Headers/Header.js";

      

   



const Maps = () => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    
    const [open, openModal] = useState(false);
    const toggs = () => openModal(!open);

    const [closeAll, setCloseAll] = useState(false);

    const toggleAll = () => {
        openModal(!open);
        setCloseAll(true);
      }

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
        <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0" style={{display:"flex"}}>
                <h2 className="mb-0" style={{color:"indigo"}}>Leaves Management</h2>
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
                    <th scope="col" style={{color: "indigo"}}>EMPLOYEE NUMBER</th>
                    <th scope="col" style={{color: "indigo"}}>NAME</th>
                    <th scope="col" style={{color: "indigo"}}>LEAVE TYPE</th>
                    <th scope="col" style={{color: "indigo"}}>DATES FILED</th>
                    <th scope="col" style={{color: "indigo"}}>REMAINING LEAVES</th>
                    <th scope="col" style={{color: "indigo"}}>STATUS</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">2021-ABC</th>
                    <td>RJ Lopez</td>
                    <td>Vacation Leave</td>
                    <td>06/02/2021</td>
                    <td>5</td>
                    <td  >
                        <Badge style={{backgroundColor: "#FB9400", color: "white"}}>APPROVED BY SUPERVISOR</Badge>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem onClick={toggle} data-toggle="modal">Mark As Unapproved
                          </DropdownItem>
                          <DropdownItem onClick={toggle}>Mark As Approved
                          </DropdownItem>
                          <Modal size="md"centered isOpen={modal} toggle={toggle} >
                            <ModalHeader style={{borderBottom: "2px solid #E5ECF3"}} stoggle={toggle} charCode="X"><h2>Confirmation</h2></ModalHeader>
                            <ModalBody style={{height: "100px"}}>
                                Are you sure you want to approve this leave?
                            </ModalBody>
                            <ModalFooter style={{borderTop: "2px solid #E5ECF3"}}>
                            <Button color="success" onClick={toggs}  data-dismiss="modal">Approve</Button>
                                 <Modal size="md"centered isOpen={open} toggle={toggs} onClosed={closeAll ? toggle : undefined} >
                                    <ModalHeader style={{borderBottom: "2px solid #E5ECF3"}} stoggle={toggs}><h2>Success!</h2></ModalHeader>
                                    <ModalBody style={{height: "100px"}}>
                                        Leave is mark as approved!
                                    </ModalBody>
                                    <ModalFooter style={{borderTop: "2px solid #E5ECF3"}}>
                                    <Button color="success" onClick={toggleAll} >Ok</Button>{' '}
                                    </ModalFooter>
                                </Modal>
                            </ModalFooter>
                           
                        </Modal>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                  <th scope="row">2021-ABC</th>
                    <td>RJ Lopez</td>
                    <td>Vacation Leave</td>
                    <td>06/02/2021</td>
                    <td>5</td>
                   
                    <td >
                      <Badge style={{backgroundColor: "green", color: "white"}}>APPROVED BY HR</Badge>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem href="icons">Mark As Approved
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                  <th scope="row">2021-ABC</th>
                    <td>RJ Lopez</td>
                    <td>Vacation Leave</td>
                    <td>06/02/2021</td>
                    <td>5</td>
                   
                   
                    <td>
                      <Badge style={{backgroundColor: "darkblue", color: "white"}}>Filed</Badge>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem href="icons">Mark As Approved
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
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

export default Maps;
