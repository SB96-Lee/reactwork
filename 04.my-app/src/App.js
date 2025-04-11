import './App.css';

function App() {
  const isStudent = true;

  return (
    // 문자로 인식
    /*
    <div className="App">
      isStundet == true ? <h1>학생입니다</h1> : <h1>학생이 아닙니다<h1>
    </div>
    */

    //삼항 연산자로 인식하게 하려면 {}안에 넣어준다
    <div className="App">

      {/* 일반 문자로 인식
      <div>
        if(isStudent) {
          <h1>학생입니다</h1>
        } else {
          <h1>학생이 아닙니다</h1>
        }
      </div>
      */}
      {isStudent == true ? <h1>학생입니다</h1> : <h1>학생이 아닙니다</h1>}
    </div>
  );
}

export default App;
