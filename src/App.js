import './App.css';
import AddressBook from './components/address-book/AddressBook'
import Header from './components/address-book/Header';
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import Details from './components/details/Details'

function App() {
  return (
    <>
     <Header />
      <Router>
        <Switch>
          <Route path="/address-book" component={AddressBook}></Route>
          <Route path="/details" component={Details}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
