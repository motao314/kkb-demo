import React, { Component } from 'react';
import "./index.css";
import AddMessage from './addMessage';
import MessageList from './messageList';
export default class App extends Component {
    state={
        data:[
            {
                id: 0,
                name: "昵称",
                message:"留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容111"
            },{
                id: 1,
                name: "昵称22",
                message:"留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容33"
            }
        ]
    }
    addData=(name,message)=>{
        let {data} = this.state;
        this.setState({
            data:[...data,{
                id: Date.now(),
                name,message
            }]
        });
    }
    remove=(id)=>{
        let {data} = this.state;
        this.setState({
            data:data.filter(item=>(item.id!==id))
        });
    }
    render() {
        let {data} = this.state;
        return <section className="wrap">
            <h2 className="title">留言板</h2>
            <AddMessage
                addData={this.addData}
            />
            {data.length>0?<MessageList 
                remove={this.remove}
                data={data}
            />:""}
        </section>;
    }
}
