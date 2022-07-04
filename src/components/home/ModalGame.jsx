import React, { useEffect, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { BsArrowUp, BsArrowDown, BsAppIndicator } from "react-icons/bs";
import './../../assets/css/home/ModalGame.css'
import Flag from './../flag/main'
import api from "../../api/api";
import { css } from "@emotion/react";
import PropagateLoader from "react-spinners/PropagateLoader";
import { useDispatch, useSelector } from "react-redux";
import imageURL from './../../api/imageApi'
export default function ModalGame({setOpenModal}) {
  const [loading,setLoading]=useState(false)
  const [color, setColor] = useState("#525fe1");
  const {user}=useSelector(state=>state.login);
  const dispatch=useDispatch()
  const [imageUrl,setImageUrl]=useState(imageURL)
  console.log(`${imageUrl}/1.png`);
  const [dataStep, setDataStep] = useState([
    { "id": 6,  quiz: "null", "parentId": null, "fullName": "Rob Holding", "position": "CB", "age": 26, "nationalityId1": 2, "nationalityId2": null, "quizMarketValue": 10.00, "styleId": 7, "teamId": 1, "leagueId": 1 },
    { "id": 8,  quiz: "null", "parentId": null, "fullName": "Nuno Tavares", "position": "LB", "age": 22, "nationalityId1": 5, "nationalityId2": null, "quizMarketValue": 13.00, "styleId": 9, "teamId": 1, "leagueId": 1 },
    { "id": 11, quiz: "null", "parentId": null, "fullName": "Thomas Partey", "position": "DM", "age": 28, "nationalityId1": 6, "nationalityId2": null, "quizMarketValue": 40.00, "styleId": 2, "teamId": 1, "leagueId": 1 },
    { "id": 8,  quiz: "null", "parentId": null, "fullName": "Nuno Tavares", "position": "LB", "age": 22, "nationalityId1": 5, "nationalityId2": null, "quizMarketValue": 13.00, "styleId": 9, "teamId": 1, "leagueId": 1 },
    { "id": 18, quiz: "null", "parentId": null, "fullName": "Gabriel Martinelli", "position": "LW", "age": 20, "nationalityId1": 3, "nationalityId2": null, "quizMarketValue": 38.00, "styleId": 9, "teamId": 1, "leagueId": 1 },
    { "id": 11, quiz: "null", "parentId": null, "fullName": "Thomas Partey", "position": "DM", "age": 28, "nationalityId1": 6, "nationalityId2": null, "quizMarketValue": 10.00, "styleId": 2, "teamId": 1, "leagueId": 1 },
    { "id": 17, quiz: "null", "parentId": null, "fullName": "Emile Smith Rowe", "position": "AM", "age": 21, "nationalityId1": 2, "nationalityId2": null, "quizMarketValue": 20.00, "styleId": 8, "teamId": 1, "leagueId": 1 },
    { "id": 11, quiz: "null", "parentId": null, "fullName": "Thomas Partey", "position": "DM", "age": 28, "nationalityId1": 6, "nationalityId2": null, "quizMarketValue": 30.00, "styleId": 2, "teamId": 1, "leagueId": 1 },
    { "id": 14, quiz: "null", "parentId": null, "fullName": "Albert Sambi Lokonga", "position": "CM", "age": 22, "nationalityId1": 6, "nationalityId2": null, "quizMarketValue": 16.00, "styleId": 5, "teamId": 1, "leagueId": 1 },
    { "id": 12, quiz: "null", "parentId": null, "fullName": "Granit Xhaka", "position": "DM", "age": 29, "nationalityId1": 6, "nationalityId2": null, "quizMarketValue": 20.00, "styleId": 3, "teamId": 1, "leagueId": 1 },
    { "id": 1 , quiz: "null", "parentId": null, "fullName": "Granit Xhaka1", "position": "DM", "age": 29, "nationalityId1": 6, "nationalityId2": null, "quizMarketValue": 10.00, "styleId": 3, "teamId": 1, "leagueId": 1 }
]);
    const [NumberQuestion, setResultQuestion] = React.useState(0);
    let items1 = dataStep[NumberQuestion];
    let items2 = dataStep[(NumberQuestion + 1)];
    const [slideIn1, setSlideIn1] = React.useState(true);
    const [slideIn2, setSlideIn2] = React.useState(true);
    const [slideNo, setSlideNo] = React.useState(1);
    const [modalText,setModalText]=useState(true)
    const [modalTrueAnswer,setModalTrueAnswer]=useState(false)
    const [modalFinalAnswer,setModalFinalAnswer]=useState(true)
    const [countTrue,setCountTrue]=useState()
    function toggleSlide(p) {
      if (slideIn1 / 2 == 0) { setSlideIn1((slideIn1) => !slideIn1); }
      else { setSlideIn2((slideIn2) => !slideIn2); }

      setSlideNo(slideNo + 1);

      if (items1.quizMarketValue > items2.quizMarketValue) {
          if (p == "up")
              items2.quiz = "true";
          else
              items2.quiz = "false";
      }
      if (items1.quizMarketValue < items2.quizMarketValue) {
          if (p == "up")
              items2.quiz = "false";
          else
              items2.quiz = "true";
      }

      if(NumberQuestion!==9)
      {
          const dataSteps = [...dataStep];
          dataSteps[NumberQuestion + 1] = items2;
          setDataStep(dataSteps);
          setResultQuestion(NumberQuestion + 1)
          const count=dataSteps.filter((value)=>value.quiz==='true').length
          setCountTrue(count)
          if(countTrue>=6){
            setModalFinalAnswer(true)
            api.get(`api/auth/${user.token}/registrComplite`).then(res=>{
              if(res.data){
                console.log(true);
              }
            })
          }else{
            console.log('again');
            setModalFinalAnswer(false)
          }
          
      }else{
        setModalTrueAnswer(true)
          setModalText(true)
      }
  }

  useEffect(()=>{
    setLoading(true)
    try{
       api.get('api/quiz/start' ,{
        headers: { "Content-Type": "application/json" }
      }).then(res=>{
        console.log(res.data);
        setDataStep(res.data)
        setLoading(true)
      })
      
    }catch(err){
      console.log(err);
    }

    return()=>{
      setDataStep([])
    }
  },[])

  const handleGame=()=>{
    setOpenModal(false)
  }
 
  
  return (
    <div className="modalGame">
       {modalText ? ( <div className="modal__text">
       <div className="modalGame__closeBtn" onClick={()=>setOpenModal(false)}>
          <GrFormClose />
        </div>
        {modalTrueAnswer ? (<>
          <div className="modaltrueanswer">
            {modalFinalAnswer ? (<>
            <h3>
            Congratulations
            </h3>
            <div className="modaltrueanswer__text">
              <p>You passed this step successfully.</p>
            <b>$20 </b>
            gift will be charged to your acount.
            <p>Play to Earn more .</p>
            </div>
            <div className="modaltrueanswer__cash">
            How to cash out?
            </div>
            </>):(<>
            <div className="modaltrueanswer__failed">
            <p>unfortunately unfortunately you didn't pass</p>
            <p>Please try again</p>
            </div>
            <button className="start__game__btn" onClick={handleGame}>Start Game again</button>

            </>)}
          </div>
        </>):(<>
            <div className="modalText__startgame">
              <p>What do you think about the market value of these players?
Get your 20$ reward by giving 6 correct answers out of 10 from this challenge.</p>
            </div>
            
            <button className="start__game__btn" onClick={()=>setModalText(false)} >Start Game</button>
            </>)}
            </div>):(<>
      <div className="modalGame__content">
        <div className="modalGame__closeBtn" onClick={()=>setOpenModal(false)}>
          <GrFormClose />
        </div>
        <div className="modalGame__inner">
          <form className="modalGame__inner__form">
            <h5 className="modalGame__inner__form__tittle">Register Quiz</h5>
            <div className="modalGame__inner__form__inner">
              <div className="modalGame__inner__form__inner__left">
                <div className="modalGame__inner__form__inner__left__inner ">
                  <div className='modalGame__inner__form__inner__left__inner__playerImage'>
                    <img src={`${imageUrl}/${items1?.id}.png`} alt="player"/>
                  </div>
                  <div className="modalGame__inner__form__inner__left__inner__box">
                    <div className="modalGame__inner__form__inner__left__inner__box__flag">
                      <img src={`/assets/img/marketplace/flag/${Flag(items1?.nationalityId1)}.png`} alt="" />
                    </div>
                    <div className="modalGame__inner__form__inner__left__inner__box__content">
                      <h3 className="modalGame__inner__form__inner__left__inner__box__content__title">
                      {`Name: ${items1?.fullName} + ${items1?.id}`}
                      </h3>
                      <div className="modalGame__inner__form__inner__left__inner__box__content__text">
                        <h3 className="modalGame__inner__form__marketvalue">
                          Market Vlaue:
                        </h3>
                        <div className="modalGame__inner__form__marketvalue__icon">
                          <span>€</span>
                        </div>
                        <p className="modalGame__inner__form__marketvalue__icon__value">
                        {items1?.quizMarketValue} M
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="app__versus__bar">

              </div>
              <div className="modalGame__inner__form__inner__right">
                <div className="modalGame__inner__form__inner__left__inner">
                <div className="modalGame__inner__form__inner__left__inner__item__box">

                  <div className={`modalGame__inner__form__inner__left__inner__playerImage`}>
                    <img src={`${imageUrl}/${items2?.id}.png`} alt="player" />
                  </div>
                  </div>
                  <div className="modalGame__inner__form__inner__right__inner__box">
                    <div className="modalGame__inner__form__inner__left__inner__box__flag">
                      <img src={`/assets/img/marketplace/flag/${Flag(items2?.nationalityId1)}.png`} alt="" />
                    </div>
                    <div className="modalGame__inner__form__inner__left__inner__box__content">
                      <p className="modalGame__inner__form__inner__left__inner__box__content__text">
                        Does
                        <b>{items2?.fullName} + {items2?.id}</b>
                        have a<p className="text_red">HIGHER</p>
                        or
                        <p className="text__green">Lower</p>
                        market value than
                        <b>{items1?.fullName} ?</b>
                      </p>
                    </div>
                  </div>
                  <div className="modalGame__inner__form__inner__right__inner__btn">
                    <div className="modalGame__inner__form__inner__right__inner__btn__green"
                    onClick={() => toggleSlide("up")}
                    >
                      <BsArrowUp />
                      <p>View all Creators</p>
                    </div>
                    <div className="modalGame__inner__form__inner__right__inner__btn__red"
                    onClick={() => toggleSlide("down")}
                    >
                      <BsArrowDown />
                      <p>View all Creators</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modalgame__point">
              <span className={`${dataStep[1]?.quiz} `}>1</span>
              <span className={`${dataStep[2]?.quiz} `}>2</span>
              <span className={`${dataStep[3]?.quiz} `}>3</span>
              <span className={`${dataStep[4]?.quiz} `}>4</span>
              <span className={`${dataStep[5]?.quiz} `}>5</span>
              <span className={`${dataStep[6]?.quiz} `}>6</span>
              <span className={`${dataStep[7]?.quiz} `}>7</span>
              <span className={`${dataStep[8]?.quiz} `}>8</span>
              <span className={`${dataStep[9]?.quiz} `}>9</span>
              <span className={`${dataStep[10]?.quiz} `}>10</span>
            </div>
            <div className="modalgame__modalbox">
              <div className="modalgame__modalbox__item">
                <h5 className="modalgame__textleft">Gift Low: 20 $</h5>
              </div>
              <div className="modalgame__modalbox__item">
                <h5 className="modalgame__textright">Gift High: 50 $</h5>
              </div>
            </div>
            
          </form>
        </div>
      </div>
      </>)}
    </div>
  );
}


