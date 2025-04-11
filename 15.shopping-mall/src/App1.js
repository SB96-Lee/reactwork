import './App.css';
import { Navbar, Container, Nav, Row, Col  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './img/img1.jpg';
import { useState } from 'react';
// import {num1, num2} from './data/ProductList';
import plist from './data/ProductList';

function App() {
  const [clothes, setClothes] = useState(plist);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">쇼핑몰</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* <p>{num1}</p> <p>{num2}</p>  */}

      {/* background로 넣을 때*/}
      <div className='main-bg'></div> 
  
      <Container>
        <Row>
          <Col>
            {/* src 하위에 넣었을 때는 import하여 넣는다 */}
            <img src={img1}></img>
            <h4>{clothes[0].title}</h4>
            <p>{clothes[0].price}</p>
          </Col>
          <Col>
             {/* public.img 폴더에 저장했을 때 import 필요 없음 */}
             <img src='/img/img2.jpg'></img>
            <h4>{clothes[1].title}</h4>
            <p>{clothes[1].price}</p>
          </Col>
          <Col>
             {/*  public.img 폴더에 그림이 있고 배포할 때 기존 url을 얻어와서 넣어준다 */}
             {/*  배포시 tjoeun.com/abc/~~~ 하위 경로일대는 그림을 못찾음.*/}
             {/* <img src={process.env.PUBLIC_URL + '/img/img4.jpg'}/> */}
             <img src={`${process.env.PUBLIC_URL}/img/img4.jpg`}/>
            <h4>{clothes[2].title}</h4>
            <p>{clothes[2].price}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
