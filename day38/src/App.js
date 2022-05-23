import logo from './logo.svg';
import './App.css';
import {useState} from 'react'; // useState is a hook
function User(props) {
  let [countLike, setLike] = useState(0); 
  let [countDislike, setDislike] = useState(0);

  let handleClick1 = (e) => {
    setLike(countLike+1);
  }
  let handleClick2 = (e) => {
    setDislike(countDislike+1);
  }
  return (<div>
    <h2>User component!</h2>
    <div>Likes: {countLike}, Dislike: {countDislike}</div>
    <div>
      <button onClick = {handleClick1}>LIKES</button>
      <button onClick = {handleClick2}>DISLIKES</button>
    </div>
  </div>)
}
function App() {
  return (
    <div className = 'container-fluid'>
      <h1>Understanding Events in Reactjs</h1>
      <User />
    </div>
  );
}

export default App;
