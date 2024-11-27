import { useContext } from 'react';
import ProfileCard from './Components/ProfileCard';
import UserForm from './Components/Userform';
import DataContext, { DataProvider } from './context/DataContext';
import './styles/global.css'; // Import the global CSS
import { Route, Routes, useNavigate} from 'react-router-dom';


function App() {
  const { finalData } = useContext(DataContext);
  return (
    <div className="App">
      <DataProvider>
        <header className="App-header">
          <h1>Creatify</h1>  {/* App name */}
          <p>Design Your Digital Presence</p> {/* Tagline or description */}
        </header>

        <Routes>  
          <Route exact path='/' element={<UserForm />} />    
          <Route exact path='/profile' element={<ProfileCard finalData={finalData}/>} />
        </Routes>  
      </DataProvider>
    </div>
  );
}

export default App;
