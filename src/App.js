import './App.css';
import { TopInstruction } from './components/Instructions/Instructions';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <div className="App">
      <SideBar />
      <TopInstruction />
    </div>
  );
}

export default App;
