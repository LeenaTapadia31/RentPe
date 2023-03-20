import React from "react";
import { Box, styled,Typography } from '@mui/material';
import rlogo from '../rlogo.jpeg'
const Container = styled(Box)(({ theme}) => ({
    width: '100%',
    bakcground:'#f3eee6',
    [theme.breakpoints.down('md')]: {
        width: '100%'
    }
}))
const Text = styled(Typography)`
    font-size: 50px;
    margin-top: 5px;
    text-align:center;
    color:#3e281e;
    font-family:bradley hand,cursive;
    text-decoration:underline;
    text-decoration-color:#b37c65;
`
const SubText = styled(Typography)`
    font-size: 20px;
    margin-top: 25px;
    text-align:center;
    color:#000;
    font-family:bradley hand,cursive;
    text-decoration:none !imp;
`
const Image = styled('img')`
display: block;
margin-left: auto;
margin-right: auto;
width: 25%;
`
const About = () =>{
    return(
       <Container>
<Text>About Us</Text>
<Image src={rlogo}/>
<SubText>
Fashion is an ever-evolving industry. It can be challenging to keep up
with all the latest styles and trends nowadays. Moreover, physical and
financial constraints won’t allow you to buy and keep each dress that tickles
your fancy. Whether it’s office
outfits or casual clothes, you always want to look fresh and new. We all know
that sustainable fashion is important for the planet and we don’t want to
waste, but getting snapped in the same outfit or having to wear the same dress
to multiple parties can be really embarrassing. Plus, who has all that closet
space? The solution: Stop Buying, Start Renting!This is what we at RentPe do. We enhance
the everyday style and cater to the needs of all in terms of style and affordability!
<br/>with the ever evolving fashion it has become extremely difficult to keep up with latest styles and trends . Moreover, physically and financially it's not befitting to buy and keep every dress we fancy. Plus who has all that closet space ! Morever , Sustainable fashion has become need of the hour! so the ultimate solution to this is : STOP BUYING , START RENTING!! this is exactly what we at RentPe aim to do . We along with providing you with a plethora of options for every occasion to enhance your eveyday fashion also provide it in the minimal cost
<br/>
</SubText>
<Text>So start "Rent ,Wear ,Repeat'!!</Text>
       </Container>
    )
}

export default About