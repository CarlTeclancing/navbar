import Header from './components/Header'
import Bio from './components/Bio'
import Acces from './components/Acces'
import Work from './components/Work'
import Trust from './components/Trust'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
        <Header 
            title = 'A history of everything you copy'
            text= "clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices."
            >

        </Header>
        <Bio/>
        <Acces/>
        <Work />
        <Trust />
        <Header 
            title = 'Clipboard for iOS and Mac OS'
            text= "Available for free on the App Store. Download for Mac or iOS, sync with iCloud and <br> you're ready to start adding to your clipboard"
            >

        </Header>
        <Footer />
    </div>
  );
}

export default App;
