import React from "react";
//import { Container, Row, Col } from "react-bootstrap";
import { AiFillDashboard } from "react-icons/ai";
import data from "../honda_wmi.json";

import CountryList from "./CountryList";

const SideBar = (props) => {
    const cntry = [];

    data.map((row, index) => {
        if (row.Country !== null) {

            let allCtry = cntry.includes(row.Country);
            if (allCtry !== true) {
                cntry.push(row.Country);

            }
        }
        return cntry;
    });

    return (
        <div >
            <div className="title headerContent topbar shadow"><AiFillDashboard />&nbsp; Search</div>
            <div>
                <input type="text" value={props.search} onChange={(e) => props.setSearch(e.target.value)} placeholder="Search" /><br />
            </div>
            <div className="title headerContent topbar shadow"><AiFillDashboard />&nbsp; Select Country</div>
            <div>
                <CountryList cntry={cntry} setSelectedCountry={props.setSelectedCountry} />
            </div>
        </div>
    );
}
export default SideBar;