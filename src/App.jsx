import Counter from './Counter';
import './App.css'
import Batsman from './Batsman';
import Users from './Users';
import { Suspense } from 'react';
import Friends from './Friends';

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());


const fetchFriends = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

function App() {

  const friendsPromise = fetchFriends();

  function handleclick() {
    alert('I am click');
  }

  const handleClick3 = () => {
    alert('clicked 3')
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum)
  }

  return (
    <>

      <h3>Vite + React</h3>

      {/* <Suspense fallback={<h3>Loading....</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

      <Suspense fallback={<h2>Friends are coming for treat....</h2>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>



      <Batsman></Batsman>

      <Counter></Counter>


      {/* <button onclick="handleClick()">Click Me</button> */}
      <button onClick={handleclick}>Click Me</button>
      <button onClick={function handleClick2() {
        alert('Clicked 2')
      }}>Click Me2</button>

      <button onClick={handleClick3}>Click Me 3</button>
      <button onClick={() => {
        alert('click me 4')
      }}>Click Me 4</button>

      <button onClick={() => handleAdd5(10)}>click add 5</button>



    </>
  )
}

export default App
