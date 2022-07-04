import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function CardA() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={5}>

          <Grid  item xs={6} sm={4} md={3} lg={3}>
            <Item className='card-item-b'  style={{ textAlign: "center" }}>
              <img src='/assets/img/marketplace/bg/source-600-850.jpg' className='main color-1' />
              <img src='/assets/img/marketplace/league/1.png' className='logo-top-right' />
              <img src='/assets/img/marketplace/player/player-0001.png' className='player' />
              <h4 className='player-fname'>Lionel</h4>
              <h1 className='player-lname'>Messi</h1>
              <span className='age'>AGE<br/>33</span>
              <span className='position'>POSITION<br/>CF</span>
              <span className='country'>COUNTRY<br/><img src='/assets/img/marketplace/flag/1.png'/><img src='/static/images/card/flag/2.png'/></span>
            </Item>
          </Grid>

          <Grid  item xs={6} sm={4} md={3} lg={3}>
            <Item className='card-item-b'  style={{ textAlign: "center", backgroundColor:"#fff" }}>
              <img src='/static/images/card/bg/source-600-850.jpg' className='main color-2' />
              <img src='/static/images/card/league/1.png' className='logo-top-right' />
              <img src='/static/images/card/player/player-0002.png' className='player' />
              <h4 className='player-fname'>Karim</h4>
              <h1 className='player-lname'>De Bruyne</h1>
              <span className='age'>AGE<br/>33</span>
              <span className='position'>POSITION<br/>CF</span>
              <span className='country'>COUNTRY<br/><img src='/static/images/card/flag/1.png'/></span>
            </Item>
          </Grid>

          <Grid  item xs={6} sm={4} md={3} lg={3}>
            <Item className='card-item-b'  style={{ textAlign: "center", backgroundColor:"#fff" }}>
              <img src='/static/images/card/bg/source-600-850.jpg' className='main color-3' />
              <img src='/static/images/card/league/1.png' className='logo-top-right' />
              <img src='/static/images/card/player/player-0003.png' className='player' />
              <h4 className='player-fname'>Robert</h4>
              <h1 className='player-lname'>Lewandowski</h1>
              <span className='age'>AGE<br/>33</span>
              <span className='position'>POSITION<br/>CF</span>
              <span className='country'>COUNTRY<br/><img src='/static/images/card/flag/1.png'/></span>
            </Item>
          </Grid>

          <Grid  item xs={6} sm={4} md={3} lg={3}>
            <Item className='card-item-b'  style={{ textAlign: "center", backgroundColor:"#fff" }}>
              <img src='/static/images/card/bg/source-600-850.jpg' className='main color-4' />
              <img src='/static/images/card/league/1.png' className='logo-top-right' />
              <img src='/static/images/card/player/player-0001.png' className='player' />
              <h4 className='player-fname'>Lionel</h4>
              <h1 className='player-lname'>Messi</h1>
              <span className='age'>AGE<br/>33</span>
              <span className='position'>POSITION<br/>CF</span>
              <span className='country'>COUNTRY<br/><img src='/static/images/card/flag/1.png'/><img src='/static/images/card/flag/2.png'/></span>
            </Item>
          </Grid>

          <Grid  item xs={6} sm={4} md={3} lg={3}>
            <Item className='card-item-b'  style={{ textAlign: "center", backgroundColor:"#fff" }}>
              <img src='/static/images/card/bg/source-600-850.jpg' className='main color-4' />
              <img src='/static/images/card/league/1.png' className='logo-top-right' />
              <img src='/static/images/card/player/player-0002.png' className='player' />
              <h4 className='player-fname'>Karim</h4>
              <h1 className='player-lname'>De Bruyne</h1>
              <span className='age'>AGE<br/>33</span>
              <span className='position'>POSITION<br/>CF</span>
              <span className='country'>COUNTRY<br/><img src='/static/images/card/flag/1.png'/></span>
            </Item>
          </Grid>

          <Grid item xs={6} sm={4} md={3} lg={3}>
            <Button className='card-item-b'  style={{ textAlign: "center", backgroundColor:"#fff" }}>
              <img src='/static/images/card/bg/source-600-850.jpg' className='main color-b' />
              <img src='/static/images/card/league/1.png' className='logo-top-right' />
              <img src='/static/images/card/player/player-0003.png' className='player' />
              <h4 className='player-fname'>Robert</h4>
              <h1 className='player-lname'>Lewandowski</h1>
              <span className='age'>AGE<br/>33</span>
              <span className='position'>POSITION<br/>CF</span>
              <span className='country'>COUNTRY<br/><img src='/static/images/card/flag/1.png'/></span>
            </Button>
          </Grid>

        </Grid>
      </Box>
    </div>

  );
}