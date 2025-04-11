import { useEffect, useState } from 'react';
import { Button, Container, Row, Col  } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

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

    // let[num, setNum] = useState(0);
    // useEffect(() => {
    //     if(isNaN(num) == true) {
    //         alert('숫자만 입력하세요');
    //     }
    // },[num])


    return (
            <div className='detail'>
                {/* <input onChange={(e) => {setNum(e.target.value)}} />
                <p>{num}</p> */}

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