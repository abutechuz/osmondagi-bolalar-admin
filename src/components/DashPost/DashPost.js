import "./DashPost.scss";
import { FileSvg } from "../Svgs/Svgs";
import { useQuery } from "react-query";
import { client } from "../../utils/api-client";
import { useRef } from "react";

function DashPosts() {
  let region = [];
  let profs = [];
  let ages = [];
  let gender = "";

  const { data: reg, isSuccess: regSuccess } = useQuery({
    queryKey: "regions",
    queryFn: () => client("regions"),
  });
  const { data: prof, isSuccess: profSuccess } = useQuery({
    queryKey: "profession",
    queryFn: () => client("profession"),
  });
  const { data: age, isSuccess: ageSuccess } = useQuery({
    queryKey: "age",
    queryFn: () => client("age"),
  });

  const postText = useRef();
  const image = useRef();
  return (
    <>
      <section className="post">
        <form
          onSubmit={async (evt) => {
            evt.preventDefault();
            const formData = new FormData();
            formData.append("gender", gender);
            formData.append("profession", JSON.stringify(profs));
            formData.append("regions", JSON.stringify(region));
            formData.append("age", JSON.stringify(ages));
            formData.append("img", image.current.files[0]);
            formData.append("text", postText.current.value);
            await fetch("http://165.227.211.149:400/post", {
              method: "POST",
              body: formData,
            });
          }}
          className="post__form"
          action=""
          method="post"
        >
          <div className="post__container">
            <label className="post__label-file">
              <input
                ref={image}
                className="post__input-file visually-hidden"
                type="file"
                name="poster"
                accept="image/*"
                onChange={(e) =>
                  e.target.parentElement.classList.add(
                    "web-intro__label-btn--active"
                  )
                }
              />
              <FileSvg />
            </label>
            <textarea
              ref={postText}
              className="post__textarea"
              name="text"
              cols="30"
              rows="5"
              placeholder="body"
            ></textarea>
          </div>

          <div className="post__target">
            <div className="post__target-reg target">
              <div className="target__checkbox--all">
                <span>regions</span>
              </div>
              <ul className="target__list">
                {regSuccess &&
                  reg.map((e) => (
                    <li className="target__item" key={Math.random()}>
                      <label className="target__checkbox">
                        <span>{e?.dbName}</span>
                        <input
                          className="visually-hidden"
                          type="checkbox"
                          name="reg"
                          value={e?.dbName}
                          onChange={(e) => {
                            e.target.parentElement.classList.toggle(
                              "target__checkbox-active"
                            );
                            e.target.checked === true
                              ? region.push(e.target.value)
                              : region.splice(
                                  region.indexOf(e.target.value),
                                  1
                                );
                            console.log(region);
                          }}
                        />
                      </label>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="post__target-prof target">
              <div className="target__checkbox--all">
                <span>Profession</span>
              </div>
              <ul className="target__list">
                {profSuccess &&
                  prof.map((e) => (
                    <li className="target__item" key={Math.random()}>
                      <label className="target__checkbox">
                        <span>{e?.text}</span>
                        <input
                          className="visually-hidden"
                          type="checkbox"
                          name="reg"
                          value={e?.dbName}
                          onChange={(e) => {
                            e.target.parentElement.classList.toggle(
                              "target__checkbox-active"
                            );
                            e.target.checked === true
                              ? profs.push(e.target.value)
                              : profs.splice(profs.indexOf(e.target.value), 1);
                            console.log(profs);
                          }}
                        />
                      </label>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="post__target-age target">
              <div className="target__checkbox--all">
                <span>Ages</span>
              </div>
              <ul className="target__list">
                {ageSuccess &&
                  age.map((e, i) => (
                    <li className="target__item" key={Math.random()}>
                      <label className="target__checkbox">
                        <span>{e?.desc}</span>
                        <input
                          className="visually-hidden"
                          type="checkbox"
                          name="reg"
                          value={i + 1}
                          onChange={(e) => {
                            e.target.parentElement.classList.toggle(
                              "target__checkbox-active"
                            );
                            e.target.checked === true
                              ? ages.push(e.target.value - 0)
                              : ages.splice(ages.indexOf(e.target.value), 1);
                            console.log(ages);
                          }}
                        />
                      </label>
                    </li>
                  ))}
              </ul>
              <div className="post__bottom">
                <div className="post__bottom-inner">
                  <label className="post__gender ">
                    male
                    <input
                      className="visually-hidden"
                      type="checkbox"
                      value="m"
                      onChange={(e) => {
                        e.target.parentElement.classList.toggle(
                          "post__gender--active"
                        );
                        e.target.checked === true
                          ? (gender = [e.target.value])
                          : (gender = "");
                      }}
                    />
                  </label>

                  <label className="post__gender">
                    female
                    <input
                      className="visually-hidden"
                      type="checkbox"
                      value="f"
                      onChange={(e) => {
                        e.target.parentElement.classList.toggle(
                          "post__gender--active"
                        );
                        e.target.checked === true
                          ? (gender = [e.target.value])
                          : (gender = "");
                      }}
                    />
                  </label>
                </div>
                <button className="post__send-btn" type="submit">
                  Send
                </button>
              </div>
            </div>
          </div>
        </form>

        {/* Region list */}
        {/* <div className="post__target target">
          <div className="target__wrapper">
          <button
            className="target__all-btn"
            type="button"
            onClick={(evt) => {
              ages = [];
              profs = [];
              region = [];
              gender = null;
            }}>All</button>

            <label className="target__gender target__gender--m">
              <span>Male</span>
              <input className="target__gender-checkbox" type="radio" name="gender" value="m" onClick={(e)=> {
                gender = e.target.value
                console.log(gender)
              }}/>
            </label>
            <label className="target__gender target__gender--f">
              <span>Fmale</span>
              <input className="target__gender-checkbox" type="radio" name="gender" value="f" onClick={(e)=> {
                gender = e.target.value
                console.log(gender)
              }}/>
            </label>
          </div>
          <div className="target__inner">
            <button
              className="target__btn all-btn"
              type="button"
              onClick={(evt) => {
                region = [];
              }}
            >
              {" "}
              all
            </button>
            <ul className="target__list">
              {regSuccess &&
                reg?.map((e) => (
                  <li className="target__item" key={Math.random()}> */}
        {/* {setSalom(e.dbName)} */}
        {/* <button
                      className="target__bnt"
                      data-name={e?.dbName}
                      type="button"
                      onClick={(evt) => {
                        if (!region.includes(evt.target.dataset.name)) {
                          region.push(evt.target.dataset.name);
                          evt.target.classList.add('target__btn-actv')
                        } else if (region.includes(evt.target.dataset.name)) {
                          const indexItem = region.findIndex((item) => item === evt.target.dataset.name)
                          region.splice(indexItem, 1)
                          evt.target.classList.remove('target__btn-actv')
                        }
                      }}
                    >
                      {e?.name}
                    </button>
                  </li>
                ))}
            </ul>
          </div> */}
        {/* profession list */}
        {/* <div className="target__inner">
            <button
              className="target__btn all-btn"
              type="button"
              onClick={(evt) => {
                profs = [];
              }}
            >
              all
            </button>
            <ul className="target__list">
              {profSuccess &&
                prof?.map((e) => (
                  <li className="target__item" key={Math.random()}>
                    <button
                      className="target__bnt"
                      data-name={e?.dbName}
                      type="button"
                      onClick={(evt) => {
                        if (!profs.includes(evt.target.dataset.name)) {
                          profs.push(evt.target.dataset.name);
                          evt.target.classList.add('target__btn-actv')
                        } else if (profs.includes(evt.target.dataset.name)) {
                          const indexItem = profs.findIndex((item) => item === evt.target.dataset.name)
                          profs.splice(indexItem, 1)
                          evt.target.classList.remove('target__btn-actv')
                        }
                      }}
                    >
                      {e?.text}
                    </button>
                  </li>
                ))}
            </ul>
          </div> */}
        {/* age list */}
        {/* <div className="target__inner">
            <button
              className="target__btn all-btn"
              type="button"
              onClick={(evt) => {
                ages = [];
              }}
            >
              all
            </button>
            <ul className="target__list">
              {ageSuccess &&
                age?.map((e, i) => (
                  <li className="target__item" key={Math.random()}>
                    <button
                      className="target__bnt"
                      data-name={i + 1}
                      type="button"
                      onClick={(evt) => {
                        if (!ages.includes(evt.target.dataset.name)) {
                          ages.push(evt.target.dataset.name);
                          evt.target.classList.add('target__btn-actv')
                        } else if (ages.includes(evt.target.dataset.name)) {
                          const indexItem = ages.findIndex((item) => item === evt.target.dataset.name)
                          ages.splice(indexItem, 1)
                          evt.target.classList.remove('target__btn-actv')
                        }
                      }}
                    >
                      {e?.desc}
                    </button>
                  </li>
                ))}
            </ul>
          </div> 
        </div>*/}
      </section>
    </>
  );
}

export default DashPosts;
