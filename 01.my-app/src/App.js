import logo from './logo.svg';
import './App.css';

function App() {
  // 주석
  /*
    여러줄 주석
  */
  return (  
    // 주석
    <>  {/*   주석 : 여러줄 일때는 반드시 최상위 태그가 있어야 한다  */}
      <h1 align="center">React Test Page</h1>
      <br></br>
      <h2>패키지 생성 방법</h2>
      <p>1.  리액트 패키지 만드는 방법은 : 터미널 cmd  -> npx create-react-app 파일명</p>
      <p>2.  패키지 생성이 안될 경우 환경변수 설정 PATH에 node.js(c드라이브/프로그램 파일s에 node.js있음) 주소 추가</p>
      <br></br>
      <h2>패키지 실행 및 종료 방법</h2>
      <p>1. 시작하는 방법 : cd 프로젝트명 -> npm start</p>
      <p>2. 종료하는 방법 : cmd에 ctrl + c</p>
      <p>3. 폴더 올라가기 : cd..</p>
      {/* 주석 */}
      <br></br>
      <h2>Github ignore 설정 방법</h2>
      <pre>github에 업로드 시 node_modules까지 전부 할 경우 용량이 높아짐
           1) 구글에 gitignore 검색
           2) react 생성 클릭
           3) 복붙하여 github repository settings
           4) ignorefiles -> 붙여넣기 save</pre>
      <br></br>
      <h2>github에서 폴더 다운로드 후 실행 시</h2>
      <p>github에는 모듈을 제외하고 저장해서 전체 폴더를 다운 받은 후 실행할려고 하면 실행이 안됨</p>
      <p> 1. c:\program Files\node-js\ npm.ps1 파일 삭제</p>
      <p> 2. 터미널 open 이후 cmd에 cd 프로젝트명 -> npm i</p>
      <p> 3. cmd에 npm start으로 실행</p>
      <br></br>
      <p>*이외 : 윈도우에서 cmd -> node -v -> 설치버젼 확인 가능 및 설치되어있는지 획인 가능</p>
    </>
  );
}

export default App;
