import { func } from 'prop-types';
import React, { createContext, useReducer, useContext, useRef } from 'react';

const initalTodos = [
    {
        id: 1,
        text: '프로젝트',
        done: true,
    },
    {
        id: 2,
        text: '스타일링',
        done: true,
    },
    {
        id: 3,
        text: '만들기',
        done: false,
    },
    {
        id: 4,
        text: '기능구현',
        done: false,
    },
];

function todoReducer(state, action){ // state와 action을 가져와서 다음 상태를 return
    switch(action.type){
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map( 
                // 모든 todo에 대하여 변환을 해줄 것인데 todo id가 action으로 받아온 id와 같다면 todo를 업데이트 할것이다. done 값을 기존 값에다가 반전시킨 값을 넣어줍니다 
                todo => todo.id === action.id ? { ...todo, done: !todo.done} : todo
            )
        case 'REMOVE': // 모든 항목들에 대하여 todo.id와 action id랑 비교해서 일치하지 않는 것만 가져오겟다
            return state.filter(todo => todo.id !== action.id)
        default:
            throw new Error('Unhandled action type: ${action.type}')
    }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext(); 
const TodoNextIdContext = createContext(); // 새로운 항목을 만들 때마다 다음 id가 뭐가될지 관리를 해줘야한다 

// context를 만들면 그 안에 provider라는 컴포넌트가 존재합니다.

export function TodoProvider({ children }){
    const [state, dispatch] = useReducer(todoReducer, initalTodos);
    const nextId = useRef(5); // id 값은 ref를 통해 관리를 해준다. id값을 상태로 관리할 것이 아니라 그냥 바로 변화를 줄 수 있는 렌더링 되지 않는 값이기 때문에 


    return (
    <TodoStateContext.Provider value={state}>
        <TodoDispatchContext.Provider value={dispatch}>
            <TodoNextIdContext.Provider value={nextId}>
                {children}
            </TodoNextIdContext.Provider>
        </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>);
}



export function useTodoState(){
    const context = useContext(TodoStateContext);
    if(!context){
        throw new Error('Cannot find TodoProvider');
    }
    return context
}

export function useTodoDispatch(){
    const context = useContext(TodoDispatchContext);
    if(!context){
        throw new Error('Cannot find TodoProvide');
    }
    return context
}

export function useTodoNextId(){
    const context = useContext(TodoNextIdContext);
    if(!context){
        throw new Error('Cannot find TodoProvider');
    }
    return context
}