import { Table, Button } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import { changeName, ageUpdate, countUp } from '../store/store';


function Cart() {
    /*
    *Redux 변경하기
    1. store.js에서 변경해주는 함수 만들고
    2. export
    3. dispatch
    */

    // 원하는 것만 가져오기
    let user = useSelector((state) => {return state.user});
    console.log(user);

    let stock = useSelector((state) => {return state.stock});

    let cart = useSelector((state) => {return state.cart});
    
    // store.js에 요청을 보내주는 함수
    let dispatch = useDispatch();

    return (
        <div className='cart'>
            {user.name}({user.age})의 장바구니
            <Button variant="outline-info" onClick={() => {
                                    dispatch(changeName())
                                  }}>이름바꾸기</Button>

             <Button variant="outline-info" onClick={() => {
                                    dispatch(ageUpdate())
                                  }}>갯수 변경</Button>

            
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((v)=>{
                            return (
                            <tr key={v.id}>
                                <td>{v.id}</td>
                                <td>{v.name}</td>
                                <td>{v.count}</td>
                                <td><Button variant="outline-info" onClick={() => {
                                    dispatch(countUp(v.id-1))
                                }}>Count up</Button></td>
                             </tr> 
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>

    )
}

export default Cart;