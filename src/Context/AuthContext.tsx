import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  // 初始化時檢查 localStorage 是否已有 JWT token
  useEffect(() => {
    const savedToken = localStorage.getItem('jwt_token');
    if (savedToken) setToken(savedToken);
  }, []);

  // 一般信箱與密碼登入 (JWT)
  const loginWithEmail = async (email: any, password: any) => {
    try {
      // 替換為實際的 Backend API 呼叫
      console.log('Logging in with:', email, password);
      const mockJwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.mock";

      setToken(mockJwtToken);
      localStorage.setItem('jwt_token', mockJwtToken);
      return true;
    } catch (error) {
      console.error("Login failed", error);
      return false;
    }
  };

  // Google OAuth 2.0 登入
  const loginWithGoogle = async (googleCredential: any) => {
    try {
      // 將 Google 回傳的 credential 送到後端驗證，並換取系統的 JWT
      console.log('Google Credential:', googleCredential);
      const mockJwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.google_mock";

      setToken(mockJwtToken);
      localStorage.setItem('jwt_token', mockJwtToken);
      return true;
    } catch (error) {
      console.error("Google login failed", error);
      return false;
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('jwt_token');
  };

  return (
    <AuthContext.Provider value={{ token, loginWithEmail, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);