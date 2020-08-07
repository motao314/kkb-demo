function detail(detail={
    loading:false,
    data:{}
},action){
    switch(action.type){
        case "DETAIL_LOADING":
            return {
                loading:true,
                data:{}
            }
        case "DETAIL_LOAD":
            return {
                loading:false,
                data:action.data
            }
    }
    return detail;
}

export default detail;