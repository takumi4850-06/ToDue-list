import '../styles/Home.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const handleH1Click = () => {
    alert('編集画面が表示されたよ');
  };

  const handleDeleteClick = () => {
    navigate('/delete'); // ← 削除ページへ移動！
  };
  
  return (
    <div>
      <div className="top-text">締め切りが近い課題</div>

      <h1>home</h1>

      <div className="container">
        <div className="left">
          <p>左エリア</p>
        </div>
        <div className="center">
          <button id="h2" type="submit">
            完了リストへ
          </button>
        </div>
        <div calssName="right">
          <button id="h1" type="submit">
            追加
          </button>
          <button id="h3" type="button" onClick={handleH1Click}>
            ✏️
          </button>
          <button id="h4" type="button" onClick={handleDeleteClick}>
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
}
