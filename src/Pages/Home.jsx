import React from 'react'
import useFetch from '../Hooks/useFetch'
import { Col, Row } from 'react-bootstrap';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from '../Redux/Slice/whishlistSlice';
import { addToCart } from '../Redux/Slice/cartSlice';
import bgimg from '../assets/bgimg.jpg'
function Home() {
  const data = useFetch('https://dummyjson.com/products')
  console.log(data.products);
  const dispatch = useDispatch()
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  const handleAddToWishlist = (item)=>{
    //check if the product is already in wishlist
    const isItem = wishlistArray.some((wishlistItem)=>wishlistItem.id==item.id)
    if(isItem){
      alert('Product available in wishlist')
    }
    else{
      dispatch(addToWishlist(item))
    }
  }

  return (
    <div>
      <div className='banner p-3 mt-3' style={{width:'100%', height:'420px'}}>
        <img style={{borderRadius:'15px'}} width={'100%'} height={'100%'} src={bgimg} alt="" />
      </div>
      <Row className='px-5 my-4' style={{width:'100%'}}>
        {
          data?.length>0?data.map((item)=>(
          <Col className='mx-2'>
            <MDBCard className='my-3' style={{width:'250px', height:'380px', backgroundColor:'rgba(20, 120, 200, 0.15)', border:'none', boxShadow:'1px 1px 3px grey'}}>
              <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <MDBCardImage style={{width:'250px',height:'180px'}} src={item.thumbnail} fluid alt='...' />
                <a><div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div></a>
              </MDBRipple>
              <MDBCardBody>
                <MDBCardTitle>{item.title}</MDBCardTitle>
                <MDBCardText style={{fontSize:'11px'}}>{item.description}</MDBCardText>
                <div id='div1' className='text-center ms-4'>
                <MDBCardText className='text-danger text-center'><h5>${item.price}</h5></MDBCardText>
                </div>
                <MDBBtn id='w1' onClick={()=>handleAddToWishlist(item)} style={{width:'30px', height:'30px', paddingInline:'5px', paddingBlock:'5px'}} href='#'><i class="fa-solid fa-heart text-light"></i></MDBBtn>
                <MDBBtn id='c1' onClick={()=>dispatch(addToCart(item))} style={{width:'30px', height:'30px', paddingInline:'5px', paddingBlock:'5px', backgroundColor:'rgb(20, 120, 200)'}} className='ms-5' href='#'><i class="fa-solid fa-shopping-cart text-light"></i></MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </Col>

          )):"No data found"
        }
      </Row>
    </div>
  )
}

export default Home