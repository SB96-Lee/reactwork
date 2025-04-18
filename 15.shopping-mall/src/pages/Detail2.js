import { useContext, useEffect, useState } from 'react';
import { Button, Container, Row, Col, Nav  } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Context1 } from '../App';

/*
    *  axios (ajax 사용하기)
      : fetch() 사용할 수 있음. json의 형태로 자동 변경
    문서 :  https://axios-http.com/kr/docs/intro
    1. 설치부터 시작

*/

function Detail(props) {
    //useContext(받은것)  
    let a = useContext(Context1);

    let {stock, clothes} = useContext(Context1);
    console.log(stock);
    console.log(clothes);

    let {pid} = useParams();

    let findId = props.clothes.find(function(v, i){
        return v.id == pid;
    })

    let[alert, setAlert]  = useState(true);
    let[tab, setTab]  = useState(0);
    let[detailFade, setDetailFade] = useState('');

    useEffect(() => {
        let timer = setTimeout(() => { setAlert(false) }, 3000)
        
        return () => {
            clearTimeout(timer);
        }
    })
    
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
                     <Button variant="outline-warning">주문하기</Button>
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

                {/* 1. 삼항연산자로
                { tab == 0 ? <div>패션은 예술이다</div> : tab == 1 ? <div>퀄리티 높은 재료</div> : <div>기타 등등</div>} 
                 */}

            </div>
    )
}

function TabContent({tab}) {
        let[fade, setFade] = useState('');

        let {stock} = useContext(Context1);

        //react 18버전부터 automatic batching기능
        //state 함수가 근처에 있으면 합쳐서 한꺼번에 state를 변경

        useEffect(() => {
            setTimeout(() => {setFade('end')}, 100); 
            return () => {
                setFade('start');
            }
        },[tab])

        return (
            <div className={fade} >
            { [<div >{stock}</div>, <div>{stock[1]}</div>, <div>내용들</div>][tab] }
            </div>
        )
    }

    /* 
    function TabContent({tab}) {
        // 2. if문으로   
        if(tab == 0) {
                return <div>패션은 예술이다</div>
            } else if(tab == 1) {
                return <div>퀄리티 높은 재료</div>
            } else {
                return <div>내용들</div>
            }
            
            // 3. 배열로
            let tabArr = [<div>패션은 예술이다</div>, <div>퀄리티 높은 재료</div>, <div>내용들</div>];
            return tabArr[tab]
         
            // 4. 3번을 한줄로
            return [<div >패션은 예술이다</div>, <div>퀄리티 높은 재료</div>, <div>내용들</div>][tab] 
        }
        */ 


export default Detail;