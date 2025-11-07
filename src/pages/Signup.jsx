import React, { useState } from 'react';
// CSSの参照先を新しいファイル名に変更します
import './Signup.css';

export default function Signup() {
  // 1. 状態の定義: メールアドレス、パスワード、パスワード確認用
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // ✨ パスワード確認用を追加

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  // ✨ パスワード確認用入力の変更ハンドラを追加
  const handleConfirmPasswordChange = e => {
    setConfirmPassword(e.target.value);
  };

  // 2. ボタンクリック時の処理を新規登録用に変更
  const handleRegister = () => {
    // ✨ 関数名を変更: handleLogin -> handleRegister
    console.log('新規登録ボタンが押されました！');
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    // 💡 簡易的なパスワード一致チェック
    if (password !== confirmPassword) {
      console.error('エラー: パスワードが一致しません！');
      alert('パスワードと確認用パスワードが一致しません。');
      return;
    }

    // 実際にはここで新規登録APIを呼び出す処理が入ります
  };

  // 3. リンククリック時の処理をログイン画面への誘導に変更
  const handleLoginClick = e => {
    // ✨ 関数名を変更: handleRegisterClick -> handleLoginClick
    e.preventDefault();
    console.log('ログインリンクがクリックされました。');
    // 実際にはログインページへ遷移させます
  };

  return (
    <div className="login-container">
      {/* 画面名を変更 */}
      <h1 className="login-heading">新規登録画面</h1>

      {/* 📧 メールアドレス入力欄 (変更なし) */}
      <input
        type="email"
        placeholder="メールアドレスを入力"
        value={email}
        onChange={handleEmailChange}
        className="email-input"
      />

      {/* 🔑 パスワード入力欄 (変更なし) */}
      <input
        type="password"
        placeholder="パスワードを入力"
        value={password}
        onChange={handlePasswordChange}
        className="password-input"
      />

      {/* 🔑 パスワード確認用入力欄を追加 */}
      <input
        type="password"
        placeholder="パスワード（確認用）を入力" // ✨ プレースホルダーを変更
        value={confirmPassword}
        onChange={handleConfirmPasswordChange} // ✨ 新しいハンドラを指定
        className="password-input" // ✨ 同じスタイルを適用
      />

      {/* 🟢 ボタンのテキストと処理を変更 */}
      <button
        onClick={handleRegister} // ✨ 関数名を変更
        className="login-button"
        type="button"
      >
        新規登録
      </button>

      {/* 🆕 リンクの内容と処理を変更 */}
      <p className="register-text">
        <a
          href="/login" // 遷移先をログインページへ
          onClick={handleLoginClick} // ✨ 関数名を変更
          className="register-link"
        >
          すでにアカウントをお持ちの方はこちら
        </a>
      </p>
    </div>
  );
}
