import '../styles/Home.css';
import { useState } from 'react';
import EditTask from './EditTask';
import CreateTsk from './CreateTask';
import Delete from './Delete';
import {useNavigate} from 'react-router-dom';

export default function Home() {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const navigate = useNavigate();
  const handleDeleteClick = () => {
    navigate('/Delete');
  };
  // サンプルタスク
  const dummyTasks = [
    { id: 1, title: '国語の読書感想文,国語,23日,3点' },
    { id: 2, title: '数学プリント,数学,29日,2点' },
    { id: 3, title: '英語ワーク Lesson3,英語,30日,2点' },
  ];

  const handleAddClick = () => setIsAddOpen(true);
  const handleEditClick = () => setIsEditOpen(true);
  const handleCloseEditModal = () => setIsEditOpen(false);
  const handleCloseAddModal = () => setIsAddOpen(false);

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
      

      <div className="container">
        <div className="left">
          <p></p>
        </div>
        <div className="center">
          <button id='h2' type="button"></button>
          {/* 真ん中にタスクリスト */}
          <div className="task-list">
            {dummyTasks.map(task => (
              <div key={task.id} className="task-item">
                {task.title}
              </div>
            ))}
          </div>
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

      {/* 追加ページモーダル */}
      {isAddOpen && (
        <div style={modalBackdropStyle}>
          <div style={modalContentStyle}>
            <h2>追加ページ</h2>
            <CreateTsk />
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
