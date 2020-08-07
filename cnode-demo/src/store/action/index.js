import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
const http = axios.create({
    baseURL: "https://cnodejs.org/api/v1",
    timeout: 3000
});
function useGetListData() {
    const dispatch = useDispatch();
    return (tab, page) => {
        dispatch({
            type: "LIST_LOADING"
        });
        http.get(`/topics?tab=${tab}&page=${page}&limit=10`)
            .then((res)=>{
                dispatch({
                    type:"LIST_LOAD",
                    data:res.data.data
                });
            },(err)=>{
                dispatch({
                    type:"LIST_LOAD",
                    data:[]
                });
            });
    }
}
function useGetDetailData() {
    const dispatch = useDispatch();
    return (id) => {
        dispatch({
            type: "DETAIL_LOADING"
        });
        http.get(`/topic/${id}`)
            .then((res)=>{
                dispatch({
                    type:"DETAIL_LOAD",
                    data:res.data.data
                });
            },(err)=>{
                dispatch({
                    type:"DETAIL_LOAD",
                    data:[]
                });
            });
    }
}
export {useGetListData,useGetDetailData};