import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Signup.css';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { signUp, user, loading: authLoading } = useAuth();
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

  const handleConfirmPasswordChange = e => {
    setConfirmPassword(e.target.value);
    setError('');
  };

  const handleRegister = async e => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setLoading(true);

    // バリデーション
    if (!email || !password || !confirmPassword) {
      setError('すべての項目を入力してください。');
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError('パスワードと確認用パスワードが一致しません。');
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError('パスワードは6文字以上で入力してください。');
      setLoading(false);
      return;
    }

    try {
      const { error } = await signUp(email, password);
      if (error) {
        setError(error.message || '新規登録に失敗しました。');
      } else {
        setSuccess(true);
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      }
    } catch (err) {
      setError('予期しないエラーが発生しました。');
    } finally {
      setLoading(false);
    }
  };

  const handleLoginClick = e => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className="login-container">
      <h1 className="login-heading">新規登録画面</h1>

      {error && <div className="error-message">{error}</div>}
      {success && (
        <div className="success-message">
          新規登録が完了しました。ログインページに移動します...
        </div>
      )}

      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="メールアドレスを入力"
          value={email}
          onChange={handleEmailChange}
          className="email-input"
          disabled={loading || success}
          required
        />

        <input
          type="password"
          placeholder="パスワードを入力（6文字以上）"
          value={password}
          onChange={handlePasswordChange}
          className="password-input"
          disabled={loading || success}
          required
          minLength={6}
        />

        <input
          type="password"
          placeholder="パスワード（確認用）を入力"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          className="password-input"
          disabled={loading || success}
          required
        />

        <button
          type="submit"
          className="login-button"
          disabled={loading || success}
        >
          {loading ? '登録中...' : '新規登録'}
        </button>
      </form>

      <p className="register-text">
        <Link
          to="/login"
          onClick={handleLoginClick}
          className="register-link"
        >
          すでにアカウントをお持ちの方はこちら
        </Link>
      </p>
    </div>
  );
}
