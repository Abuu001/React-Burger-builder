import React ,{Component} from "react"

class Person extends Component{
    constructor(props) {
        super(props)
        this.state = {
            persons :[
                {name:"Abu" , age : "9"},
                {name:"Evans" , age : "8"},
                {name:"Edu" , age : "7"}
            ],
            showPersons : false
        }
        this.handleClick=this.handleClick.bind(this)
        this.togglePersonHandler=this.togglePersonHandler.bind(this)
 
    }
    handleClick =()=>{
        console.log("I am clicked");
    }
    togglePersonHandler=()=>{
        const doesShow =this.state.showPersons
       this.setState( {
           showPersons : !doesShow
       })
    }

    render(){
        const age =Math.floor (Math.random()* 100)
        const details=(
            <div>
                <h2  >Im a {this.props.name} of {age}  years old</h2>
                <h2 >{this.state.persons[0].name}</h2>
                <button onClick={this.handleClick}>Click me</button>
            </div>
          )
        return(
            <div>
                <button  onClick={this.togglePersonHandler}>toggle</button>
                {  this.state.showPersons === true  ?   details  :  null }  
                
            </div>
        )
    }
}

export default Person