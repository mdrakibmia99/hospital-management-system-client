import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import About from './routes/About/About';
import Appointment from './routes/Appointment/Appointment';
import ContactUs from './routes/ContactUs/ContactUs';
import Home from './routes/Home/Home';
import Login from './routes/Login/Login';
import Reset from './routes/Login/Reset';
import SignUp from './routes/Login/SignUp';
import Reviews from './routes/Reviews/Reviews';
import Navbar from './shared/Navbar/Navbar';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Dashboard from './routes/Dashboard/Dashboard';
import MyAppointments from './routes/Dashboard/MyAppointments';
import AllUsers from './routes/Dashboard/AllUsers';
import RequireAdmin from './components/RequireAdmin/RequireAdmin';
import AddDoctor from './routes/Dashboard/AddDoctor';
import ManageDoctors from './routes/Dashboard/ManageDoctors';
import Payment from './routes/Dashboard/Payment';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        } />
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        } >
          <Route index element={<MyAppointments />} /> {/* default one */}
          <Route path='/dashboard/reviews' element={<Reviews />} />
          <Route path='/dashboard/payment/:id' element={<Payment />} />
          <Route path='/dashboard/users' element={
            <RequireAdmin>
              <AllUsers />
            </RequireAdmin>
          }></Route>
          <Route
            path='/dashboard/addDoctor'
            element={
              <RequireAdmin>
              <AddDoctor />
            </RequireAdmin>}
          ></Route>
          <Route
            path='/dashboard/manageDoctor'
            element={
              <RequireAdmin>
              <ManageDoctors />
            </RequireAdmin>}
          ></Route>
        </Route>
        <Route path='/contactUs' element={<ContactUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/reset' element={<Reset />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
