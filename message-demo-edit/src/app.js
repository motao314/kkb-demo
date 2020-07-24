import React, { Component, Fragment } from 'react';
import "./index.css";
import AddMessage from './addMessage';
import MessageList from './messageList';
import Sum from './sum';
export default class App extends Component {
    state = {
        data: [
            {
                id: 0,
                name: "昵称",
                message: "留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容111",
                checked: false
            }, {
                id: 1,
                name: "昵称22",
                message: "留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容33",
                checked: true
            }
        ]
    }
    changeChecked = (id, checked) => {
        let { data } = this.state;
        data.forEach(item => {
            if (item.id === id) {
                item.checked = checked
            }
        });
        this.setState({ data });
    }
    editMessage = (id, message) => {
        let { data } = this.state;
        data.forEach(item => {
            if (item.id === id) {
                item.message = message;
            }
        });
        this.setState({ data });
    }
    addData = (name, message) => {
        let { data } = this.state;
        this.setState({
            data: [...data, {
                id: Date.now(),
                name, message
            }]
        });
    }
    remove = (id) => {
        let { data } = this.state;
        this.setState({
            data: data.filter(item => (item.id !== id))
        });
    }
    checkedAll=(checked)=>{
        let { data } = this.state;
        data.forEach(item => {
            item.checked = checked;
        });
        this.setState({ data });
    }
    removeChecked=()=>{
        let { data } = this.state;
        this.setState({ data:data.filter(item=>(!item.checked)) });
    }
    render() {
        let { data } = this.state;
        return <section className="wrap">
            <h2 className="title">留言板</h2>
            <AddMessage
                addData={this.addData}
            />
            {data.length > 0 ?
                <Fragment>
                    <MessageList
                        remove={this.remove}
                        data={data}
                        changeChecked={this.changeChecked}
                        editMessage={this.editMessage}
                    />
                    <Sum 
                        data = {data}
                        checkedAll={this.checkedAll}
                        removeChecked={this.removeChecked}
                    />
                </Fragment>
                : ""}
        </section>;
    }
}
