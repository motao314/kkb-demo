import React, { Component } from 'react';
export default class Sum extends Component {
    render() {
        let {checkedAll,removeChecked,data} = this.props;
        let checkedData = data.filter(item=>item.checked);
        return <div className="sum">
            <label>
                <input 
                    type="checkbox" 
                    checked={checkedData.length === data.length&&data.length>0}
                    onChange={({target})=>{
                        checkedAll(target.checked);
                    }}
                />
                <span>选中全部</span>
            </label>
            <a onClick={removeChecked}>删除选中项</a>
            <p>当前选中{checkedData.length}项，共{data.length}条留言</p>
        </div>
    }
}
