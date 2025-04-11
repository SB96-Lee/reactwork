import './Button.css'

/*
const Button = () => {
    return (
        <>
            <button style={{color : 'red'}} className='btn'>버튼</button>
        </>
    )
}
 */

/*
const Button = (props) => {
    return (
        <>
            <button style={{color : props.color}} className='btn'>{props.text}</button>
        </>
    )
}
 */


//3. 2번도 받을 수 있음(객체분해할당임)
const Button = ({text, color}) => {
    return (
        <>
            <button style={{color : color}} className='btn'>{text}</button>
        </>
    )
}


export default Button;
