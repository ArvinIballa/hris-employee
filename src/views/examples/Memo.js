
import React, {useState} from 'react'
import {
    Card,  CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col,CardImg
} from "reactstrap";
import hbd from '../../assets/img/brand/hbd.png';

function Memo({ memos, completeMemo, removeMemo, updateMemo }) {
    const [edit, setEdit] = useState({
        id:null,
        value:''
    });




    return memos.map((memo, index) =>(
        
        <div className={memo.isComplete ? 'memo-column complete' : 'memo-column'}
        key={index} style={{marginLeft:60, marginBottom:20, display: "inline-grid"}} >
            

     
                        
                            <Col xl="12" style={{width: "450px"}}>
                                        <Card style={{padding:25}}>
                                        <CardTitle  key={memo.id} onClick={() => completeMemo(memo.id)} tag="h2">{memo.text2}</CardTitle>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted">From: Janet Doe  <label class="d-flex flex-row-reverse"> {new Date().getMonth()}/{new Date().getDate()}/{new Date().getFullYear()} </label></CardSubtitle>
                                        <CardImg top width="100%" src={hbd} alt="Card image cap"  />
                                  
                                        <CardBody>
                                        
                                        <CardText key={memo.id} onClick={() => completeMemo(memo.id)}>{memo.text3}</CardText>
                                        
                                        </CardBody>
                                        <span class="d-flex flex-row-reverse" >
                                        <Button class="btn-danger" style={{background:'#E63946', color:'white', marginTop: "30px"}} onClick={() => removeMemo(memo.id)}>Delete</Button>
                                        </span>
                                        </Card>     
                            </Col>
                      


            {/* <div key={memo.id} onClick={() => completeMemo(memo.id)}>
                {memo.text}
            </div>
            <div className='icons'>
                <button
                onClick={() => removeMemo(memo.id)}
                className='delete-icon'
                />
                <button
                onClick={() => setEdit({ id: memo.id, value: memo.text })}
                className='edit-icon'
                />
            </div> */}

        </div>

    )
) 
}

export default Memo;
