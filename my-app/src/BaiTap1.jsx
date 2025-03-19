import React, { useId, useReducer, useRef } from 'react'

export default function BaiTap1() {
    const a = useRef(0)
    const b = useRef(0)

    const reducer = (state, action) => {
        switch(action.type) {
            case "+":
                return { result: state.a + state.b };
            case "-":
                return { result: state.a - state.b };
            case "*":
                return { result: state.a * state.b };
            case "/":
                if(state.b == 0)
                    return {result: "Error"}
                else
                    return { result: state.a / state.b };
                default:
                    throw new Error("Error: Invalid action type - " + action.type);
                    case "SET_A":
                        return { ...state, a: action.payload };
                    case "SET_B":
                        return { ...state, b: action.payload };
        }
    }

    const [state, dispatch] = useReducer(reducer, {a: 0, b: 0, result: 0})

    const handleClick = (operation) => {
        switch(operation){
            case "+":
                dispatch({type: "+"})
                break;
                case "-":
                dispatch({type: "-"})
                break;
                case "*":
                dispatch({type: "*"})
                break;
                case "/":
                dispatch({type: "/"})
                break;
                default:
                    break;
        }
    }

    const handleChange = (e, type) => {
        const value = Number(e.target.value);
        if (type === 'a') {
            dispatch({ type: 'SET_A', payload: value });
        } else if (type === 'b') {
            dispatch({ type: 'SET_B', payload: value });
        }
    }

  return (
    <div>
        <h1 className='text-2xl font-bold mb-5'>Cộng trừ nhân chia</h1>
        <div className='flex flex-col justify-center'>
            <div className='flex text-center items-center mb-5'>
                <label>Nhập a:</label>
                <input onChange={(e) => handleChange(e, 'a')} value={state.a ?? ""} ref={a} className='border ml-2 p-1 w-100 rounded-2xl' type="number"/>
            </div>
            <div className='flex text-center items-center  mb-5'>
                <label >Nhập b:</label>
                <input onChange={(e) => handleChange(e, 'b')} value={state.b ?? ""} ref={b} className='border ml-2 w-100 p-1 rounded-2xl' type="number"/>
            </div>
            <div className='flex text-center items-center  mb-5'>
                <label>Kết quả:</label>
                <input value = {state.result} className='border ml-2 w-100 p-1 rounded-2xl' type="number" disabled/>
            </div>
            <div className='flex gap-2 '>
                <button onClick={() => handleClick("+")} className='p-3 w-20 bg-blue-700 rounded-2xl text-amber-50 font-bold cursor-pointer'>Cộng</button>
                <button onClick={() => handleClick("-")} className='p-3 w-20 bg-blue-700 rounded-2xl text-amber-50 font-bold cursor-pointer'>Trừ</button>
                <button onClick={() => handleClick("*")} className='p-3 w-20 bg-blue-700 rounded-2xl text-amber-50 font-bold cursor-pointer'>Nhân</button>
                <button onClick={() => handleClick("/")} className='p-3 w-20 bg-blue-700 rounded-2xl text-amber-50 font-bold cursor-pointer'>Chia</button>
            </div>
        </div>
    </div>
  )
}
