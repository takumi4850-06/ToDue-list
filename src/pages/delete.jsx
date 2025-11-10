import '../styles/Delete.css';
import { useNavigate } from 'react-router-dom';

export default function Delete() {
    const navigate = useNavigate();

    const handleBackHome = () => {
    navigate('/'); 
    };

    return (
    <div>
        <div className="top">完了したリスト</div>

        <div className="left"></div>
        <div className="center"></div>
        <div className="right"></div>

      {/* ホームに戻るボタン */}
        <div className="back-button-container">
        <button className="back-button" onClick={handleBackHome}>
            ホームに戻る
        </button>
        </div>
    </div>
    );
}
