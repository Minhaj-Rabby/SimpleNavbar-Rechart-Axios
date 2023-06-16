import './App.css';
import AssignmentsMark from './components/AssignmentsMark/AssignmentsMark';
import AxiosCheck from './components/AxiosCheck/AxiosCheck';
import NavBar from './components/NavBar/NavBar';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className=" App justify-center items-center">
    <NavBar></NavBar>
    <Pricing></Pricing>
    <AssignmentsMark></AssignmentsMark>
    <AxiosCheck></AxiosCheck>
    </div>
  );
}

export default App;
