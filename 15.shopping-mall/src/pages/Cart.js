import { Table, Button } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import { changeName, ageUpdate, countUp } from '../store/store';

function Cart() {
    let user = useSelector((state) => {return state.user});
    let cart = useSelector((state) => {return state.cart});
    let dispatch = useDispatch();

    return (
        <div className='cart'>
            {user.name}의 장바구니
            
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
                                    dispatch(countUp(v.id))
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