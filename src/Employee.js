import React from 'react'
import { directive } from '@babel/types';

class Emmployee extends React.Component{
    constructor(props)
    {
        super(props);
    }

    render(){
        return(
            <div>
                <div id="employee_name">{this.props.name}</div>
                <div id="employee_age" style={{textColor:(this.props.isActive? 'yellow' : 'black') }}>{this.props.age}</div>
            </div>
        )
    }

}

export default Emmployee