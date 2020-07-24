import React, { Component } from "react";
import Message from "./message";
export default class MessageList extends Component {
    render() {
        let { data } = this.props;
        return <ul className="messageList">
            {
                data.map(item => <Message key={item.id} {...this.props} data={item} />)
            }
        </ul>
    }
}