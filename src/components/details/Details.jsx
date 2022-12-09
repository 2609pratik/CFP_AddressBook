import React, { Component } from "react";
import "./Details.css";
import { Button } from "@mui/material";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import AddressBookService from "../../service/AddressBookService";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addressBookList: [],
    };
  }

  fetchData = () => {
    AddressBookService.getAllAddressBook().then((response) => {
      this.setState({
        addressBookList: response.data.dataObject,
      });
    console.log(response);
    });
  };

  componentDidMount() {
    this.fetchData();
  }

  updateRecord = (id) => {
    this.props.history.push(`/addressbook-form/${id}`, (id = { id }));
  };

  deleteRecord = (id) => {
    AddressBookService.deleteAddressBook(id).then(() => {
      window.location.reload();
    });
  };

  render() {
    return (
      <div className=" ">
        <div className="main-content">
          <div className="sub-header-content">
            <div className="person-detail-text">Person Details</div>
            <a  className=" " href="/address-book" >
              <Button variant="contained" style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                    }}
                     onClick={() => window.open('/details')} startIcon={<PersonAddAlt1Icon />}>
                Add User
              </Button>
              </a>
          </div>
          <div className="table-main">
            <table id="table-display" className="table">
                <tr>
                  <th>Full Name</th>
                  <th>Address</th>
                  <th>Phone Number</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Zip</th>
                  <th>Actions</th>
                </tr>
              {this.state.addressBookList.map((addBook) => (
                  <tbody>
                    <tr key={addBook.id}>
                      <td>{addBook.fullName}</td>
                      <td>{addBook.address}</td>
                      <td>{addBook.phoneNumber}</td>
                      <td>{addBook.city}</td>
                      <td>{addBook.state}</td>
                      <td>{addBook.zipCode}</td>
                      <td>
                        <DeleteOutlineIcon
                          onClick={() => this.deleteRecord(addBook.id)}
                        />
                        &nbsp;
                        <EditIcon
                          onClick={() => this.updateRecord(addBook.id)}
                        />
                      </td>
                    </tr>
                  </tbody>
                
              ))}
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
