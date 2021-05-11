import logo from './logo.svg';
import './App.scss';
import HeaderSection from "./header/headerSection"
import LeftPanel from './LeftPanel/LeftPanel';
import RightPanel from './RightPanel/RightPanel';



function App() {

  return (
    <div className="App">
      <HeaderSection/>
      <div className="section-container-main">
          <LeftPanel />
          <RightPanel />
      </div>
    </div>
  );
}

export default App;
