import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./modules/context/AuthContext";
import LayoutComponent from "./modules/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Workspaces from "./pages/Workspaces";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Landing from "./pages/Landing";
import "./App.css";

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading)
    return (
      <div className="page-loading">
        <div className="spinner"></div>
      </div>
    );
  if (!user) {
    location.href="/login";
    return;
  }
  return children;
}


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Landing/>}/>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <LayoutComponent />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            1 <Route path="workspaces" element={<Workspaces />} />
            <Route path="workspaces/:workspaceId" element={<Projects />} />
            <Route path="projects/:projectId" element={<Tasks />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
