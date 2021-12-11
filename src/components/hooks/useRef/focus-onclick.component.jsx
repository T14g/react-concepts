import { useRef } from "react";

const FocusOnClick = () => {
    const inputEl = useRef(null);

    const onButtonClick = () => {
        inputEl.current.focus();
    };

    return (
        <div>
            <input type="text" ref={inputEl}  />
            <button onClick={onButtonClick}>Click to Focus on input</button>
        </div>
    );
};

export default FocusOnClick;