import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import { deleteFromWishlist } from '../Redux/Slice/whishlistSlice';
import { addToCart } from '../Redux/Slice/cartSlice';

function Wishlist() {
  const handleCart=(item)=>{
    dispatch(addToCart(item))
    dispatch(deleteFromWishlist(item.id))
  }
  const dispatch = useDispatch()
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  return (
    <div>
      <Row className='p-5' style={{width:'100%'}}>
      {
        wishlistArray.length>0?wishlistArray.map((item)=>(
          <Col>
            <MDBCard className='my-3' style={{width:'250px', height:'380px', backgroundColor:'rgba(20, 120, 200, 0.15)', border:'none', boxShadow:'1px 1px 3px grey'}}>
              <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <MDBCardImage style={{width:'250px',height:'180px'}} src={item.thumbnail} fluid alt='...' />
                <a><div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div></a>
              </MDBRipple>
              <MDBCardBody>
                <MDBCardTitle>{item.title}</MDBCardTitle>
                <MDBCardText style={{fontSize:'11px'}}>{item.description}</MDBCardText>
                <MDBCardText className='text-danger text-center'><h5>Rs. {item.price}</h5></MDBCardText>
                <MDBBtn onClick={()=>dispatch(deleteFromWishlist(item.id))} style={{width:'40px', height:'30px', paddingInline:'10px', paddingBlock:'5px', backgroundColor:'crimson'}} className='ms-5' href='#'><i class="fa-solid fa-trash text-light"></i></MDBBtn>
                <MDBBtn onClick={()=>handleCart(item)} style={{width:'40px', height:'30px', paddingInline:'10px', paddingBlock:'5px',backgroundColor:'rgb(20, 120, 200)'}} className='ms-5' href='#'><i class="fa-solid fa-shopping-cart text-light"></i></MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </Col>
        )):
        <div className='text-center'>
          <img width={'270px'} src="https://hey.brodox.com/assets/dist/images/empty-bag.gif" alt="" />
          <h4>Nothing in Whishlist</h4>
          <a style={{backgroundColor:'rgb(20, 120, 200)', color:'white'}} href='/' className='btn mt-3'>Home</a>
        </div>
      }
      </Row>
    </div>
  )
}

export default Wishlist