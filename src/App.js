
import './App.css';
import { Listing } from './components/Listing/Listing';
import  file from './components/etsy.json'

function App() {
  return (
    <>
    <Listing items={file} />
    </>
    
  );
}

export default App;
