import "./DashPost.scss";
// import Container from '../Container/Container'
// import { useState, useEffect } from 'react';
import { FileSvg } from "../Svgs/Svgs";
import { useQuery } from "react-query";
import { client } from "../../utils/api-client";
import { useRef } from "react";

function DashPosts() {
  let region = [];
  let profs = [];
  let ages = [];
  let gender = null;

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
        <div className="post__container">
          <form
            onSubmit={async (evt) => {
              evt.preventDefault();
              var formData = new FormData();

              await fetch("http://192.168.1.233:4000/post", {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  gender: gender, 
                  profession: profs,
                  regions: region,
                  age: ages,
                }),
              })
            }}
            className="post__form"
            action="/"
            method="post"
          >
            <div className="post__inner">
              <label className="post__label-file">
                <input
                  ref={image}
                  className="post__input-file visually-hidden"
                  type="file"
                  name="title"
                  placeholder="title"
                />
                <span>
                  <FileSvg />
                </span>
              </label>
              <button type="submit">Send</button>
            </div>
            <textarea
              ref={postText}
              className="post__textarea"
              name="body"
              cols="30"
              rows="5"
              placeholder="body"
            ></textarea>
          </form>
        </div>

        {/* Region list */}
        <div className="post__target target">
          <button
            className="target__all-btn"
            type="button"
            onClick={(evt) => {
              ages = [];
              profs = [];
              region = [];
              gender = null;
            }}
          >
            All
          </button>
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
                  <li className="target__item" key={Math.random()}>
                    <button
                      className="target__bnt"
                      data-name={e?.dbName}
                      type="button"
                      onClick={(evt) => {
                        region.push(evt.target.dataset.name);
                        
                      }}
                    >
                      {e?.name}
                    </button>
                  </li>
                ))}
            </ul>
          </div>
          {/* profession list */}
          <div className="target__inner">
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
                        profs.push(evt.target.dataset.name);
                      }}
                    >
                      {e?.text}
                    </button>
                  </li>
                ))}
            </ul>
          </div>
          {/* age list */}
          <div className="target__inner">
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
                        ages.push(Number(evt.target.dataset.name));
                      }}
                    >
                      {e?.desc}
                    </button>
                  </li>
                ))}
            </ul>
          </div>

          <div className="target__inner">
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
              <li className="target__item">
                <button
                  className="target__bnt"
                  type="button"
                  onClick={(e) => {
                    gender = "m";
                  }}
                >
                  M
                </button>
              </li>
              <li className="target__item">
                <button
                  className="target__bnt"
                  type="button"
                  onClick={(e) => {
                    gender = "f";
                  }}
                >
                  F
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default DashPosts;
