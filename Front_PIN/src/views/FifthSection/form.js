import React from "react";

function Form(props){
    return(
        <form>
            <div className="mb-3">
                <label for="disabledTextInput" className="form-label">Name</label>
                <input value={props.Data.name} onChange={props.handleChangeName} type="text" className="form-control" id="disabledTextInput" placeholder="John || Only letters"/>
            </div>
            <div className="mb-3">
                <label for="disabledTextInput" className="form-label">Email</label>
                <input value={props.Data.email} onChange={props.handleChangeEmail} type="email" className="form-control" id="disabledTextInput" placeholder="john@email.com || Use @ and ."/>
            </div>
            <div className="mb-3">
                <label for="disabledTextInput" className="form-label">Phone</label>
                <input value={props.Data.phone} onChange={props.handleChangePhone} type="number" className="form-control" id="disabledTextInput" placeholder="3541-544707 || Phone can't be negative"/>
            </div>
            <div className="mb-3">
                <label for="disabledTextInput" className="form-label" id="formLabelMessage">Message</label>
                <textarea value={props.Data.message} onChange={props.handleChangeMessage} className="form-control" id="disabledTextInput" placeholder="My query is..." style={{height: "62px"}}></textarea>
            </div>
            <button disabled={props.disable} onClick={props.handleSend} className="btn btn-primary" id="FifthButton" type="submit">Send</button> 
        </form> 
    )
}

export default Form;   