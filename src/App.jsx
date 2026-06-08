import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import DashboardLayout from './layouts/DashboardLayout.jsx';
import StudentDashboard from './pages/student/StudentDashboard.jsx';
import Candidates from './pages/student/Candidates.jsx';
import Vote from './pages/student/Vote.jsx';
import ElectionStatus from './pages/student/ElectionStatus.jsx';
import Results from './pages/shared/Results.jsx';
import Profile from './pages/student/Profile.jsx';
import AdminDashboard from './pages/admin/AdminDashboard.jsx';
import ManageStudents from './pages/admin/ManageStudents.jsx';
import ManageCandidates from './pages/admin/ManageCandidates.jsx';
import ElectionControl from './pages/admin/ElectionControl.jsx';
import Analytics from './pages/admin/Analytics.jsx';
import Settings from './pages/admin/Settings.jsx';
import { useAuth } from './context/AuthContext.jsx';

function Protected({ role, children }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  if (role && user.role !== role) return <Navigate to={user.role === 'ADMIN' ? '/admin' : '/student'} replace />;
  return children;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/student"
        element={<Protected role="STUDENT"><DashboardLayout role="STUDENT" /></Protected>}
      >
        <Route index element={<StudentDashboard />} />
        <Route path="candidates" element={<Candidates />} />
        <Route path="vote" element={<Vote />} />
        <Route path="status" element={<ElectionStatus />} />
        <Route path="results" element={<Results />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route
        path="/admin"
        element={<Protected role="ADMIN"><DashboardLayout role="ADMIN" /></Protected>}
      >
        <Route index element={<AdminDashboard />} />
        <Route path="students" element={<ManageStudents />} />
        <Route path="candidates" element={<ManageCandidates />} />
        <Route path="election" element={<ElectionControl />} />
        <Route path="results" element={<Results admin />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
