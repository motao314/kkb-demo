import React, { Fragment, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetDetailData } from "../../store/action";
function Details(){
    const {id} = useParams();
    const getDetailData = useGetDetailData();
    const history = useHistory();
    const {data} = useSelector(state=>state.detail);
    const {title="主题标题",content="数据获取中"} = data; 
    useEffect(()=>{
        getDetailData(id);
    },[id])
    return <Fragment>
         <header className="header">
            <a 
                className="back-btn"
                onClick={()=>{
                    if(history.length > 1){
                        history.goBack();
                    }
                }}
            >&lt; 返回</a>
            <h1 className="title">{title}</h1>
            <div 
                className="tipic"
                dangerouslySetInnerHTML={{
                    __html:content
                }}
            ></div>
        </header>
    </Fragment>
}

export default Details;