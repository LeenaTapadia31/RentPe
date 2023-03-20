import { useEffect,useState } from 'react';
import axios from 'axios';
import { Box, Typography, Button, Grid, styled,TextField,Dialog, DialogActions, DialogContent,DialogContentText, DialogTitle } from '@mui/material';
import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/actions/cartActions';

import TotalView from './TotalView';
import EmptyCart from './EmptyCart';
import CartItem from './CartItem';
import { post } from '../../utils/paytm';
import { payUsingPaytm } from '../../service/api';

const url='http://localhost:8000/address'
const Component = styled(Grid)(({ theme }) => ({
    padding: '30px 135px',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
        padding: '15px 0'
    }
}));

const LeftComponent = styled(Grid)(({ theme }) => ({
    paddingRight: 15,
    [theme.breakpoints.down('sm')]: {
        marginBottom: 15
    }
}));

const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
`;

const BottomWrapper = styled(Box)`
    padding: 16px 22px;
    background: #fff;
    box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
    border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
    display: flex;
    margin-left: auto;
    background: #c09488;
    color: #fff;
    border-radius: 2px;
    width: 250px;
    height: 51px;
`;
const addressInitialValues = {
    username: '',
    address1: '',
    address2: '',
    pincode:'',
    phone: '',
    city: '',
    
   
};
const Cart = () => {
    const cartDetails = useSelector(state => state.cart);
    const { cartItems } = cartDetails;
    const { id } = useParams();
    const [ address, setAddress ] = useState(addressInitialValues);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(cartItems && id !== cartItems.id)   
            dispatch(addToCart(id));
    }, [dispatch, cartItems, id]);

    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id));
    }

    const buyNow = async () => {
        let response = await payUsingPaytm({ amount: 3000, email: 'leenatapadia@gmail.com'});
        var information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response    
        }
        post(information);
    }
    const [open, setOpen] = useState(false);
    const onInputChange = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
    }
    const signupAddress = async() => {
       try {
        const resp = await axios.post(url,address)
        console.log(resp.data);
        handleClose()
       } catch (error) {
        console.log(error.response)
       }
    }
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <>
        { cartItems.length ? 
            <Component container>
                <LeftComponent item lg={9} md={9} sm={12} xs={12}>
                    <Header>
                        <Typography style={{fontWeight: 600, fontSize: 18}}>My Cart ({cartItems?.length})</Typography>
                    </Header>
                        {   cartItems.map(item => (
                                <CartItem item={item} removeItemFromCart={removeItemFromCart}/>
                            ))
                        }
                    <BottomWrapper>
                    <StyledButton onClick={handleClickOpen} variant="contained">Edit Address</StyledButton>
                    <br></br>
                    <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Delivery Address</DialogTitle>
          <DialogContent>
          <TextField
              autoFocus
              margin="dense"
              name="username"
              label="Enter username"
              type="string"
              fullWidth
              variant="standard"
              onChange={(e) => onInputChange(e)}
            />
            <TextField
              autoFocus
              margin="dense"
              name="address1"
              label="Address line 1"
              type="string"
              fullWidth
              variant="standard"
              onChange={(e) => onInputChange(e)}
            />
              <TextField
              autoFocus
              margin="dense"
              name="address2"
              label="Address line 2"
              type="string"
              fullWidth
              variant="standard"
              onChange={(e) => onInputChange(e)}
            />
            
            <TextField
              autoFocus
              margin="dense"
              name="pincode"
              label="pincode"
              type="number"
              fullWidth
              variant="standard"
              onChange={(e) => onInputChange(e)}
            />
            <TextField
              autoFocus
              margin="dense"
              name="city"
              label="city"
              type="string"
              fullWidth
              variant="standard"
              onChange={(e) => onInputChange(e)}
            />
              <TextField
              autoFocus
              margin="dense"
              name="phone"
              label="phone"
              type="number"
              fullWidth
              variant="standard"
              onChange={(e) => onInputChange(e)}
            />
            
          </DialogContent>
          <DialogActions>
            
            <StyledButton onClick={() => signupAddress()} variant="contained">Submit</StyledButton>
          </DialogActions>
        </Dialog>
                        <StyledButton onClick={() => buyNow()} variant="contained">Place Order</StyledButton>
                        
                    </BottomWrapper>
                </LeftComponent>
                <Grid item lg={3} md={3} sm={12} xs={12}>
                    <TotalView cartItems={cartItems} />
                </Grid>
            </Component> : <EmptyCart />
        }
        </>

    )
}

export default Cart;


