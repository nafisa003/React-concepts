export const reducer=(state,action)=>{
    if(action.type==='ADD_ITEM')
    {   const newPeople=[...state.people,action.payLoad]
        return{
            ...state,people:newPeople,modalContent:'oyayayay',isModalOpen:true
        }
    }
    if(action.type==='NO_VALUE')
    {
        return {
            ...state,
            modalContent:"pls enter name",
            isModalOpen:true
        }
    }
    if(action.type==='CLOSE_MODAL')
    {
        return{
            ...state,
            isModalOpen:false
        }
    }
    if(action.type==='REMOVE_ITEM')
    {
        const newPeople=state.people.filter((el)=>(el.id!==action.payLoad))
        return{
            ...state,
            people:newPeople
        }
    }
    throw new Error('no matching type')
}

