import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, 
    Container,Col, CardDeck,FormGroup,
    Input, CustomInput, Form,InputGroup,InputGroupAddon,InputGroupText
} from "reactstrap";
import Header from "components/Headers/Header.js";
import hbd from '../../assets/img/brand/hbd.png';

function EmpMemos( props ) {
    return (
        <>
        <Header />
      
      
       
        <Container className="mt--9 " fluid>

        <Form className="navbar-search d-md-flex ml-md-auto" style={{float:"right", color: "lightblue"}}>
                    <FormGroup className="mt-0">
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fas fa-search" style={{color: "lightblue"}} />
                          </InputGroupText>
                        </InputGroupAddon >
                        <Input placeholder="Search" type="text" style={{color: "white"}}/>
                      </InputGroup>
                    </FormGroup>
        </Form>
      


    <Card style={{marginBottom:50,paddingBottom:40, backgroundColor:'#F1FAEE', display: "inline-grid", width:1575}}>
    <CardTitle tag="h2" style={{padding:30}}>TODAY</CardTitle>
       <Col xl="12">
            <CardDeck   style={{padding:30}}>
           
                        <Col xl='4'>
                            <Card style={{padding:25, height:400}}>
                            <CardTitle tag="h2">Happy Birthday, James Doe!</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">From: Janet Doe  <label class="d-flex flex-row-reverse "> {new Date().getMonth()}/{new Date().getDate()}/{new Date().getFullYear()} </label></CardSubtitle>
                            <CardImg top width="100%" src={hbd} alt="Card image cap"  />
                            <CardBody>
                            <CardText >Have a long and healthy life! We wish you more birthdays to come!</CardText>
                            </CardBody>
                            </Card>
                        </Col>

                        <Col xl='4'>
                            <Card style={{padding:25, height:400}}>
                            <CardTitle tag="h2">Happy Birthday, James Doe!</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">From: Janet Doe <label class="d-flex flex-row-reverse "> {new Date().getMonth()}/{new Date().getDate()}/{new Date().getFullYear()} </label></CardSubtitle>
                            <CardImg top width="100%" src={hbd} alt="Card image cap"  />
                            <CardBody>
                            <CardText >Have a long and healthy life! We wish you more birthdays to come!</CardText>
                            </CardBody>
                            </Card>
                        </Col>
     


                        <Col xl='4'>
                            <Card style={{padding:25, height:400}} >
                            <CardTitle tag="h2">Suspension of Work</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">From: Janet Doe <label class="d-flex flex-row-reverse "> {new Date().getMonth()}/{new Date().getDate()}/{new Date().getFullYear()} </label></CardSubtitle>
                   
                            <CardBody>
                            <CardText >Due to the storm that is occurring, work will be suspended until further notice. Take care and God bless!</CardText>
                            </CardBody>
                            </Card>
                        </Col>

             </CardDeck>


      
             </Col>
</Card>

<Card style={{marginBottom:50,paddingBottom:40, backgroundColor:'#F1FAEE', display: "inline-grid", width:1575}}>
    <CardTitle tag="h2" style={{padding:30}}>MARCH 8,2021</CardTitle>
       <Col xl="12">
            <CardDeck   style={{padding:30}}>
           
                        <Col xl='4'>
                            <Card style={{padding:25, height:400}}>
                            <CardTitle tag="h2">Happy Birthday, James Doe!</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">From: Janet Doe <label class="d-flex flex-row-reverse "> {new Date().getMonth()}/{new Date().getDate()}/{new Date().getFullYear()} </label></CardSubtitle>
                            <CardImg top width="100%" src={hbd} alt="Card image cap"  />
                            <CardBody>
                            <CardText >Have a long and healthy life! We wish you more birthdays to come!</CardText>
                            </CardBody>
                            </Card>
                        </Col>

                        <Col xl='4'>
                            <Card style={{padding:25, height:400}}>
                            <CardTitle tag="h2">Happy Birthday, James Doe!</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">From: Janet Doe <label class="d-flex flex-row-reverse "> {new Date().getMonth()}/{new Date().getDate()}/{new Date().getFullYear()} </label></CardSubtitle>
                            <CardImg top width="100%" src={hbd} alt="Card image cap"  />
                            <CardBody>
                            <CardText >Have a long and healthy life! We wish you more birthdays to come!</CardText>
                            </CardBody>
                            </Card>
                        </Col>
     


                        <Col xl='4'>
                            <Card style={{padding:25, height:400}} >
                            <CardTitle tag="h2">Suspension of Work</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">From: Janet Doe <label class="d-flex flex-row-reverse "> {new Date().getMonth()}/{new Date().getDate()}/{new Date().getFullYear()} </label></CardSubtitle>
                   
                            <CardBody>
                            <CardText >Due to the storm that is occurring, work will be suspended until further notice. Take care and God bless!</CardText>
                            </CardBody>
                            </Card>
                        </Col>

             </CardDeck>



      
             </Col>
</Card>

<Card style={{marginBottom:50,paddingBottom:40, backgroundColor:'#F1FAEE', display: "inline-grid", width:1575}}>
    <CardTitle tag="h2" style={{padding:30}}>MARCH 9,2021</CardTitle>
       <Col xl="12">
            <CardDeck   style={{padding:30}}>
           
                        <Col xl='4'>
                            <Card style={{padding:25, height:400}}>
                            <CardTitle tag="h2">Happy Birthday, James Doe!</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">From: Janet Doe <label class="d-flex flex-row-reverse "> {new Date().getMonth()}/{new Date().getDate()}/{new Date().getFullYear()} </label></CardSubtitle>
                            <CardImg top width="100%" src={hbd} alt="Card image cap"  />
                            <CardBody>
                            <CardText >Have a long and healthy life! We wish you more birthdays to come!</CardText>
                            </CardBody>
                            </Card>
                        </Col>

               

             </CardDeck>



      
             </Col>
</Card>

<Card style={{marginBottom:50,paddingBottom:40, backgroundColor:'#F1FAEE', display: "inline-grid", width:1575}}>
    <CardTitle tag="h2" style={{padding:30}}>MARCH 10,2021</CardTitle>
       <Col xl="12">
            <CardDeck   style={{padding:30}}>
           
                        <Col xl='4'>
                            <Card style={{padding:25, height:400}}>
                            <CardTitle tag="h2">Happy Birthday, James Doe!</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">From: Janet Doe <label class="d-flex flex-row-reverse "> {new Date().getMonth()}/{new Date().getDate()}/{new Date().getFullYear()} </label></CardSubtitle>
                            <CardImg top width="100%" src={hbd} alt="Card image cap"  />
                            <CardBody>
                            <CardText >Have a long and healthy life! We wish you more birthdays to come!</CardText>
                            </CardBody>
                            </Card>
                        </Col>

                        <Col xl='4'>
                            <Card style={{padding:25, height:400}}>
                            <CardTitle tag="h2">Happy Birthday, James Doe!</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">From: Janet Doe <label class="d-flex flex-row-reverse "> {new Date().getMonth()}/{new Date().getDate()}/{new Date().getFullYear()} </label></CardSubtitle>
                            <CardImg top width="100%" src={hbd} alt="Card image cap"  />
                            <CardBody>
                            <CardText >Have a long and healthy life! We wish you more birthdays to come!</CardText>
                            </CardBody>
                            </Card>
                        </Col>
     


                        <Col xl='4'>
                            <Card style={{padding:25, height:400}} >
                            <CardTitle tag="h2">Suspension of Work</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">From: Janet Doe <label class="d-flex flex-row-reverse "> {new Date().getMonth()}/{new Date().getDate()}/{new Date().getFullYear()} </label></CardSubtitle>
                   
                            <CardBody>
                            <CardText >Due to the storm that is occurring, work will be suspended until further notice. Take care and God bless!</CardText>
                            </CardBody>
                            </Card>
                        </Col>

             </CardDeck>

             <CardDeck   style={{padding:30}}>
           
                        <Col xl='4'>
                            <Card style={{padding:25, height:400}} >
                            <CardTitle tag="h2">Suspension of Work</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">From: Janet Doe <label class="d-flex flex-row-reverse "> {new Date().getMonth()}/{new Date().getDate()}/{new Date().getFullYear()} </label></CardSubtitle>
                   
                            <CardBody>
                            <CardText >Due to the storm that is occurring, work will be suspended until further notice. Take care and God bless!</CardText>
                            </CardBody>
                            </Card>
                        </Col>


             </CardDeck>


      
             </Col>
</Card>




        </Container>
        </>
    )
}

export default EmpMemos
