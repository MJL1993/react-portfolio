import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './Card2.css'



export default function Card2() {

    const links = {
        Instagram: "https://www.instagram.com/marshalllowry/",
        Music: "https://www.marshalllowry.com/contact"
    }


  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Typography className="Card2" component="div">
            <br/>
            <br/>
            <a href={links.Instagram} rel="noreferrer" target="_blank"><h2 className="Instagram">Instagram</h2></a>
            <a href={links.Music} ><h2 className="Lessons">Piano/Saxophone/Composition/Production Lessons</h2></a>
        </Typography>
      </Container>
    </React.Fragment>
  );
}
