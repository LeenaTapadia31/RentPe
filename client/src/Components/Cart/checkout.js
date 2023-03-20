import StripeCheckout from 'react-stripe-checkout';
import { Box, Typography, Button, Grid, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import Home from '../Home'
import { useState } from 'react';
function onToken(token){
console.log(token)
}
const Checkout = () =>{
    const [check,setCheck] = useState(false)
    const handleCheck = () =>{
        setCheck(true)
    }
    return(
        <>
    <StripeCheckout
        token={onToken}
        stripeKey="pk_test_51M25EhSCR5FUvBwqECkwxo7tKUGgUDdiOeYZzzi0iiw2UXiw0EMmnJBuOpO78xKtPGt7wEkipGm41Yt6apRwag2p007tNVAJKU"
      >
        <Button  variant="contained" >Place Order</Button>
        
        </StripeCheckout>
       <>thankyou for making an purchase</>
        </>
)
}
export default Checkout