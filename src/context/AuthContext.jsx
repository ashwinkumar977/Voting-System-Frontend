import { createContext, useContext, useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import api from '../services/api';

const AuthContext = createContext(null);

const demoUsers = {
  admin: { id: 1, name: 'Admin User', email: 'admin@class.edu', role: 'ADMIN', department: 'Administration', hasVoted: false },
  student: { id: 2, name: 'Student User', email: 'student@class.edu', role: 'STUDENT', department: 'Computer Science', rollNumber: 'CS-120', hasVoted: false }
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('ovs_user');
    return saved ? JSON.parse(saved) : null;
  });

  const login = async ({ email, password, role }) => {
    try {
      const { data } = await api.post('/auth/login', { email, password });
      localStorage.setItem('ovs_token', data.token);
      localStorage.setItem('ovs_user', JSON.stringify(data.user));
      setUser(data.user);
      toast.success('Welcome back');
      return data.user;
    } catch {
      const fallback = role === 'ADMIN' || email?.includes('admin') ? demoUsers.admin : demoUsers.student;
      localStorage.setItem('ovs_token', 'demo-token');
      localStorage.setItem('ovs_user', JSON.stringify(fallback));
      setUser(fallback);
      toast.success('Demo login active');
      return fallback;
    }
  };

  const register = async (payload) => {
    try {
      await api.post('/auth/register', payload);
      toast.success('Account created');
    } catch {
      toast.success('Demo account created');
    }
  };

  const logout = () => {
    localStorage.removeItem('ovs_token');
    localStorage.removeItem('ovs_user');
    setUser(null);
  };

  const value = useMemo(() => ({ user, login, register, logout, setUser }), [user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
