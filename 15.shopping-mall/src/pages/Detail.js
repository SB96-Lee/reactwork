import { useEffect, useState } from 'react';
import { Button, Container, Row, Col, Nav, Table  } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/store';
import { useNavigate, useParams } from 'react-router-dom';

function Detail(props) {
   
    useEffect(() => {
        let p = localStorage.getItem('recentProduct')
        p = JSON.parse(p)

        if(!p.includes(findId.id)) {
            p.push(findId.id)
            localStorage.setItem('recentProduct', JSON.stringify(p))
        }
    },[])

    let dispatch = useDispatch();
    const nav = useNavigate();

    let {pid} = useParams();

    let findId = props.clothes.find((v, i) => v.id == pid)

    let[alert, setAlert]  = useState(true);
    let[tab, setTab]  = useState(0);
  
    useEffect(() => {
        let timer = setTimeout(() => { setAlert(false) }, 3000)
        
        return () => {
            clearTimeout(timer);
        }
    })
    
    let[detailFade, setDetailFade] = useState('');

    useEffect(() => {
        setDetailFade('end');
    },[])

    return (
            <div className={`detail start ${detailFade}`}>
                {
                    alert ? <h4 className="salePop">3초 이내에 구매시 30% 할인</h4> : null
                }

                <div className="detailImg" >
                      <img src= {`${process.env.PUBLIC_URL}/img/img${findId.id}.jpg`}/>
                </div>
                 <div className="detail_text">
                    <h4>{findId.title}</h4>
                     <p>{findId.content}</p>
                     <p>{findId.price.toLocaleString()}원</p>
                     <Button variant="outline-info" onClick={() => {
                        dispatch(addItem({id:findId.id, name:findId.title,  count:1}))
                        nav('/cart')
                    }}    
                    >주문하기</Button>
                 </div>

            <div className='deNav'>
                <Nav justify variant="tabs" defaultActiveKey="link-0" >
                    <Nav.Item>
                        <Nav.Link onClick={() => {setTab(0)}} eventKey="link-0">패션에 대하여</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => {setTab(1)}} eventKey="link-1" >옷의 정보</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => {setTab(2)}} eventKey="link-2">기타</Nav.Link>
                    </Nav.Item>
                </Nav>
                <div>
                  <TabContent tab={tab}/>
                </div>
            </div>  

            </div>
    )
}

function RecentViewed ({clothes}) {
    const [recent, setRecent] = useState([]);

    useEffect (() => {
        let viewed = JSON.parse(localStorage.getItem('recentProduct')) || []

        let products = viewed.map(id => clothes.find(c => c.id == id))

        setRecent(products);
    },[clothes])

    return (
        <div>
            <h4>👀 최근 본 상품</h4>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>제품설명</th>
                        <th>가격</th>
                    </tr>
                </thead>
                <tbody>
                {
                    recent.map((item) => 
                        <tr>
                            <td>{item.title}</td>
                            <td>{item.content}</td>
                            <td>{item.price}원</td>
                        </tr>
                    )
                }
                </tbody>
            </Table>
        </div>
    )
}

function TabContent({tab}) {
        let[fade, setFade] = useState('');

        useEffect(() => {
            setTimeout(() => {setFade('end')}, 100); 
            return () => {
                setFade('start');
            }
        },[tab])

        return (
            <div className={fade} >
            { [<div >패션에 대해서</div>, <div>품질 좋은 퀄리티</div>, <div>내용들</div>][tab] }
            </div>
        )
    }


export default Detail;