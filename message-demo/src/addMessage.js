import React, { Component } from 'react';
export default class AddMessage extends Component {
    state = {
        name: "",
        message:""
    };
    nameHandler=({target})=>{
        this.setState({
            name:target.value
        });
    }
    messageHandler=({target})=>{
        this.setState({
            message:target.value
        });
    }
    postHandler=()=>{
        let {name,message} = this.state;
        let {addData} = this.props;
        if(name.trim()&&message.trim()){
            addData(name,message);
            this.setState({
                name: "",
                message:""
            });
        } else {
            alert("请将信息输入完整");
        }
    }
    render() {
        let {name,message} = this.state;
        return <div className="addMessage">
            <input 
                type="text" 
                placeholder="请输入昵称" 
                value={name}
                onChange={this.nameHandler}
            />
            <textarea 
                placeholder="请输入留言"
                value={message}
                onChange={this.messageHandler}
            ></textarea>
            <button
                onClick={this.postHandler}
            >提交留言</button>
        </div>
    }
}
