import '../styles/Home.css';
import { useState } from 'react';
import EditTask from './EditTask'; 
import CreateTsk from './CreateTask'; 
import { useNavigate } from 'react-router-dom';

export default function Home() {
  // モーダル表示状態
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);

  
  const handleAddClick = () => {
    setIsAddOpen(true); // 追加モーダルを開く
  };

  const handleEditClick = () => {
    setIsEditOpen(true); 
  };

  const navigate = useNavigate();
  const handleDeleteClick = () => {
    navigate('/Delete');

  };

  const handleCloseEditModal = () => setIsEditOpen(false);
  const handleCloseAddModal = () => setIsAddOpen(false);

  // モーダル共通スタイル
  const modalBackdropStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  };

  const modalContentStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    minWidth: '300px',
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
          <button id="h2" type="button">
            完了リストへ
          </button>
        </div>
        <div className="right">
          <button id="h1" type="button" onClick={handleAddClick}>
            追加
          </button>
          <button id="h3" type="button" onClick={handleEditClick}>
            ✏️
          </button>
          <button id="h4" type="button" onClick={handleDeleteClick}>
            🗑️
          </button>
        </div>
      </div>

      {/* 追加ページをモーダルで表示 */}
      {isAddOpen && (
        <div style={modalBackdropStyle}>
          <div style={modalContentStyle}>
            <h2>追加ページ</h2>
            <CreateTsk /> {/* ここで追加ページをモーダル表示 */}
            <button onClick={handleCloseAddModal}>閉じる</button>
          </div>
        </div>
      )}

      {/* 編集モーダル */}
      {isEditOpen && (
        <div style={modalBackdropStyle}>
          <div style={modalContentStyle}>
            <h2>編集画面</h2>
            <EditTask />
            <button onClick={handleCloseEditModal}>閉じる</button>
          </div>
        </div>
      )}
    </div>
  );
}
