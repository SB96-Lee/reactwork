/*
  * props
    : 부모가 자식컴포넌트에게 전달하는 데이터
      자식 컴포넌트는 값을 변경 불가
      자식 -> 부모 : 불가
      형제끼리 : 불가
*/

import './App.css';
import Compo from './components/Compo';
import Button from './components/Button';

/* 문자 혹은 변수로 값 넘겨주기
function App() {
  const addr = "서초구 강남대로";
  return (
    <div className="App">
      <Compo user={"홍길동"} addr={addr}/>
    </div>
  );
}
*/

/* 객체로 넘겨주기
function App() {
  const userInfo = {
    name : "임수정",
    addr : "서초구 강남대로",
    likeList : ['캐릭터','만화','웹툰']
  }

  // return <Compo userInfo={userInfo}/>
  return <Compo {...userInfo} />
}
*/

function App() {
  return <Compo/>
}

export default App;
