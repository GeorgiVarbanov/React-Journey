import { useState } from "react";

export default function Timer() {
    const [seconds, setTime] = useState(0);
    const [minutes, setMinutes] = useState(0);
    setTimeout(() => {
        setTime(seconds => seconds + 1)
    }, 1000
    );

    if (seconds == 60){
        setMinutes(minutes => minutes + 1);
    }

    return (
        <div>
            <h4>{minutes} : {seconds == 60 ? setTime(0) : seconds}</h4>
        </div>
    );
};