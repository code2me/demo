import Dashboard from './components/Dashboard/Dashboard';
import ProjectSetup from './components/ProjectSetup/ProjectSetup';


import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import useToken from './Hooks/useToken';

const App = () => {
  const { token, setToken } = useToken();

  // if (!token) {
  //   return <Login setToken={setToken} />
  // }

  return (
      <Router>
      <div className="wrapper">
        <Routes>
          {/* <Route path='/' element={<Login />} /> */}
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/projectsetup' element={<ProjectSetup />} />

        </Routes>
      </div>
      </Router>
  );
}

export default App;
