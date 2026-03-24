import { useState } from 'react';
import authImage from '../assets/images/illustration-authentication.svg';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  // const { loginWithEmail, loginWithGoogle } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    // await loginWithEmail(email, password);
    // 登入成功後的路由導向邏輯可以放在這裡
  };

  const handleGoogleLogin = async () => {
    // 這裡通常會結合 @react-oauth/google 的 useGoogleLogin 或 GoogleLogin 元件
    // 這裡先做一個模擬的觸發
    // await loginWithGoogle("mock_google_credential_response");
  };

  return (
    <>

      {/* 主要內容容器 */}
      <div className="bg-[#F8F7F4] min-h-screen flex items-center justify-center p-4">

        {/* 左側：深色插圖區塊 */}
        <div className="hidden lg:flex bg-[#1F1F21] rounded-[2rem] p-10 flex-col justify-between relative overflow-hidden" style={{ backgroundImage: `url(${authImage})` }}>
          {/* Logo */}
          <div className="text-white text-2xl font-bold tracking-wide z-10">
            finance
          </div>

          {/* 圖片佔位區塊 (實務上這裡放入您的 SVG 或 PNG 插圖) */}
          <div className="flex-grow flex items-center justify-center relative z-10">
            {/* 這裡可以放入 img 標籤引入那張抱著鈔票奔跑的圖片 */}
            <div className="w-full h-full opacity-80">
            </div>
          </div>

          {/* 底部文字 */}
          <div className="z-10 mt-8">
            <h1 className="text-white text-4xl font-bold leading-snug mb-4">
              Keep track of your money<br />and save for your future
            </h1>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Personal finance app puts you in control of your spending. Track transactions, set budgets, and add to savings pots easily.
            </p>
          </div>
        </div>

        {/* 右側：登入表單區塊 */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="bg-white p-10 rounded-2xl w-full max-w-md shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Login</h2>

            <form onSubmit={handleLogin} className="space-y-5">
              {/* Email Input */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 transition-colors"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="relative">
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 transition-colors pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-[34px] text-gray-500 hover:text-gray-700"
                >
                  {/* 眼球 Icon (這裡用簡單的 SVG 代替) */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-[#1F1F21] text-white font-medium py-3 rounded-lg hover:bg-black transition-colors mt-4"
              >
                Login
              </button>
            </form>

            {/* Google OAuth 區塊 */}
            <div className="mt-6">
              <div className="relative flex items-center justify-center">
                <span className="absolute bg-white px-2 text-xs text-gray-500">Or continue with</span>
                <div className="w-full border-t border-gray-200"></div>
              </div>

              <button
                onClick={handleGoogleLogin}
                className="mt-6 w-full flex items-center justify-center gap-2 border border-gray-300 bg-white text-gray-700 font-medium py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Google
              </button>
            </div>

            {/* Sign Up Link */}
            <div className="mt-8 text-center text-sm text-gray-600">
              Need to create an account? <a href="#" className="font-bold text-gray-900 hover:underline">Sign Up</a>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}