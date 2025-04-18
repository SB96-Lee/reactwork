import './App.css';
import { Navbar, Container, Nav, Row, Col, Button  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import plist from './data/ProductList';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Cart from './pages/Cart';
import Detail from './pages/Detail';
import axios from 'axios/unsafe/axios.js';

function App() {

   useEffect(() => {
     if(!localStorage.getItem('recentProduct')){
       localStorage.setItem('recentProduct', JSON.stringify( [] ))
     }
   },[])

  const [clothes, setClothes] = useState(plist);
  const [clickCount, setClickCount] = useState(2);

  let navigate = useNavigate();

  return (
    <div className="App">
       <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand href="/">쇼핑몰</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link onClick={() => {navigate('/')}}>Home</Nav.Link>
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
            axios.get(`https://raw.githubusercontent.com/SB96-Lee/data/refs/heads/main/data${clickCount}.json`)
                 .then((result) => {
                  console.log(clothes);
                  console.log(result.data);
                  setClothes([...clothes, ...result.data]);
                  setClickCount(clickCount+1);
                 })
                 .catch(() => {
                  console.log('실패');
                  alert('더이상 없습니다');
                 })
          }}>서버에서 데이터 가져오기</Button>

        </>
      } />
      

        <Route path='/detail/:pid' element={<Detail clothes={clothes} />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/about' element={<div>더조은 컴퓨터 아카데미</div>}/>
        <Route path='*' element={<div>없는 페이지입니다</div>}/>

      </Routes>
    </div>
  );
}

function PListCol({clothes}) {
  const navigate = useNavigate();

  const goDetail = () => {
    navigate(`/detail/${clothes.id}`);
  }

  return(
      <Col md={4} onClick={goDetail}> {/* 총 12분할 중에서 4를 차지하면 3 3 3 들어감 */}
            <img src= {`${process.env.PUBLIC_URL}/img/img${clothes.id}.jpg`} className="mainImg"/>
            <h4>{clothes.title}</h4>
            <p>{clothes.price}원</p>
      </Col>
  )
}

export default App;
