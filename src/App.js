import logo from './logo.svg';
import './App.css';
import Valid from './component/Valid';
import Countriestable from './component/Countriestable';

function App() {
  return (
    <div className='d-flex flex-colmn align-items-center'>
      {/* <Valid/> */}
      {/* <Registrationform/> */}
      <h1>React Datatable</h1>
      <Countriestable/>

      
    </div>
  );
}

export default App;