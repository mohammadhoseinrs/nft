import React from "react";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import './../../assets/css/marketplace/players.css';

export default function TopPlayers(props) {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

    const mapingString = (a, b, c) => {
      if (c)
        return a + b + c;
      return a + b;
    }
    const FormatFullname = (bb) => {
      let fullname = bb.fullname.toString().replace(' ', '-');
      fullname = fullname.split('-');
      if (fullname.length == 1) {
        return (
          <span>
            <h1 class={"player-fname mt-10"} style={{ fontSize: 'large' }}>{fullname[0]}</h1>
          </span>
        )
      }
      return (
        <span>
          <h4 className="player-fname">{fullname[0]}</h4>
          <h1 class="player-lname">{fullname[1]}</h1>
        </span>
      )
    }
    const FormatNationality = (aa) => {
      let format = '.png';
      let dir1 = './assets/img/marketplace/flag/' + aa.nationalityId1 + format;
      let dir2 = './assets/img/marketplace/flag/' + aa.nationalityId2 + format;
      if (aa.nationalityId2)
        return <span className='country'><span>COUNTRY</span><br /><img src={dir1} /><img src={dir2} /></span>
      return (
        <span className='country'><span>COUNTRY</span><br /><img src={dir1} /></span>
      )
    }

    return (
      
      <Grid item xs={6} sm={4} md={3} lg={3} >
        <Item className='card-item' style={{ textAlign: "center" }}>
          <img src={"/assets/img/marketplace/bg/s-" + props.themeId + "/600-900.jpg"} className={mapingString('main color-', props.styleId)} />
          <img src={mapingString('/assets/img/marketplace/league/', props.leagueId, '.png')} className='logo-top-right' />
          <div class="img-wrap"><img src={mapingString('/assets/img/marketplace/player/', props.id, '.png')} className='player' /></div>
          <FormatFullname fullname={props.fullName} />
          <span className='age'><span>AGE</span><br />{props.age}</span>
          <span className='position'><span>POSITION</span><br />{props.position}</span>
          <FormatNationality nationalityId1={props.nationalityId1} nationalityId2={props.nationalityId2} />
          <img src='/assets/img/marketplace/bg/s-1/fade.png' className={'main color-' + props.styleId + '-fade fade-default'} />
        </Item>
        {/* <div class="bid__bottom d-flex align-items-center justify-content-between mt-20 row">
          <div class="bid__btn-wrapper col-12 col-sm-6">
            <a href="product-details.html" class="bid__btn bid__btn-border  col-12" tabindex="0">Rent</a>
          </div>
          <div class="bid__btn-wrapper col-12 col-sm-6">
            <button type="button" class="bid__btn col-12 btn-danger" data-bs-toggle="modal" data-bs-target="#ModalBuy" tabindex="0">Buy</button>
          </div>
        </div> */}
      </Grid>
    );
  
}