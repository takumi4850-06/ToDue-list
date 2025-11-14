import classes from '../styles/EditTask.css';

export default function EditTask() {
    return (
    <div>
        <h1 className="midashi">タスク編集</h1>
        <div className="name">
            <p className='namehead'>名前</p>
            <input type="text" className="namebox" />
        </div>
        <div className="type">
            <p className='typehead'>種類</p>
            <select name="syurui" className="typebox">
                <option>数学</option>
                <option>英語</option>
                <option>専門</option>
                <option>一般教養</option>
                <option>ゼミ</option>
                <option>その他</option>
            </select>
        </div>
        <div className='date'>
            <p className='datehead'>期限</p>
            <input input="text" className="datebox" />
        </div>

        <div className="score">
            <p className='scorehead'>点数</p>
            <select name="tensuu" className="scorebox">
            <option>１</option>
            <option>２</option>
            <option>３</option>
            </select>
        </div>

        <button className='addbutton'>完了</button>
    </div>
    );
}