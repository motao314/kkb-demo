function list(list={
    loading:false,
    data:[]
},action){
    switch(action.type){
        case "LIST_LOADING":
            return {
                loading:true,
                data:[]
            }
        case "LIST_LOAD":
            return {
                loading:false,
                data:action.data
            }
    }
    return list;
}

export default list;