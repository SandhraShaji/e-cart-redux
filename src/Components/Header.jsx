import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
function Header() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  const cartArray = useSelector((state)=>state.cartReducer)
  return (
    <div>
        <MDBNavbar id='nav' style={{paddingBottom:'20px', paddingTop:'10px'}} black >
        <MDBContainer fluid>
          <MDBNavbarBrand className='text-light' href='/'>
            <i class="fa-solid fa-cart-shopping ms-2 me-3"></i>
            ShopNest
          </MDBNavbarBrand>
          <Link to={'/wishlist'}>
          <a style={{marginLeft:'850px', display:'flex', boxShadow:'none'}}><i class="fa-solid fa-heart text-light"></i>
          <Badge style={{backgroundColor:'rgb(20, 120, 200)'}} bg="text-light ms-2">{wishlistArray.length}</Badge></a>
          </Link>
          <Link to={'/cart'}>
          <a style={{boxShadow:'none'}}><i class="fa-solid fa-shopping-cart text-light"></i>
          <Badge style={{backgroundColor:'rgb(20, 120, 200)', marginRight:'10px'}} bg="text-light ms-2">{cartArray.length}</Badge></a>
          </Link>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header