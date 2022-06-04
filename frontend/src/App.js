import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import { useAuth } from "./context/AuthContext";
import ProtectedRoute from './auth/ProtectedRoute';
import Categories from './pages/category/Categories';
import Educations from './pages/education/Educations';
import Users from './pages/user/User';
import CreateCategory from './pages/category/CreateCategory';
import EditCategory from './pages/category/EditCategory';
import CreateEducation from './pages/education/CreateEducation';
import EditEducation from './pages/education/EditEducation';
import Statistics from './pages/statistic/Statistics';
import UserDetails from './pages/user/UserDetails';
import ProjectDetails from './pages/project/ProjectDetails';
import RedirectRoute from './auth/RedirectRoute';
function App() {


  return (

    <Router>
      <AuthProvider>
        <div className="App">
          <Navbar />
          <div className='p-4'>
            <Switch>
              <Route exact path="/">
                <ProtectedRoute>
                <Statistics/>
                </ProtectedRoute>
              </Route>
              <Route exact path="/users">
                <ProtectedRoute>
                  <Users/>
                </ProtectedRoute>

              </Route>
              <Route exact path="/user/:id">
                <ProtectedRoute>
                  <UserDetails/>
                </ProtectedRoute>
              </Route>
              <Route exact path="/project/:id">
                <ProtectedRoute>
                  <ProjectDetails/>
                </ProtectedRoute>

              </Route>
              <Route exact path="/categories">
                <ProtectedRoute>
                  <Categories/>
                </ProtectedRoute>
              </Route>
              <Route exact path="/category/create">
                <ProtectedRoute>
                  <CreateCategory/>
                </ProtectedRoute>
              </Route>
              <Route exact path="/category/edit/:id">
                <ProtectedRoute>
                  <EditCategory/>
                </ProtectedRoute>
              </Route>

              <Route exact path = "/educations">
                <ProtectedRoute>
                  <Educations/>
                </ProtectedRoute>
              </Route>
              <Route exact path="/education/create">
                <ProtectedRoute>
                <CreateEducation/>
                </ProtectedRoute>
              </Route>
              <Route exact path="/education/edit/:id">
                <ProtectedRoute>
                <EditEducation/>
                </ProtectedRoute>
              </Route>
              <Route exact path="/project/:id">
              <ProtectedRoute>
                <ProjectDetails/>
                </ProtectedRoute>
              </Route>
              <Route exact path="/login">
                <RedirectRoute>
                <Login />
                </RedirectRoute>
              </Route>
            </Switch>
          </div>
        </div>
      </AuthProvider>
    </Router>

  );
}

export default App;
