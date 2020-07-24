import React, { Component } from "react";
export default class Message extends Component {
    render() {
        let { data, remove } = this.props;
        let { id, name, message } = data;
        return <li>
            <h3>{name}</h3>
            <p>{message}</p>
            <a onClick={()=>{
                remove(id)
            }}>删除</a>
        </li>
    }
}