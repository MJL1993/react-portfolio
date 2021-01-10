import { Typography } from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import React from 'react'


const Links = {
    marshalllowry: "https://www.marshalllowry.com/"
}

export default function Footer() {
    return (
        
<BottomNavigation>
        <Typography>
            © 2021 Website by <a href={Links.marshalllowry} target="_blank">Marshall Lowry</a>
        </Typography>
</BottomNavigation>
        
    )
}










