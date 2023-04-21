import React from 'react';
import Form from 'react-bootstrap/Form';

const CountryList=(props) =>{
    const Api_URL = 'https://63e28fd23e12b1937642c05e.mockapi.io/WMIData';
    React.useEffect(() => {
        onSelect('');
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
    const onSelect = (countryName) => {
        //alert(countryName);
        props.setSelectedCountry(countryName);
    }
 
    const CntryList = props.cntry.map((row, index) => {
        if (index < 1) {
            return (<><Form.Group className="mb-3 wht-text" key="0" >
                <Form.Check type="radio" name="SelectCountry" label="All Country" value="" defaultChecked
                    onChange={(e) => onSelect("")} />
            </Form.Group><Form.Group className="mb-3 wht-text" key={index + 1} >
                    <Form.Check type="radio" name="SelectCountry" label={row} value={row}
                        onChange={(e) => onSelect(row)} />
                </Form.Group></>
            );
        } else {
            return (<Form.Group className="mb-3 wht-text" key={index + 1} >
                <Form.Check type="radio" name="SelectCountry" label={row} value={row}
                    onChange={(e) => onSelect(row)} />
            </Form.Group>
            );
        }

    });
  return (
    <>{CntryList}</>
  )
}
export default CountryList;