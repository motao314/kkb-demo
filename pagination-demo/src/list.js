import React from 'react';
import { useParams } from 'react-router-dom';
import data from "./data";
const len = 5;//每页显示5条数据
/*
    页面数 1、2、3、4、5

    1: 0 - 4,
    2: 5 - 9,
    3：10 - 14
*/
function getData(type){
    if(type === "all"){
        return Object.values(data).flat();
    }
    return data[type];
}
function List() {
  let {type="all",page=1} = useParams();
  let nowData = getData(type).filter((item,index)=>{
      return index>=(page-1)*len&&index<page*len;
  });
  return (<ul className="list">
    {nowData.length>0?nowData.map(item=>{
        return <li key={item.id}>{item.title}</li>
    }):"暂无数据"}
</ul>);
}

export default List;
