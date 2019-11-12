
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
 
class Navbar extends Component {
 
    render() {
 
        this.props.cartUpdated();
 
        return (
 
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <NavLink className="navbar-brand" to="/">Online Checkout</NavLink>
                    </div>
 
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li><NavLink to="/my-cart">
                                {
                                    this.props.cart.length > 0 ? (
                                        <span className="label label-info">{ this.props.cart.length } items</span>
                                    ) : null
                                }
                                <i className="glyphicon glyphicon-shopping-cart"></i> Checkout</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
 
const mapStateToProps = (state) => {
 
    return {
        cart: state.cart.cart,
        cartUpdated: () => { return true }
    }
};
 
export default connect(mapStateToProps)(Navbar);