import React from "react";
import Valid from "card-validator";
import Potion from "../../img/item_healthCard.PNG";
import ExBoost from "../../img/item_XPcard.PNG";
import Crissaegrim from "../../img/item_swordCard.PNG";
import GodMode from "../../img/item_GodCard.PNG";
import CounterHealth from "../CounterHealth";
import CounterGod from "../CounterGod";
import CounterWisdom from "../CounterWisdom";
import CounterSword from "../CounterSword";

let numberValidation = Valid.number("4111");



// if (!numberValidation.isPotentiallyValid) {
//     renderInvalidCardNumber();
// }
// if (numberValidation.card) {
//     console.log(numberValidation.card.type);
// }

// renderInvalidCardNumber = () => {
//     console.log("invalid");
// }

class MicroTransactions extends React.Component {
    
    render(){
        console.log(numberValidation);
    return(
        <div className="container">
       
            <div className="row">
                <div className="col-lg-6">
                    <p
                        style={{fontSize:18, fontStyle:"bold",color:"white", marginLeft:"-35%", position:"relative"}}
                        >Number of items available:</p>
                    <ol>
                        <li><div
                                style={{position:"absolute"}}
                                >
                            <img src={Potion} alt="a potion" height="450"
                            style={{float:"left"}}
                            />
                            
                            <CounterHealth
                            style={{float: "right", marginTop:"150%" ,position:"relative"}}
                            />
                            </div>
                        </li>
                        <li><div
                                style={{position:"absolute", marginTop:"80%"}}
                                >
                            <img src={ExBoost} alt="an experience boost" height="450"
                            style={{float:"left"}}
                            />
                            <CounterWisdom
                            style={{float: "right", marginTop:"100%", position:"relative"}}
                            />
                            </div>

                        </li>
                        <li><div
                                 style={{position:"absolute", marginTop:"160%"}}
                                >
                            <img src={Crissaegrim} alt="legendary sword Crissaegrim" height="450"
                             style={{float:"left"}}/>
                          <CounterSword
                          style={{float: "right", marginTop:"400%", position:"relative"}}/>
                            </div>
                        
                        </li>
                        <li><div
                             style={{position:"absolute",marginTop:"240%"}}
                                >
                            <img src={GodMode} alt="final form Duncan" height="450"
                             style={{float:"left", position:"relative"}}
                            />
                            <CounterGod
                            style={{float: "right", marginBottom:"-100%", position:"relative"}}
                            />
                            </div>

                        </li>
                        
                                            </ol>
                </div>
                <div className="col-lg6">
                    <form className="card card-body">
                        <h3>Payment</h3>
                        <label htmlFor="fname">Accepted Cards</label>
                        <label htmlFor="cname">Name on Card</label>
                        <input type="text" id="cname" name="cardname" placeholder="Leto Atreides"/>
                        <label htmlFor="cnum">Number on Card</label>
                        <input type="number" id="cnum" name="cardNumber" placeholder="1111222233334444"/>
                        <label htmlFor="expmonth">Exp Month</label>
                        <input type="text" id="expmonth" name="expmonth" placeholder="September"/>
                        <label htmlFor="expyear">Exp Year</label>
                        <input type="text" id="expyear" name="expyear" placeholder="10191, AG. "/>
                        <label htmlFor="cvv">CVV</label>
                        <input type="text" id="cvv" name="cvv" placeholder="352"/>

                    </form>

                    <button className="btn btn-danger">Submit</button>

                </div>
            </div>
        </div>
    )
    }
};

export default MicroTransactions;



