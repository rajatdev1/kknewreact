import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {VscLibrary} from "react-icons/vsc"
import {MdDownloadForOffline} from 'react-icons/md';
import {AiFillPhone} from 'react-icons/ai';
import {BsFillCartFill} from 'react-icons/bs'

const Header = () => {
  return (
    <Container fluid style={{background: "#2dab90", color: "white", fontSize: "14px"}}>
      <Row style={{padding: "5px 0"}}>
       <Col><a style={{textDecorationLine: "none", color: "white"}} href="https://www.kopykitab.com/index.php?route=account/login"><VscLibrary style={{marginLeft: "290px", border: "1px solid white", padding: "4px", fontSize: "35px", borderRadius: "50%"}} /> My Library</a></Col>
        <Col className="header-left"> <a style={{textDecorationLine: "none", color: "white"}} href="https://content.kopykitab.com/eReader.html"> <MdDownloadForOffline style={{border: "1px solid white", gap: "5px", padding: "4px", fontSize: "35px", borderRadius: "50%"}} />Download eBook Reader</a>
        
      <a style={{textDecoration: 'none'}} href="https://stage.kopykitab.com/index.php?route=account/login"><div style={{border: "1px solid white", padding: "5px 10px",borderRadius: "8px",color: "white" , margin: "0 0 0 20px"}}>Login | Register</div></a>  
       <a href="https://stage.kopykitab.com/index.php?route=information/contact"> <AiFillPhone style={{border: "1px solid white", padding: "4px", fontSize: "35px", borderRadius: "50%",color: "white" ,margin: "0 0 0 20px"}} /></a>
       <a href="https://stage.kopykitab.com/index.php?route=checkout/checkout&is_login=true">  <BsFillCartFill style={{border: "1px solid white", padding: "4px", fontSize: "35px",color: "white" , borderRadius: "50%",margin: "0 0 0 20px"}}/></a>
        
        </Col>

        
      </Row>
    </Container>
  );
};

export default Header;
