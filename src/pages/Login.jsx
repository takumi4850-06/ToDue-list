import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn, user, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  // 既にログインしている場合はホームにリダイレクト
  useEffect(() => {
    if (!authLoading && user) {
      navigate('/');
    }
  }, [user, authLoading, navigate]);

  const handleEmailChange = e => {
    setEmail(e.target.value);
    setError('');
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
    setError('');
  };

  const handleLogin = async e => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!email || !password) {
      setError('メールアドレスとパスワードを入力してください。');
      setLoading(false);
      return;
    }

    try {
      const { error } = await signIn(email, password);
      if (error) {
        setError(error.message || 'ログインに失敗しました。');
      } else {
        navigate('/');
      }
    } catch (err) {
      setError('予期しないエラーが発生しました。');
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterClick = e => {
    e.preventDefault();
    navigate('/signup');
  };

  return (
    <div className="login-container">
      <h1 className="login-heading">ログイン画面</h1>

      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="メールアドレスを入力"
          value={email}
          onChange={handleEmailChange}
          className="email-input"
          disabled={loading}
          required
        />

        <input
          type="password"
          placeholder="パスワードを入力"
          value={password}
          onChange={handlePasswordChange}
          className="password-input"
          disabled={loading}
          required
        />

        <button
          type="submit"
          className="login-button"
          disabled={loading}
        >
          {loading ? 'ログイン中...' : 'ログイン'}
        </button>
      </form>

      <p className="register-text">
        <Link
          to="/signup"
          onClick={handleRegisterClick}
          className="register-link"
        >
          新規登録者の方はこちら
        </Link>
      </p>
    </div>
  );
}
