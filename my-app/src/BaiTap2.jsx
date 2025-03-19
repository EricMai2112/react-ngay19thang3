import React, { useRef, useState } from 'react'

export default function BaiTap2() {
    const inputRef = useRef("")
    const [todo, setTodo] = useState([])
    const [editItem, setEditItem] = useState(-1)

    const handleAdd = () => {
        const value = inputRef.current.value
        console.log(value)
        if(!value){
            alert("Vui lòng nhập công việc cần thêm")
            return
        }else if (editItem == -1){
            setTodo([...todo, value])
            inputRef.current.value = ""
            inputRef.current.focus()
        }else{
            const newTodos = [...todo];
            newTodos[editItem] = value;
            setTodo(newTodos);
            setEditItem(-1);
            inputRef.current.value = ""
        }
    }

    const handleEdit = (index) => {
        inputRef.current.value = todo[index];
        setEditItem(index);
      };

    const handleDelete = (indexDelete) => {
        const newTodos = todo.filter((item, index) => index != indexDelete)
        setTodo(newTodos)
        inputRef.current.value = ""
    }

  return (
    <div>
        <h1 className='font-bold text-4xl'>TO DO LIST</h1>
        <div>
            <h2 className='mt-5 text-3xl'>List of works</h2>
            <div className='flex items-center justify-center'>
                <input ref ={inputRef} className='border p-2 rounded-2xl mt-5 w-100' type="text" />
                <button onClick={handleAdd} className=
                "ml-3 border rounded-2xl p-3 bg-blue-600 text-amber-5 font-bold text-amber-50 cursor-pointer"
                >{editItem==-1 ? "Thêm" : "Lưu"}</button>
            </div>
            <div className='flex flex-col mt-5'>
                <div>
                    {todo.map((item, index) => {
                        return (
                            <div key={index} className='flex flex-row justify-between'>
                                <span>{index}</span>
                                <span>{item}</span>
                                <div className=' flex gap-2'>
                                    <button onClick={() => handleDelete(index)} className='cursor-pointer border bg-red-600 p-2 rounded-xl text-amber-50'>Xóa</button>
                                    <button onClick={() => handleEdit(index)} className='cursor-pointer border bg-green-600 p-2 rounded-xl text-amber-50'>Sửa</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}
