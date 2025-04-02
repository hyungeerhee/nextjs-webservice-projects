export default function Cart() {
  let 장바구니 = ['Tomatoes', 'Pasta']
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem 상품={장바구니[0]} />
      <CartItem 상품={장바구니[1]} />
      <Btn 색상="blue"></Btn>
    </div>
  )
}

function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.상품}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  )
}

function Btn(props) {
  return <button style={{ background: props.색상 }}>버튼</button>
}
