import Heading from './components/header/Heading'
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';
import './App.css'
function App() {
  return (
    <div className="App">
    <Heading></Heading>
    <Navbar></Navbar>
    <Sidebar></Sidebar>

    </div>
  );
}

export default App;
