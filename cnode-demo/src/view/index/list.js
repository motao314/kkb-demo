import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGetListData } from '../../store/action';
import { useSelector } from 'react-redux';
function List() {
    let { type = "all", page = 1 } = useParams();
    let { loading, data } = useSelector(state => state.list);
    let getListData = useGetListData();
    useEffect(() => {
        getListData(type, page);
    }, [type, page]);
    return (<ul className="list">
        {loading ? 
            "正在请求数据……" 
            : 
            (data.length == 0 
                ? 
                "暂无数据" 
                :
                data.map(item=><li key={item.id}>
                    <Link to={`/details/${item.id}`}>{item.title}</Link>
                </li>)
            )}
    </ul>);
}

export default List;
