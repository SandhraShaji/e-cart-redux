import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromCart, emptyCart } from '../Redux/Slice/cartSlice'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const navigate = useNavigate()
  const cartArray = useSelector((state)=>state.cartReducer)
  const dispatch = useDispatch()
  //to hold total price of products
  const [total,setTotal] = useState(0)
  const getCartTotal=()=>{
    if(cartArray.length>0){
      setTotal(cartArray.map((item)=>item.price).reduce((p1,p2)=>p1+p2))
    }
    else{
      setTotal(0)
    }
  }
  const emptyCartList=()=>{
    dispatch(emptyCart())
    alert('Order placed succesfully')
    navigate('/')
  }
  useEffect(()=>{
    getCartTotal()
  },[cartArray])

  return (
    <div>
      {
        cartArray.length>0?
        <Row className='p-5' style={{width:'100%'}}>
        <Col>
          <table className='border border-2 text-center'>
            <thead>
              <tr>
                <th className='p-2 border border-2'>Id</th>
                <th className='p-2 border border-2'>Name</th>
                <th className='p-2 border border-2'>Image</th>
                <th className='p-2 border border-2'>Price</th>
                <th className='p-2 border border-2'>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                cartArray.length>0?cartArray.map((item,index)=>(
                  <tr>
                    <td className='p-2 border border-2'>{index+1}</td>
                    <td className='p-2 border border-2'>{item.title}</td>
                    <td className='p-2 border border-2'><img width={'200px'} height={'150px'} src={item.thumbnail} alt="" /></td>
                    <td className='p-2 border border-2'>Rs. {item.price}</td>
                    <td className='p-2 border border-2'><i onClick={()=>dispatch(deleteFromCart(item.id))} className='fa-solid fa-trash text-danger'></i></td>
                  </tr>
                )):'Empty cart'
              }
            </tbody>
          </table>
        </Col>
        <Col>
          <div style={{border:'none'}} className='card shadow p-4 text-center'>
            <h3 className='text-center my-3'>Cart Summary</h3>
            <h6 className='my-3'>Total Cart Item: {cartArray.length}</h6>
            <h6>Total Price: Rs. {total}</h6>
            <div className='text-center my-4'>
              <button onClick={emptyCartList} className='btn btn-success'>Checkout</button>
            </div>
          </div>
        </Col>
      </Row>:
      <div className='text-center my-3'>
      <img width={'300px'} src="https://schoolville.com/assets/img/empty-cart-illustration.gif" alt="" />
      <h4 className='my-3'>Cart Empty</h4>
      <a style={{backgroundColor:'rgb(20, 120, 200)', color:'white'}} href='/' className='btn my-3'>Home</a>
    </div>
      }
    </div>
  )
}

export default Cart