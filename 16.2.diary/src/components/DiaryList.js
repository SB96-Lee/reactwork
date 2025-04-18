import './DiaryList.css'
import Button from "../components/Button"
import DiaryItem from './DiaryItem';

const DiaryList = (() => {
    return (
        <div className="DiaryList">
            <div className="menu_bar">
                <select>
                    <option value={"latest"}>최신순</option>
                    <option value={"oldest"}>오래된순</option>
                </select>
                <Button text={"새 일기 쓰기"} type={"green"}></Button>
            </div>
            <div className='list_wrapper'>
                <DiaryItem />
            </div>
        </div>
    )
})

export default DiaryList;