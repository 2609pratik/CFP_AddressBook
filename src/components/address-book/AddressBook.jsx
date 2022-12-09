import { Component } from "react";
import "./AddressBook.css";
import AppBar from "@mui/material/AppBar";
import { Button, Card, CardContent } from "@mui/material";
import Stack from "@mui/material/Stack";
import CancelIcon from "@mui/icons-material/Cancel";
import TextField from "@mui/material/TextField";
import * as React from "react";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AddressBookService from "../../service/AddressBookService";

class AddressBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      address: "",
      phoneNumber: "",
      email: "",
      city: "",
      state: "",
      zipCode: "",
      isUpdate: false,
    };
  }

  // fetchData = (id) => {
  //   AddressBookService.getAddressBookById(id).then((response) => {
  //     this.setState({
  //       firstName: response.data.firstName,
  //       lastName: response.data.lastName,
  //       phoneNumber: response.data.phoneNumber,
  //       email: response.data.email,
  //       city: response.data.city,
  //       state: response.data.state,
  //       zip: response.data.zip,
  //       isUpdate: true,
  //     });
  //   });
  // };

  componentDidMount() {
    if (this.props.location.state) {
      this.fetchData(this.props.location.state.id);
    }
  }

  onValueChange = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();

    let person = {
      fullName: this.state.fullName,
      address: this.state.address,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email,
      city: this.state.city,
      state: this.state.state,
      zipCode: this.state.zipCode,
    };

    if (this.state.isUpdate) {
      AddressBookService.updateAddressBook(this.props.location.state.id, person)
        .then((response) => {
          console.log("Record updated Successfully!");
        })
        .catch(() => {
          console.log("Something went wrong! Record not updated");
        });
    } else {
      AddressBookService.addAddressBook(person)
        .then((response) => {
          console.log("Record added Successfully!");
        })
        .catch(() => {
          console.log("Something went wrong! Record not added");
        });
    }
  };

  onReset = () => {
    this.setState({
      fullName: "",
      address: "",
      phoneNumber: "",
      email: "",
      city: "",
      state: "",
      zipCode: "",
      isUpdate: false,
    });
  };
  render() {
    return (
      <>
        <Typography>
          <form
            action="#"
            className="form"
            aria-label="center"
            onSubmit={this.onSubmit}
            onReset={this.onReset}
          >
            <div className="App">
              <AppBar
                className="person-address-form"
                style={{
                  height: "60px",
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "65%",
                  margin: "0 auto",
                  borderTopLeftRadius: "5%",
                  borderTopRightRadius: "5%",
                }}
                position="static"
              >
                <div className="form-title">PERSON ADDRESS FORM</div>
                <div className="cancel-icon">
                  <CancelIcon
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      // justifyContent: "space-between",
                    }}
                    onClick={() => window.open("/details")}
                  />
                </div>
              </AppBar>
            </div>

            <div className="form-body">
              <Card
                className="card-details"
                style={{ height: "5%", width: "65%", margin: "auto" }}
              >
                <div className="inputbar">
                  <CardContent>
                    <div>
                      <TextField
                        onChange={this.onValueChange}
                        value={this.state.fullName}
                        type="text"
                        className="input"
                        id="fullName"
                        name="fullName"
                        required
                        label="Full Name"
                        style={{ width: "100%" }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>
                    <br />
                    <br />
                    <div>
                      <TextField
                        onChange={this.onValueChange}
                        value={this.state.address}
                        type="text"
                        id="address"
                        name="address"
                        required
                        style={{ width: "100%" }}
                        label="Address"
                      />
                    </div>
                    <br />
                    <br />
                    <Stack direction="row" spacing={2}>
                      <FormControl fullWidth>
                      <InputLabel id="city">Select City</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="city"
                          label="city"
                          onChange={this.onValueChange}
                          value={this.state.city}
                        >
                          <MenuItem value="nagpur">Nagpur</MenuItem>
                          <MenuItem value="pune">Pune</MenuItem>
                          <MenuItem value="mumbai">Mumbai</MenuItem>
                        </Select>
                      </FormControl>

                      <FormControl fullWidth>
                        <InputLabel id="state">Select State</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="state"
                          label="State"
                          onChange={this.onValueChange}
                          value={this.state.value}
                        >
                          <MenuItem value="MH">MH</MenuItem>
                          <MenuItem value="UP">UP</MenuItem>
                          <MenuItem value="MP">MP</MenuItem>
                        </Select>
                      </FormControl>
                      <div>
                        <TextField
                          onChange={this.onValueChange}
                          value={this.state.zipCode}
                          type="Number"
                          id="zipCode"
                          name="zipCode"
                          required
                          style={{ width: "100%" }}
                          label="ZipCode"
                        />
                      </div>
                    </Stack>
                    <br />
                    <div>
                      <TextField
                        onChange={this.onValueChange}
                        value={this.state.phoneNumber}
                        type="number"
                        id="phoneNumber"
                        name="phoneNumber"
                        required
                        style={{ width: "100%" }}
                        label="Phone no"
                      />
                    </div>
                  </CardContent>
                  <br />
                  <Stack
                    direction="row"
                    style={{ spacing: "25%" }}
                    justifyContent="space-around"
                  >
                    <Button
                      href="/details"
                      variant="outlined"
                      color="success"
                      onClick={this.onSubmit}
                    >
                      Add
                    </Button>
                    <Button
                      variant="outlined"
                      color="success"
                      onClick={this.onReset}
                    >
                      Reset
                    </Button>
                  </Stack>
                  <br />
                </div>
              </Card>
            </div>
          </form>
        </Typography>
      </>
    );
  }
}
export default AddressBook;
