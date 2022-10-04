
import './App.css';
import Form from './components/Form';
import Login from './components/Login'
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <div className='main'>
      <Routes>
      <Route path='/' element={<Form/>}/>
      <Route path='/login' element={ <Login/>}/>
      </Routes>
     

    

      </div>
    </div>
  );
}

export default App;
