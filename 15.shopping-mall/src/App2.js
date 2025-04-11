import './App.css';
import { Navbar, Container, Nav, Row, Col  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import plist from './data/ProductList';
import { Route, Routes, Link } from 'react-router-dom';
import Cart from './pages/Cart';
import Detail from './pages/Detail';

/*
  * react-router-dom
  : 페이지를 교체시켜주는 api -> router-dom

  * 사용하려면
  1. 설치 : npm i react-router-dom
  2. index.js 에  <BrowserRouter> 태그 넣어주기
*/

function App() {
  const [clothes, setClothes] = useState(plist);

  return (
    <div className="App">
       <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand href="/">쇼핑몰</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/detail">상세페이지</Nav.Link>
                <Nav.Link href="/cart">장바구니</Nav.Link>
              </Nav>
            </Container>
          </Navbar>

      <Link to="/">Home</Link>&emsp;
      <Link to="/detail">상세페이지</Link>&emsp;
      <Link to="/cart">장바구니</Link>

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
        </>
      } />
        <Route path='/detail' element={<Detail/>}/>
        <Route path='/cart' element={<Cart/>}/>

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
