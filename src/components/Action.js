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
            {this.state.err && <p className="text-danger">{this.state.err}</p>}
             <form onSubmit={this.onFormSubmit}>
                 <div className="input-group">
                    <input className="form-control" type="text" name="txtItem" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="submit">Add Item</button>
                    </div>
                 </div>
             </form>
            </>
        )
    }
}
