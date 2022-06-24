import CategoryActionType from "../../actiontype/category/CategoryActionType";

const initialState = {
        loading:false,
        isError:false,
        products:null, 
}


const CategoryReducer = (state=initialState,action)=>{

    const {type,payload} = action;

    switch(type){

        case CategoryActionType.GET_ALL_PRODUCT_LIST: 
            return {...state,loading:false,isError:false,products:payload}
        
        case CategoryActionType.SET_LOADING_TRUE: 
            return {...state,loading:true,isError:false}

        case CategoryActionType.SET_LOADING_FALSE: 
            return {...state,loading:false}
        
        case CategoryActionType.SET_ERROR_TRUE:
            return {...state,loading:false,isError:true} 

        default : return state;
    }

}

export default CategoryReducer;