const IntialValue = 0

const MyData=(state=IntialValue,action)=>{
    switch(action.type)
    {
        case 'INCREMENT':
            return state+=1
        case 'DECREMENT':
            return state-=1
        case 'REMOVE':
            return IntialValue;
        default:
            return state;
    }
}
export default MyData;