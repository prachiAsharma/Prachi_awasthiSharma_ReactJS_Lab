import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';
import ShowData from './components/ShowList';
import ExpenseTrackerForm from './components/ExpenseTrackerForm';
function App() {
  return (
    <div className="App">
     
     <Router>
           <Routes>
                 <Route path='/' element={< ExpenseTrackerForm onClose={() =>{}}/>}></Route>
                 <Route path='/home' element={< ShowData />}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
