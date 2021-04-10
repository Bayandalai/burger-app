import Aux from '../Aux/Aux';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
import {Component} from 'react'


class Layout extends Component  {

    state = {
        showSideDrawer: false
    }
    
    sideDrawerToggleHandler = () => {
        this.setState ( ( prevState )=>{return {showSideDrawer : !prevState.showSideDrawer}})
    }
    
    render (){
        return (
            <Aux>
                <Toolbar DrawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerToggleHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
            
        );
    }
} 

export default Layout;