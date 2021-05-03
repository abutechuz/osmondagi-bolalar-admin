import "./WebDashIntro.scss";
import Container from "../Container/Container"
import { useRef, useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { client } from '../../utils/api-client'

function WebDashIntro() {

  const speakerName = useRef()
  const speakerJob = useRef()
  const speakerAbout = useRef()
  // ---------
  const videoTitle = useRef()
  const videoTexts = useRef()
  const videoYtid = useRef()
  // ----
  const sliderImg = useRef()
  const smallImg = useRef()
  const bigImg = useRef()

  const [sld, sldSet] = useState([])
  
  useEffect(()=> {
    fetch('http://192.168.0.208:5000/videos')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      sldSet(data)
    })
  }, [])

  return (
    <>
      <Container className="web-intro">
        <form onSubmit={ async(evt) => {
          evt.preventDefault()
          const formData = new FormData()
          formData.append('video_speaker_name', speakerName.current.value)
          formData.append('video_speaker_job', speakerJob.current.value)
          formData.append('video_speaker_about', speakerAbout.current.value)
          // ----- video
          formData.append('video_title', videoTitle.current.value)
          formData.append('video_texts', videoTexts.current.value)
          formData.append('video_ytid', videoYtid.current.value)
          // ---- imgs
          formData.append('sliderImage', sliderImg.current.files[0])
          formData.append('smallImage', smallImg.current.files[0])
          formData.append('bigImage', bigImg.current.files[0])
          console.log(bigImg.current.files[0])

          await fetch('http://192.168.0.208:5000/videos', {
            method: "POST",
            body: formData,
            headers: {
             token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmEkMDYkYWxpb3lLRkVVUWd5VzJ2S2MwUXc3dW1vOVZIWjFDa0U1UUFmTkliT0V0Wi9iSUMvRzZLRi4iLCJpYXQiOjE2MjAwMjQzMDZ9.ifbelGdLxQ3Hg_RbtT3RIpAw9V1MGLBpDkrrnh1zh-I'
            }
              
          })
        }} 
        className="web-intro__form" 
        action=''
        method="POST"
        >
          <div className="web-intro__speaker speaker">
            <div className="speaker__inner">
              <input ref={speakerName} className="speaker__input" type="text" name="speaker_name" placeholder="speaker Ism va Familiyasi "/>
              <input ref={speakerJob} className="speaker__input" type="text" name="speaker_job" placeholder="speaker Ish joyi" />
            </div>
            <textarea ref={speakerAbout} className="speaker__texarea" name="spaeker_about" placeholder="speaker haqida"></textarea>
          </div>

          <div className="web-intro__speaker speaker">
            <div className="speaker__inner">
              <input ref={videoTitle} className="speaker__input" type="text" name="video_title" placeholder="video title" maxLength="100"/>
              <input ref={videoYtid} className="speaker__input" type="text" name="video_ytid" placeholder="video YouTube Link"/>
            </div>
            <textarea ref={videoTexts} className="speaker__texarea" name="video_text" placeholder="video text"></textarea>
          </div>

          <div className="web-intro__file">
            <label className="web-intro__label-btn">
              <span>Slider Image (PNG)</span>
              <input ref={sliderImg} className="web-intro__file-input visually-hidden" type="file" name="sliderImage" accept="image/png"/>
            </label>
            <label className="web-intro__label-btn">
              <span>Small Image</span>
              <input ref={smallImg} className="web-intro__file-input visually-hidden" type="file" name="smallImage " accept="image/*"/>
            </label>
            <label className="web-intro__label-btn">
              <span>Big Image</span>
              <input ref={bigImg} className="web-intro__file-input visually-hidden" type="file" name="bigImage " accept="image/*"/>
            </label>
          </div>

          <button className="web-intro__btn" type="submit">Send</button>
        </form>

        <ul className="intro-sld">
          {
            sld.map(e => (
              <li className="intro-sld__item" key={Math.random()}>
                <button className="intro-sld__btn-del" data-vid={e.video_id} onClick={e => {
                  console.log(e.target.dataset.vid)
                }}>D</button>
                <img className="intro-sld__img" src={`http://192.168.0.208:5000/images/${e.video_images.smallImage}`} alt={e.video_speaker_name}/>
                {/* {console.log(e)} */}
                <div className="intro-sld__inner">
                  <span className="intro-sld__span">{e.video_speaker_name}</span>
                  <span className="intro-sld__span">{e.video_speaker_job}</span>
                </div>
              </li>
            ))
          }
        </ul>
      </ Container>
    </>
  );
}

export default WebDashIntro;