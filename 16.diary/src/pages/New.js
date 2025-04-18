import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import Editor from "../components/Editor"
import Button from "../components/Button"
import { useContext } from "react"
import {DiaryDispathContext} from "../App"

const New = (() => {
    const nav = useNavigate();
    const {onCreate} = useContext(DiaryDispathContext)
    
    const onSubmit = (input) => {
        onCreate(
            input.createDate.getTime(),
            input.emotionId,
            input.content
        )
        nav("/", {replace : true}) // replace : true =  뒤로가기 방지
    }

    return (
        <div>
            <Header
                title={"새 일기 쓰기"}
                leftChild={<Button text={"뒤로"} onClick={() => {nav(-1)}}/>}
            />
            <Editor onSubmit={onSubmit}/>
        </div>
    )
})
export default New