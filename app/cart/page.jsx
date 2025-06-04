import Hi from "./hi";
import Button from "./button";
export default function Cart() {
  return (
    <div>
      <Hi />
      <h4 className="title">Cart</h4>
      <div className="cart-item">
        <p>상품명</p>
        <p>$40</p>
        <p>1개</p>
      </div>
      <div className="cart-item">
        <p>상품명</p>
        <p>$40</p>
        <p>1개</p>
      </div>
      <Button />
      <Button color="blue" />
    </div>
  );
}
