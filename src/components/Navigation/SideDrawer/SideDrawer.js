import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Aux/Aux'

const sideDrawer = (props) => {
    let attacedClasses = [classes.SideDrawer, classes.Close]
    if (props.open) {
        attacedClasses = [classes.SideDrawer, classes.Open]
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attacedClasses.join(' ')}>
                <Logo height = '11%'/>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    )
}

export default sideDrawer