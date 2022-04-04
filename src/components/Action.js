import React from "react";

export default class Action extends React.Component{
    constructor(props){
        super(props);
        this.onFormSubmit=this.onFormSubmit.bind(this);
        this.state={
            err:""
        }
    }
    onFormSubmit(e){
        e.preventDefault();
        const item=e.target.txtItem.value.trim();
        const err=this.props.addItem(item);
        this.setState({
            err:err
        })
        e.target.txtItem.value="";
    }
    render() {
        return (
            <>
            {this.state.err && <p>{this.state.err}</p>}
             <form onSubmit={this.onFormSubmit}>
                 <input type="text" name="txtItem" />
                 <button type="submit">Add Item</button>
             </form>
            </>
        )
    }
}
