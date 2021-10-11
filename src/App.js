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
import picture1 from './images/desktop/image-woman-in-videocall.jpg'; 
import picture2 from './images/desktop/image-women-videochatting.jpg'; 
import picture3 from './images/desktop/image-men-in-meeting.jpg'; 
import picture4 from './images/desktop/image-man-texting.jpg'; 




function App() {
  return (
    <div className="App">
      <LandingPage>
        <Icon/>
        <Banner/>
        <TextIntroduction/>

        <Button id={"btn1"} className={"Button btn1"} version={<span> v1.3</span>}> 
          Download
        </Button>
        <Button id={"btn2"}className={"Button btn2"}> 
          What is it?
        </Button>
        <Bookmark id={"bookmark1"}number={"01"} />
        <Galery>
          <Picture src={picture1} alt={"une femme qui sourit devans son ordinateur"} />
          <Picture src={picture2} alt={"3 dammes agées regardant un telephone"} />
          <Picture src={picture3} alt={"un homme en appel vidéo sur son ordinateur"} />
          <Picture src={picture4} alt={"un homme souriant regardant son téléphone"} />
        </Galery>
        <TextPresentation/>
        <Footer>
          <Button id={"btn3"} className={"Button btn3"} version={<span> v1.3</span>}>
            Download
          </Button>
        </Footer>
      </LandingPage>
    </div>
  );
}

export default App;
