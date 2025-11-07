import React, { useState } from 'react';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    console.log('ログインボタンが押されました！');
    console.log('Email:', email);
    console.log('password', password);
  };

  const handleRegisterClick = e => {
    e.preventDefault();
    console.log('新規と売るくリンクがクリックされました。');
  };

  // 💡 h1のクラス名も修正しました (typo: headeing -> heading)
  return (
    <div className="login-container">
      <h1 className="login-heading">ログイン画面</h1>

      <input
        type="email"
        placeholder="メールアドレスを入力"
        // 3. 値と変更時のイベントハンドラをinputに渡す
        value={email} // 現在のStateの値を表示
        onChange={handleEmailChange} // 値が変わったらhandleEmailChangeを実行
        className="email-input"
      />

      {/*パスワード入力欄*/}
      <input
        type="password"
        placeholder="パスワードを入力"
        value={password}
        onChange={handlePasswordChange}
        className="password-input"
      />

      {/*ログインボタンを追加*/}
      <button onClick={handleLogin} className="login-button" type="button">
        ログイン
      </button>

      <p className="register-text">
        <a
          href="/register"
          onClick={handleRegisterClick}
          className="register-link"
        >
          新規登録者の方はこちら
        </a>
      </p>
    </div>
  );
}
