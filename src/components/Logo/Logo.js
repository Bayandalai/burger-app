import burgerLogo from '../../assets/images/Burger-logo.png'
import classes from './Logo.module.css'

const logo = (props) => (
    <div className={classes.Logo} style = {{height: props.height}}>
        <img src={burgerLogo} alt="Burgerlogo"></img>
    </div>
)
export default logo