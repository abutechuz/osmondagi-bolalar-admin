import "./WebDashIntro.scss";
import Container from "../Container/Container"

function WebDashIntro() {
  return (
    <>
      <Container className="web-intro">
        <form className="web-intro__form" action="/" method="post">
          <div className="web-intro__speaker speaker">
            <div className="speaker__inner">
              <input className="speaker__input" type="text" name="speaker_name" placeholder="speaker name"/>
              <input className="speaker__input" type="text" name="speaker_jop" placeholder="speaker job"/>
            </div>
            <textarea className="speaker__texarea" name="spaeker_about" placeholder="About speaker"></textarea>
          </div>

          <div className="web-intro__speaker speaker">
            <div className="speaker__inner">
              <input className="speaker__input" type="text" name="video_title" placeholder="video title"/>
              <input className="speaker__input" type="text" name="video_ytid" placeholder="video YouTube Link"/>
            </div>
            <textarea className="speaker__texarea" name="video_text" placeholder="video text"></textarea>
          </div>

          <div className="web-intro__file">
            <label className="web-intro__label-btn">
              <span>Slider Image</span>
              <input className="web-intro__file-input visually-hidden" type="file" name="sliderImage" accept="image/png"/>
            </label>
            <label className="web-intro__label-btn">
              <span>Small Image</span>
              <input className="web-intro__file-input visually-hidden" type="file" name="smallImage " accept="image/png"/>
            </label>
            <label className="web-intro__label-btn">
              <span>Big Image</span>
              <input className="web-intro__file-input visually-hidden" type="file" name="bigImage " accept="image/png"/>
            </label>
          </div>

          <button className="web-intro__btn" type="submit">Send</button>
        </form>
      </ Container>
    </>
  );
}

export default WebDashIntro;