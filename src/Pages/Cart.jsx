import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromCart, emptyCart } from '../Redux/Slice/cartSlice'
import { useNavigate } from 'react-router-dom'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
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
          
              {
                cartArray.length>0?cartArray.map((item,index)=>( 
                  <Col> 
                  <MDBCard className='my-3' style={{width:'180px', height:'280px', backgroundColor:'rgba(20, 120, 200, 0.15)', border:'none', boxShadow:'1px 1px 3px grey'}}>
                  <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <MDBCardImage style={{width:'180px',height:'150px'}} src={item.thumbnail} fluid alt='...' />
                    <a><div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div></a>
                  </MDBRipple>
                  <MDBCardBody>
                    <MDBCardTitle>{item.title}</MDBCardTitle>
                    <div id='div1' className='text-center ms-4'>
                    <MDBCardText className='text-danger text-center'><h5>${item.price}</h5></MDBCardText>
                    </div>
                    <MDBBtn id='c1' onClick={()=>dispatch(deleteFromCart(item.id))} style={{width:'30px', height:'30px', paddingInline:'5px', paddingBlock:'5px', backgroundColor:'crimson'}} className='ms-5' href='#'><i class="fa-solid fa-trash text-light"></i></MDBBtn>
                  </MDBCardBody>
                </MDBCard></Col>
                )):'Empty cart'
              }
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