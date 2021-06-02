
import React, {useState} from "react";

// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Button
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
     
            <form  class="modal fade needs-validation" novalidate id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                </form> 
      </div>

        <Row>
        <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0" style={{display:"flex"}}>
                <h2 className="mb-0" style={{color:"indigo"}}>Payslip Records</h2>
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
                    <th scope="col" style={{color: "indigo", height: "40px"}}>
                    <FormGroup check>
                        <Input type="checkbox" style={{marginTop: "-10px", height: "20px", width: "20px"}}/>
                    </FormGroup>

                    </th>
                    <th scope="col" style={{color: "indigo"}}></th>
                    <th scope="col" style={{color: "indigo"}}></th>
                    <th scope="col" style={{color: "indigo"}}></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> 
                        <FormGroup check>
                            <Input type="checkbox" style={{marginTop: "-10px", height: "20px", width: "20px"}}/>
                        </FormGroup>
                    </td>
                    <td>
                        <h3>Jane Doe</h3>
                        <span>HR Head</span>
                    </td>
                    <td>
                        <a href="/admin/empinbox"><span style={{color: "black"}}>Survey - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis orci sit amet metus...</span></a>
                    </td>
                    <td>7:00AM</td>
                    <td className="text-right">
                   
                    </td>
                  </tr>
                  <tr>
                    <td> 
                        <FormGroup check>
                            <Input type="checkbox" style={{marginTop: "-10px", height: "20px", width: "20px"}}/>
                        </FormGroup>
                    </td>
                    <td>
                        <h3>Jane Doe</h3>
                        <span>HR Head</span>
                    </td>
                    <td>
                        <a href="/admin/empinbox"><span style={{color: "black"}}>Promotion - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis orci sit amet metus...</span></a>
                    </td>
                    <td>7:00AM</td>
                    <td className="text-right">
                   
                    </td>
                  </tr>
                  <tr>
                    <td> 
                        <FormGroup check>
                            <Input type="checkbox" style={{marginTop: "-10px", height: "20px", width: "20px"}}/>
                        </FormGroup>
                    </td>
                    <td>
                        <h3>Jane Doe</h3>
                        <span>HR Head</span>
                    </td>
                    <td>
                        <a href="/admin/empinbox"><span style={{color: "black"}}>Survey - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis orci sit amet metus...</span></a>
                    </td>
                    <td>05/24/2021</td>
                    <td className="text-right">
                   
                    </td>
                  </tr>
                  <tr>
                    <td> 
                        <FormGroup check>
                            <Input type="checkbox" style={{marginTop: "-10px", height: "20px", width: "20px"}}/>
                        </FormGroup>
                    </td>
                    <td>
                        <h3>Jane Doe</h3>
                        <span>HR Head</span>
                    </td>
                    <td>
                        <a href="/admin/empinbox"><span style={{color: "black"}}>Survey - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis orci sit amet metus...</span></a>
                    </td>
                    <td>06/01/2021</td>
                    <td className="text-right">
                   
                    </td>
                  </tr>
                  <tr>
                    <td> 
                        <FormGroup check>
                            <Input type="checkbox" style={{marginTop: "-10px", height: "20px", width: "20px"}}/>
                        </FormGroup>
                    </td>
                    <td>
                        <h3>Jane Doe</h3>
                        <span>HR Head</span>
                    </td>
                    <td>
                        <a href="/admin/empinbox"><span style={{color: "black"}}>Survey - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis orci sit amet metus...</span></a>
                    </td>
                    <td>06/01/2021</td>
                    <td className="text-right">
                   
                    </td>
                  </tr>
                </tbody>

              </Table>
              <CardFooter className="py-4" style={{display: "flex"}}>
                <Button color="success">Mark As Read</Button>
                <Button color="danger" style={{marginRight: "680px"}}>Delete</Button>
                <nav aria-label="..." >
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
