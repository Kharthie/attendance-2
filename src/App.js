// import logo from './logo.svg';
import "./App.css";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

import Dashbord from "./Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Studentlist from "./Studentlist";
import Attendancelist from "./Attendancelist";
import Addattendance from "./Addattendance";
import UserContext, { UserProvider } from "./usercontext";

function App() {
  return (
    <>
      <div id="wrapper">
        <BrowserRouter>
          <UserProvider>
            <Sidebar />
            <div id="content-wrapper" class="d-flex flex-column">
              <div id="content">
                <Topbar />
                <div class="container-fluid">
                  <Routes>
                    <Route path="/dash" element={<Dashbord />} />
                    <Route path="/student" element={<Studentlist />} />
                    <Route path="/student/:id" element={<Attendancelist />} />
                    <Route
                      path="/addattendance/:id"
                      element={<Addattendance />}
                    />
                  </Routes>
                </div>
              </div>
            </div>
          </UserProvider>
        </BrowserRouter>
        ,
      </div>
    </>
  );
}

export default App;
