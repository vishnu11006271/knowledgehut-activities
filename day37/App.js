import logo from './logo.svg';
import './App.css';

function NameItem(props) {
  return (<div>
    Hello {props.name}!
  </div>)
}
function App() {
  let users = [
    {name : 'Sachin', gender : 'Male', dob : '1978-04-24'}, 
    {name : 'Sourav', gender: 'Male', dob : '1977-05-22'},
    {name : 'Sony', gender: 'Female', dob : '1980-05-23'}
  ];
  let materials = [
    {item : 'aristocrat bag', imgurl : 'data:image/jpeg;base64,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'},
    {item : 'nothing', imgurl :'#'}

  ];
  return (
   <div className='container'><h1>This is grid bootstrap layout </h1>< hr/>
     <div className='row'>
       <div className='col'>
        <h1>First grid component</h1> <hr />
        <table className = 'table'>
        <thead>
        <tr>
          <th>Sl. No</th><th>Name</th><th>Gender</th><th>Dob</th><th>Buttons</th>
        </tr>
        </thead>
        <tbody>
        {
          users.map((user, index) => <tr key = {index}>
            <td>{index + 1}</td><td>{user.name}</td><td>{user.gender}</td><td>{user.dob}</td>
            <td><button className = 'btn btn-danger'>Delete</button></td>
          </tr>)
        }
      </tbody>
    </table>
    </div>
        <div className='col'>
        <h1>Second grid</h1> <hr />
        <table className = 'table'>
        <thead>
        <tr>
          <th>Sl. No</th><th>Name</th><th>Gender</th><th>Dob</th><th>Buttons</th>
        </tr>
        </thead>
        <tbody>
        {
          users.map((user, index) => <tr key = {index}>
            <td>{index + 1}</td><td>{user.name}</td><td>{user.gender}</td><td>{user.dob}</td>
            <td><button className = 'btn btn-primary'>Delete</button></td>
          </tr>)
        }
      </tbody>
    </table>
    <div className="alert alert-success" role="alert">
      A simple success alert—check it out!
    </div>
      </div>
    </div>
   </div>
  );
}

export default App;
