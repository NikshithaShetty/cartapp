import { useEffect,} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {  ADD, REMOVE_ONE } from '../redux/actions/action'
import {getApidata } from "../redux/actions/action"

const Home = () => {
  useEffect(() => {
    
    dispatch(getApidata() )
},[])
  const getdata = useSelector((state) => state.cartreducer);
console.log(getdata.product,"product");
  const dispatch = useDispatch();
  const onAdd = (e) => {
    dispatch(ADD(e));
  }

  // remove one
  // const onRemove = (item) => {
  //   dispatch(REMOVE_ONE(item))
  // }
  return (
    <div className="productContainer">
      {getdata.product.map((prod) => (
        <div className="products" key={prod.id}>
          <img src={prod.images} alt={prod.name} height="350px" />
          <div className="productDesc">
            <span style={{ fontWeight: 700 }}>{prod.title}</span>
            <span>₹ {prod.price}</span>
          </div>


          <button className="add" onClick={() => onAdd(prod)}>
            Add to Cart
          </button>

        </div>
      ))}
    </div>

  );
};

export default Home;
