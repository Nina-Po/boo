import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LandingPage,
  Register,
  PersonalArea,
  ProtectedRoute,
} from "./pages/index-pages";
import ProtectedAdmin from "./pages/ProtectedAdmin";
import AdminLogin from "./pages/admin-pages/AdminLogin";
import AdminPage from "./pages/admin-pages/AdminPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route
            path="/"
            element={
              <ProtectedRoute>
                <PersonalArea />
              </ProtectedRoute>
            }
          >
            <Route path="/personal-area" element={<PersonalArea />} />
          </Route> */}

          <Route
            path="/a-panel"
            element={
              <ProtectedAdmin>
                <AdminPage />
              </ProtectedAdmin>
            }
          >
            <Route path="/a-panel" element={<AdminPage />} />
          </Route>

          <Route path="/" element={<LandingPage />} />
          <Route path="/admin" element={<AdminLogin />} />
          {/* <Route path="/register" element={<Register />} /> */}
        </Routes>
        <Toaster
          position={"top-center"}
          reverseOrder={false}
          toastOptions={{
            duration: 3000,
            style: {
              padding: "1rem",
              // backgroundColor: "#ffdfff",
              fontSize: "1rem",
              // color: "#17132a",
              // borderColor: "#ff00ff",
              // border: "2px solid #ff00ff",
            },
          }}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
