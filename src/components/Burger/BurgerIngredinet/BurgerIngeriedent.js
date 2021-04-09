import classes from './BurgerIngeriedent.module.css';
import PropTypes from 'prop-types';
import { Component } from 'react';

class BurgerIngeriedent extends Component {
    render(){
        let ingeriedent = null;

        switch (this.props.type) {
            case ('bread-bottom'):
                ingeriedent = <div className={classes.BreadBottom}></div>
                break;
            case ('bread-top'):
                ingeriedent = (
                <div className={classes.BreadTop}> 
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>)
                break;
            case ('meat'):
                ingeriedent = <div className={classes.Meat}></div>
                break;
            case ('cheese'):
                ingeriedent = <div className={classes.Cheese}></div>
                break;
            case ('bacon'):
                ingeriedent = <div className={classes.Bacon}></div>
                break;
            case ('salad'):
                ingeriedent = <div className={classes.Salad}></div>
                break;
            
            default:
                ingeriedent = null;
                break;
        
        }
        return ingeriedent
    }
}
BurgerIngeriedent.propTypes = {
    type: PropTypes.string.isRequired
}


export default BurgerIngeriedent;