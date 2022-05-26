import { useState } from 'react';
import { Success } from './components/Authenticate';
import { Forms } from './components/Forms';
import { Conditional} from './components/Conditional'
import { InlineEvent } from './components/InlineEvent';
import { Link, Route, Routes } from 'react-router-dom';
import axios from 'axios';

function Users(){
  let [users,setUsers] = useState([]);
  let handleClick = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {setUsers(res.data)})
    .catch(error => console.log(error))
  }
  return(<div>
    <h2>List all users from Fake UPI</h2>
    <button className = 'btn btn-secondary' onClick={handleClick}>Load</button>
    <table className='table table-strip'>
      <thead>
        <tr>
          <th>Id</th><th>Name</th><th>Username</th><th>Email</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((user,index) => <tr key= {index}>
            <td>{user.id}</td><td>{user.name}</td><td>{user.username}</td><td>{user.email}</td>
          </tr>)
        }
        
      </tbody>
    </table>
  </div>)
}
function App() {
 return (<div className = 'container-fluid'>
   <h2 className='text-center'>This is an example of router and Axios</h2>
   <hr />
   <div className='text-center'>
     <Link to = "/forms" >Forms</Link> |
     <Link to = "/conditionals">Conditional example</Link> |
     <Link to = "/inline">Inline example</Link> |
     <Link to = "/fetch">Users</Link>
   </div>
   <hr />
   <div className="container">
     <div className="row">
       <div className="col">
        <div class="p-3 mb-2 bg-secondary text-white"><h3>Profile pic</h3></div>
       </div>
       <div className="col">
        <div class="p-3 mb-2 bg-light text-dark">
        <h3>Content</h3>
        <Routes>
          <Route path = "/forms" element = {<Forms />} />
          <Route path = "/conditionals" element = {<Conditional />} />
          <Route path = "/inline" element = {<InlineEvent />} />
          <Route path = "/fetch" element = {<Users />} />
        </Routes>
        </div>
       </div>
       <div className="col">
        <div class="p-3 mb-2 bg-dark text-white"><h3>Additional details</h3></div>
       </div>
    </div>
  </div>
   
 </div>)
}

export default App;
