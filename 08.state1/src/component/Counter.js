import {useState} from "react";

const Counter = () => {
    /*
         Hook : react에서 상태관리를 위한 코드
                userState사용

        [사용법]        
            const[변수명, 업데이트함수] = useState(초기값);
            > 변수명 : 현재 상태 변수
            > 업데이트 함수를 호출하면 현재의 상태값을 변경할 수 있음
    */
    const [count, setCount] = useState(1);
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => {setCount(count+1)}}>+</button><br/><br/>
            <button onClick={() => {setCount(count-1)}}>-</button>
        </>
    )

}

export default Counter;