import React, { Component, createRef } from "react";
export default class Message extends Component {
    constructor(props){
        super(props);
        this.state= {
            edit:false,
            message: props.data.message
        };
        this.textarea = createRef();
    }
    checkedHandler=({target})=>{
        let { data, changeChecked } = this.props;
        let { id } = data;
        changeChecked(id,target.checked);
    }
    toEdit=()=>{
        this.setState({edit:true})
    }
    editMessage=({target})=>{
        this.setState({
            message:target.value
        });
    }
    postEdit=()=>{
        let {editMessage,data} = this.props;
        let {id,message} = data;
        if(this.state.message.trim()){
            editMessage(id,this.state.message);
        } else {
            this.setState({
                message
            })
        }
        this.setState({
            edit:false
        })
    }
    componentDidUpdate(prevProps,prevState){
        if(this.state.edit !== prevState.edit&&this.state.edit){
            this.textarea.current.select();
        }
    }
    render() {   
        let {edit,message} = this.state;
        let { data, remove} = this.props;
        let { id, name ,checked } = data;
        return <li className={edit?"editing":""}>
            <h3>{name}</h3>
            <input 
                type="checkbox" 
                checked={checked}
                onChange={this.checkedHandler}
            />
            <p onDoubleClick={this.toEdit}>{message}</p>
            <textarea 
                ref={this.textarea}
                value={message}
                onChange={this.editMessage}
                onBlur={this.postEdit}
            ></textarea>
            <a onClick={()=>{
                remove(id)
            }}>删除</a>
        </li>
    }
}