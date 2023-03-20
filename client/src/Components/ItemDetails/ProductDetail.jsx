
import { Box, Typography, Table, TableBody, TableRow, TableCell, styled } from '@mui/material';
import { LocalOffer as Badge } from '@mui/icons-material';
import { useRadioGroup } from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const SmallText = styled(Box)`
    font-size: 14px;
    vertical-align: baseline;
    & > p {
        font-size: 14px;
        margin-top: 10px;
    }
`

const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    & > td {
        font-size: 14px;
        margin-top: 10px;
    }
`

const StyledBadge = styled(Badge)`
    margin-right: 10px;
    color: #00CC00;
    font-size: 15px;
`;

const ProductDetail = ({ product }) => {
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date = new Date(new Date().getTime()+(5*24*60*60*1000));
    
    return (
        <>
            <Typography>Services</Typography>
            <SmallText>
                <Typography><StyledBadge />Premium Quality and Relaxed fit</Typography>
                <Typography><StyledBadge />Doorstep Delivery and Pickup </Typography>
                <Typography><StyledBadge />Get 5% paytm cashback of upto Rs200 on a minimum transaction value of Rs2000</Typography>
                <Typography><StyledBadge />Easy Returns</Typography>
            </SmallText>
            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: 600 }}>Delivery by {date.toDateString()} | ₹40</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                        <TableCell>
                            <span style={{ color: '#2874f0' }}>SuperComNet</span>
                            <Typography>GST invoice available</Typography>
                            <Typography>View more sellers starting from ₹329</Typography>
                        </TableCell>
                    </ColumnText>
                    <TableRow>
                       <Typography>
                        <TableCell style={{ color: '#878787' }} >Size</TableCell></Typography>
                        <TableCell>



    <FormControl>
      {/* <FormLabel id="demo-row-radio-buttons-group-label">Size</FormLabel> */}
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        defaultValue="M"
        name="row-radio-buttons-group"
        
      >
        <FormControlLabel value="XS"control={<Radio />} label="XS"/>
        <FormControlLabel value="S" control={<Radio />} label="S" />
        <FormControlLabel value="M"  control={<Radio />} label="M" />
        <FormControlLabel value="L" control={<Radio />} label="L" />
      </RadioGroup>
    </FormControl>
 
</TableCell>
                        {/* <TableCell colSpan={2}>
                            <img src={adURL} style={{ width: 390 }} />
                        </TableCell> */}
                    </TableRow>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </ColumnText>
                </TableBody>
            </Table>
        </>
    )
}

export default ProductDetail;