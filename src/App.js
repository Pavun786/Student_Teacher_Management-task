import logo from './logo.svg';
import './App.css';
import './css/sb-admin-2.min.css'
import SideBar from './sidebar';
import TopBar from './Topbar';
import DashBoard from './dashboard';

import{BrowserRouter,Routes,Route} from "react-router-dom"
import CreateTeacher from './CreateTeacher';
import Login from './Login';
import Portal from './Portal';
import TeacherView from './TeacherView';
import EditTeacher from './EditTeacher';
import Students from './Students';
import StudentView from './StudentView';
import CreateStudent from './CreateStudent';
import Profile from './Profile';
import EditStudent from './EditStudent';
import Teacher from './Teacher';

function App() {
  return (
    
    <BrowserRouter>
    
  <Routes>  
      <Route path="/" element={<Login/>}/>
      <Route path="/portal" element={<Portal/>}>
         <Route path="dashboard" element={<DashBoard/>}/>
         <Route path="teachers" element={<Teacher/>}/>
         <Route path="teachers/:pavun" element={<TeacherView/>}/>
         <Route path="teachers/edit/:id" element={<EditTeacher/>}/>
         <Route path="createTeacher" element={<CreateTeacher/>}/>
         <Route path="students" element={<Students/>} />
         <Route path="students/:id" element={<StudentView/>} />
         <Route path="students/edit/:id" element={<EditStudent/>} />
         <Route path="createStudent" element={<CreateStudent/>}/>
         </Route> 
   </Routes> 
         
          </BrowserRouter>
  );
}

export default App;