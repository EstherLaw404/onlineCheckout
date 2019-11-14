
import React, { Component } from 'react';
import Item from './Item';
import { connect } from 'react-redux';
 
class Cart extends Component
{
    render() {
        const loginMember = 1; // 1 = Associate, 2 = Platinum , 3 = Diamond
        let memberType = '';
        let discount = 0;
        let total = 0;

        const member = this.props.members.filter(obj => {
          return obj.id === loginMember
        })

        if(member.length===1){
            discount = member[0].discount;
            memberType = member[0].type;
        }

        const special = this.props.specials.filter(special => {
          return special.member === loginMember
        })

        const specialProduct = special.map(spec => 
               spec = spec.product
        )
        let isSpec = false;
        this.props.cart.map(item => {             
            if (specialProduct.includes(item.product.id)) { 
                special.map(spec => {
                    if(item.product.id === spec.product){
                        if(spec.getDeal){
                            // getDeal
                            let remainder = item.quantity%spec.dealVolume;
                            let dividen = Math.floor(item.quantity/spec.dealVolume);

                            if(dividen){
                                console.log('--------special getdeal--------');
                                total += parseFloat((item.product.price * spec.volume*dividen).toFixed(2));
                                console.log(parseFloat((item.product.price * spec.volume*dividen).toFixed(2)));
                                isSpec = true;
                            } 
                            if(remainder){
                                item.quantity = remainder;
                                isSpec = false;
                            }
                        }else{
                            // special price for product
                            if(item.quantity>=spec.volume){
                                console.log('--------special price for product--------');
                                total += parseFloat((spec.price * item.quantity).toFixed(2));
                                console.log(parseFloat((spec.price * item.quantity).toFixed(2)));
                                isSpec = true;
                            }else{
                                isSpec = false;
                            }
                        }
                    }      
                });
            }else{
                isSpec = false;
            }

            if (!isSpec){
                // for others not special deal product discount
                console.log('--------member discount for non special--------');
               let deduct = parseFloat((item.product.price * discount /100).toFixed(2));
               total += parseFloat((item.product.price - deduct).toFixed(2)) * item.quantity
                console.log(parseFloat((item.product.price - deduct).toFixed(2)) * item.quantity);
            }
        });

        const cart  = this.props.cart.length > 0?(
            <div>
                <div className="panel-body">
                    {
                        this.props.cart.map(item => {

                            return (
                                <div key={item.product.id}>
                                    <Item item={item} />
                                    <hr />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="panel-footer">
                    <div className="row text-center">
                        <div className="col-xs-11">
                            <h4 className="text-right">Total <strong>RM {total.toFixed(2)}</strong></h4>
                        </div>
 
                    </div>
                </div>
            </div>
 
        ) : (
            <div className="panel-body">
                <p>Cart is empty</p>
            </div>
        )
 
        return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-xs-12">
                            <div className="panel panel-info">
                                <div className="panel-heading">
                                    <div className="panel-title">
                                        <div className="row">
                                            <div className="col-xs-6">
                                                <h5><span className="glyphicon glyphicon-shopping-cart"></span> { memberType } Shopping Cart</h5>
                                            </div>
 
                                        </div>
                                    </div>
                                </div>
 
                                { cart }
                
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
 
const mapStateToProps = (state) => {
 
  return {
      cart: state.cart.cart,
      specials: state.special.specials,
      members: state.member.members
  }
};
 
export default connect(mapStateToProps)(Cart);