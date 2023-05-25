import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const Problem2 = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [usModalOpen, setUSModalOpen] = useState(false);
    const [allContact,setAllContact] = useState([])
    const AllCustomButtonStyle = {
        backgroundColor: '#46139f',
        borderColor: '#46139f',
        color: 'white',
      };
      const USCustomButtonStyle = {
        backgroundColor: '#ff7f50',
        borderColor: '#ff7f50',
        color: 'white',
      };
    const handleModalOpen = () => {
      setModalOpen(true);
    };
  
    const handleModalClose = () => {
      setModalOpen(false);
    };

    const handleUSModalOpen = () => {
        setUSModalOpen(true);
      };
    
    const handleUSModalClose = () => {
        setUSModalOpen(false);
      };

    const switchUSButton  =()=>{
        fecthUSContact()
        setModalOpen(!modalOpen)
        setUSModalOpen(!usModalOpen)
    }
    const switchALLButton  =()=>{
        fecthAllContact()
        setModalOpen(!modalOpen)
        setUSModalOpen(!usModalOpen)
    }

    const fecthAllContact = async()=>{
        const response = await fetch('https://contact.mediusware.com/api/contacts?page=1',{
            method:'GET',
        })
        const data = await response.json()
        console.log(data.results)
        setAllContact(data)
    }

    const fecthUSContact = async()=>{
        const response = await fetch('https://contact.mediusware.com/api/country-contacts/United States?page=1',{
            method:'GET',
        })
        const data = await response.json()
        console.log(data.results)
        setAllContact(data)
    }

    useEffect(() => {
        fecthAllContact()
        fecthUSContact()
    }, []);
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button className="btn btn-lg btn-outline-primary" type="button" onClick={handleModalOpen}>
            All Contacts
          </button>
          <button className="btn btn-lg btn-outline-warning" type="button" onClick={handleUSModalOpen}>
            US Contacts
          </button>
        </div>
        {/* Model 1 */}
       
        <Modal show={modalOpen} onHide={handleModalClose} aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header>All Contact</Modal.Header>
      <Modal.Body>
      <table className="table table-striped ">
                        <thead>
                        <tr>
                            <th scope="col">Phone</th>
                            <th scope="col">Country</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
            allContact.map(({id,phone,country})=>{
                return <tr key={id}>
                    <td>{phone}</td>
                    <td>{country}</td>
                </tr>
            })
        }
                        </tbody>
                    </table>
      </Modal.Body>
      <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button style={AllCustomButtonStyle}>All Contacts</Button>
          <Button onClick={switchUSButton}  style={USCustomButtonStyle}>US Contacts</Button>
        </Modal.Footer>
    </Modal>

    {/* Model 2 */}

    <Modal show={usModalOpen} onHide={handleUSModalClose} aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header>US Contact</Modal.Header>
      <Modal.Body>
      <table className="table table-striped ">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Country</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
            allContact.map(({id,phone,country})=>{
                return <tr key={id}>
                    <td>{phone}</td>
                    <td>{country}</td>
                </tr>
            })
        }
                        </tbody>
                    </table>
     
      </Modal.Body>
      <Modal.Footer>
          <Button variant="secondary" onClick={handleUSModalClose}>
            Close
          </Button>
          <Button onClick={switchALLButton} style={AllCustomButtonStyle}>All Contacts</Button>
          <Button   style={USCustomButtonStyle}>US Contacts</Button>
        </Modal.Footer>
    </Modal>
      </div>
    </div>
  );
};

export default Problem2;
