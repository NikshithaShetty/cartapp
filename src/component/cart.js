
import { useDispatch, useSelector } from 'react-redux';
import { DLT, ADD, REMOVE_ONE } from '../redux/actions/action'



const Cart = () => {
  const getdata = useSelector((state) => state.cartreducer.carts);

  const dispatch = useDispatch();
  const dlt = (id) => {
    dispatch(DLT(id));
  }
  const send = (e) => {
    dispatch(ADD(e));
  }

  // remove one
  const remove = (item) => {
    dispatch(REMOVE_ONE(item))
  }
  
  return (<>
    {
      getdata.length ?
        <div className="productContainer">
          {getdata.map((prod) => (
            <div className="products" key={prod.id}>
              <img src={prod.images} alt={prod.name} height="350px" />
              <div className="productDesc">
                <span style={{ fontWeight: 700 }}>{prod.title}</span>


                <div>
                  <span style={{ fontSize: 24 }} onClick={prod.qnty <= 1 ? () => dlt(prod.id) : () => remove(prod)}>-</span>
                  <span style={{ fontSize: 22 }}>{prod.qnty}</span>
                  <span style={{ fontSize: 24 }} onClick={() => send(prod)}>+</span>

                </div>
              </div>
              <button className="add" onClick={() => dlt(prod.id)}>
                Remove from Cart
              </button>

            </div>
          ))}
        </div> :

        <div className="productContainer" >
          <p style={{ fontSize: 22 }}>Your carts is empty</p>

        </div>
    }</>

  );
};

export default Cart;
