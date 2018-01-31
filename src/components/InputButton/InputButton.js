import React from 'react';

class InputButton extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <input type="button" {...this.props}/>
            </div>
        );
    }
}

export default InputButton;