import './App.css';
import LandingPage from './components/LandingPage';
import Icon from './components/Icon'
import Banner from './components/Banner'; 
import Bookmark from './components/Bookmark'; 
import Galery from './components/Galery';
import Picture from './components/Picture';  
import Footer from './components/Footer'; 
import Button from './components/Button'; 
import TextPresentation from './components/TextPresentation'
import TextIntroduction from './components/TextIntroduction';

function App() {
  return (
    <div className="App">
      <LandingPage>
        <Icon/>
        <Banner/>
        <TextIntroduction/>

        <Button className={"Button btn1"} version={<span> V1.3</span>}> 
          Download
        </Button>
        <Bookmark number={"#"} />
        <Galery>
          <Picture src={""} alt={"#"} />
          <Picture src={""} alt={"#"} />
          <Picture src={""} alt={"#"} />
          <Picture src={""} alt={"#"} />
        </Galery>
        <TextPresentation/>
        <Footer/>
      </LandingPage>
    </div>
  );
}

export default App;
