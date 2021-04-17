
import Navbar  from './components/navbar.js'
import Footer from './components/footer.js'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import EmployeeList from './components/EmployeeList.js';
import AddEmployee from './components/AddEmployee.js';
import UpdateEmployee from './components/UpdateEmployee.js'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <div className="container">
          <Switch>
            <Route path="/"  exact component={EmployeeList}></Route>
            <Route path="/add/Employee" component={AddEmployee}></Route>
            <Route path="/update/Employee/:id" component={UpdateEmployee}></Route>
            
          </Switch>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
