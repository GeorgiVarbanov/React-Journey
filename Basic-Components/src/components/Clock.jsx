import { useState } from "react";

export default function Clock(){
    let time = new Date().toLocaleDateString();

    const [ctime, setTime] = useState(time);

    const UpdateTime = () => {
        time = new Date().toLocaleDateString()
        setTime(time);
    }
    setInterval(UpdateTime);

    return(
        <h2>{ctime}</h2>
    );
}