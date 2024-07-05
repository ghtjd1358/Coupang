import {age} from './data'

export default function Cart() {
    let cartList = ['tomato', 'pasta']
    return (
      <div>
        <h4 className="title">Cart</h4>
        <CartItem cartLists = {cartList}/>
        {/* <Btn btnColor = 'blue'  /> */}
      </div>
    )
  } 

  function CartItem({cartLists}){
    return(
        <>
        {cartLists.map((item)=>{
            return(
                <div className="cart-item">
                    <p>{item} {age}</p>
                    <p>$40</p>
                    <p>1개</p>
                    </div>   
            )
        })}
        </>
       
    )
  }
//   function Btn({btnColor}){
//     return(
//             <button style={{backgroundColor : btnColor }}>빨강버튼</button>
//     )
//   }