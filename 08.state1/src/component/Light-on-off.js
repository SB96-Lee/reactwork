import {useState} from "react";

const LightOnOff = () => {
    // light = true, false
    const [light, setLight] = useState(false);

    return (
        <>
            {light ? <h1 style={{color:'red'}}>전구ON</h1> : <h1 style={{color:'blue'}}>전구OFF</h1>}
            <button onClick={() => {setLight(!light)}}>
            {light ? "끄기" : "켜기"}
            </button><br/>
        </>
    )
}

export default LightOnOff;