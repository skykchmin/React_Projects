import React, { useState, useRef } from "react";

const GuGuDan = () => {
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    const inputRef = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(parseInt(value) === first * second){
            setResult('정답:' + value);
            setFirst(Math.ceil(Math.random() * 9)); // 새로운 값으로 업데이트
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
            inputRef.current.focus();
        } else {
            setResult('땡');
            setValue('');
            inputRef.current.focus();
        }
    }

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };    

    return (
        <>
            <div className="problem">
                {first} 곱하기 {second} 는 ?
            </div>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} onChange={onChangeInput} value={value} />
                <button>계산 결과</button>
                <div id="result">{result}</div>
            </form>
        </>
    );
};

export default GuGuDan;
