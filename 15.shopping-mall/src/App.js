import './App.css';
import { Navbar, Container, Nav, Row, Col, Button  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import plist from './data/ProductList';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Cart from './pages/Cart';
import Detail from './pages/Detail';
import axios from './../node_modules/axios/lib/axios';

/*
    *  axios (ajax 사용하기)
      : fetch() 사용할 수 있음. json의 형태로 자동 변경
    
        >  문서 :  https://axios-http.com/kr/docs/intro
        1. 설치부터 시작
    
*/

function App() {
  const [clothes, setClothes] = useState(plist);

 let navigate = useNavigate();

  return (
    <div className="App">
       <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand href="/">쇼핑몰</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link onClick={() => {navigate('/')}}>Home</Nav.Link>
                <Nav.Link onClick={() => {navigate('/detail')}}>Detail</Nav.Link>
                <Nav.Link onClick={() => {navigate('/cart')}}>Cart</Nav.Link>
                <Nav.Link onClick={() => {navigate('/about')}}>About</Nav.Link>
          
              </Nav>
            </Container>
          </Navbar>

      <Routes>
      <Route path='/' element={
        <>
          {/* background로 넣을 때*/}
          <div className='main-bg'></div> 
      
          <Container>
            <Row>
              {clothes.map((v, i) => {
                return (
                <PListCol key={i} clothes={v} />
                )
              })}
            </Row>
          </Container>

          
          <Button variant="outline-info" onClick={() => {
            axios.get('https://raw.githubusercontent.com/professorjiwon/data/refs/heads/main/data2.json')
                 .then((result) => {
                  console.log(result);
                 })
                 .catch(() => {
                  console.log('실패');
                 })
          }}>서버에서 데이터 가져오기</Button>
        </>
      } />
      

        <Route path='/detail/:pid' element={<Detail clothes={clothes} />}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/about' element={<div>더조은 컴퓨터 아카데미</div>}/>
        <Route path='*' element={<div>없는 페이지입니다</div>}/>

      </Routes>
    </div>
  );
}

function PListCol(props) {
  return(
    <>
      <Col>
            <img src= {`${process.env.PUBLIC_URL}/img/img${props.clothes.id}.jpg`} className="mainImg"/>
            <h4>{props.clothes.title}</h4>
            <p>{props.clothes.price}</p>
      </Col>
    </>
  )
}

export default App;
