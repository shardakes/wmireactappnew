import React from "react";
//import data from "../honda_wmi.json";
//import { Table } from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator'; 
import axios from "axios";

const Inventory = (props) => {

    const Api_URL = 'https://63e28fd23e12b1937642c05e.mockapi.io/WMIData';

    const [totalLen, setTotalLen] = React.useState(0);
    const [wmiData, setWmiData] = React.useState([]);
    //const [countryArr, setCountryArr] = React.useState([]);

    const [isError, setIsError] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const keys = ["Name", "WMI", "Country", "CreatedOn", "VehicleType"];

    //const countryFilter = props.selectedCountry;
    //const searchFilter = props.search;


    React.useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios.get(Api_URL)
            .then(res => {
                setWmiData(res.data);
                setIsError(false);
            }).catch(err => {
                console.log(isError);
                setIsError(true);
            }).finally(err => {
                setIsLoading(false);
            })
    }

    //setTotalLen(wmiData.length);
    const columns = [{
        dataField: 'Name',
        text: 'Name',
        //filter: textFilter()
    }, {
        dataField: 'WMI',
        text: 'WMI',
        sort: true
    }, {
        dataField: 'Country',
        text: 'Country'
    }, {
        dataField: 'CreatedOn',
        text: 'CreatedOn',
        sort: true
    }, {
        dataField: 'VehicleType',
        text: 'VehicleType'
    }];



    const displayArr = () => {
        if (props.selectedCountry === '' && props.search === '') {

            const filterArray = wmiData.filter(el =>
                (el.Name ? el.Name : '').toLocaleLowerCase().includes(props.search.toLocaleLowerCase()) ||
                (el.Country ? el.Country : '').toLocaleLowerCase().includes(props.search.toLocaleLowerCase()) ||
                (el.WMI ? el.WMI : '').toLocaleLowerCase().includes(props.search.toLocaleLowerCase()) ||
                (el.VehicleType ? el.VehicleType : '').toLocaleLowerCase().includes(props.search.toLocaleLowerCase())
            );
            //setTotalLen(wmiData.length);
            return (<BootstrapTable striped bordered hover size="sm" keyField='id' data={wmiData} columns={columns} 
            pagination={ paginationFactory() }  />);
        } else {
            const countryArray = wmiData.filter(a => (props.selectedCountry ? props.selectedCountry : '') === a.Country
            );
            let len = countryArray.length;
            if (len > 0) {
                const filterArray = countryArray.filter(el =>
                    (el.Name ? el.Name : '').toLocaleLowerCase().includes(props.search.toLocaleLowerCase()) ||
                    (el.Country ? el.Country : '').toLocaleLowerCase().includes(props.search.toLocaleLowerCase()) ||
                    (el.WMI ? el.WMI : '').toLocaleLowerCase().includes(props.search.toLocaleLowerCase()) ||
                    (el.VehicleType ? el.VehicleType : '').toLocaleLowerCase().includes(props.search.toLocaleLowerCase())
                );
                //setTotalLen(filterArray.length);
                return (<BootstrapTable striped bordered hover size="sm" keyField='id' data={filterArray} columns={columns} 
                pagination={ paginationFactory() } />);
            } else {
                const filterArray = wmiData.filter(el =>
                    (el.Name ? el.Name : '').toLocaleLowerCase().includes(props.search.toLocaleLowerCase()) ||
                    (el.Country ? el.Country : '').toLocaleLowerCase().includes(props.search.toLocaleLowerCase()) ||
                    (el.WMI ? el.WMI : '').toLocaleLowerCase().includes(props.search.toLocaleLowerCase()) ||
                    (el.VehicleType ? el.VehicleType : '').toLocaleLowerCase().includes(props.search.toLocaleLowerCase())
                );
                //setTotalLen(wmiData.length);
                return (<BootstrapTable striped bordered hover size="sm" keyField='id' data={filterArray} columns={columns} 
                pagination={ paginationFactory() } />);
            }


        }
    }

    return (
        <div> <header className="title-text headerContent topbar shadow bg-white center" ><h3>WMI Data - Honda </h3></header>
            <div className="alerttxt">{isLoading ? "LOADING..." : ""}
                {!isLoading && isError && <p>Opps! Something went wrong, Unable to add Todo</p>}
            </div>
            <div>{displayArr()}

            </div>
        </div>
    );
}
export default Inventory;