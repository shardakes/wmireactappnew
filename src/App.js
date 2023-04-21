import React from "react";
import "./Wmi.css";
import Inventory from "./component/Inventory";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';

import { Container, Row, Col } from "react-bootstrap";
import SideBar from "./component/SideBar";

function App() {
 const [selectedCountry, setSelectedCountry] = React.useState("");
 const [search,setSearch]=React.useState("");
 //setSelectedCountry("All");
 //const [name, setName] = React.useState("");

  return (
    <div className="mainbody">
    <Container className="main" fluid>
        <Row  id="content-wrapper">
            <Col xs={2} className="bgSidebar"> 
            {<SideBar 
            setSelectedCountry={setSelectedCountry}
             selectedCountry={selectedCountry}
             search={search}
             setSearch={setSearch}
             />}</Col>
            <Col xs={10}>
              { <Inventory selectedCountry={selectedCountry} search={search} />}</Col> 

        </Row>
    </Container></div>
  );
}

export default App;
