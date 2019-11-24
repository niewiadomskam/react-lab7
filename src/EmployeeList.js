import React from 'react'
import Employee from './Employee'

class EmmployeeList extends React.Component{

    constructor()
    {
        super();
        this.state={
            employees:[],
        }
    }

    componentDidMount()
    {
        fetch('//localhost:3004/employees')
        .then(results =>{
            return results.json();
        }).then(data =>
            {
                console.log(data);
            let employees = data.map((empl)=>{
                return(
                    <Employee name={empl.name} age ={empl.age} isActive={empl.isActive} />
                )
            })
            this.setState({employees : employees})
        }
        )
    }

    render(){
        return(
            <div>
                <h2>Employees</h2>
                <div>
                    {this.state.employees}
                </div>

            </div>
        )
    }
}
export default EmmployeeList