import React,{Component} from "react"
import Aux from "../../hoc/Auxi"
import  "./Layout.css"
import ToolBar from  "../Navigation/ToolBar/ToolBar"
import SideDrawer from "../Navigation/SideDrawer/SideDrawer"

class Layout extends Component{
    constructor(props){
        super()
        this.state={
            showSideDrawer:true
        }
        this.sideDrawerClosedHandler=this.sideDrawerClosedHandler.bind(this)
        this.sideDrawerToggleHandler=this.sideDrawerToggleHandler.bind(this)
    }

    sideDrawerClosedHandler=()=>{
        this.setState({showSideDrawer:false})
    }
    sideDrawerToggleHandler=()=>{
        this.setState((prevState)=>{
            return{
                showSideDrawer: ! prevState.showSideDrawer}
        })
    }
    render(){
        return(
            <Aux >
            <ToolBar  drawerToggleClicked={this.sideDrawerToggleHandler}/>
            <SideDrawer closed={this.sideDrawerClosedHandler} open={this.state.showSideDrawer}/>
                <main  className="Content">
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}
export default Layout