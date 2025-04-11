import { useEffect, useState } from 'react';
import { Button, Container, Row, Col  } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

/*
    *  axios (ajax 사용하기)
      : fetch() 사용할 수 있음. json의 형태로 자동 변경
    문서 :  https://axios-http.com/kr/docs/intro
    1. 설치부터 시작
    
*/

function Detail(props) {
    let {pid} = useParams();

    let findId = props.clothes.find(function(v, i){
        return v.id == pid;
    })

    let[alert, setAlert]  = useState(true);

    useEffect(() => {
        let timer = setTimeout(() => { setAlert(false) }, 3000)
        
        return () => {
            clearTimeout(timer);
        }
    })
    
    return (
            <div className='detail'>
            

                {
                    alert ? <div>3초 이내에 구매시 30% 할인</div> : null
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
            </div>
    )
}

export default Detail;