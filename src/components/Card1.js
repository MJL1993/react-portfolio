import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './Card1.css'

export default function Card1() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Typography className="Card1" component="div">
            <br/>
            <br/>
            <h1 className="contact">Contact:</h1>
            <h2 className="email">marshalljacksonlowry@gmail.com</h2>
        </Typography>
      </Container>
    </React.Fragment>
  );
}