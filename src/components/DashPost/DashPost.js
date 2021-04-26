import "./DashPost.scss";
// import Container from '../Container/Container'
// import { useState, useEffect } from 'react';
import { FileSvg } from "../Svgs/Svgs";
import { useQuery } from 'react-query'
import { client } from '../../utils/api-client'

function DashPosts() {

  const region = []

  const { data: reg, isSuccess: regSuccess } = useQuery({
    queryKey: 'regions',
    queryFn: ()=> client('regions')
  }) 
  const { data: prof, isSuccess: profSuccess } = useQuery({
    queryKey: 'profession',
    queryFn: ()=> client('profession')
  }) 
  const { data: age, isSuccess: ageSuccess } = useQuery({
    queryKey: 'age',
    queryFn: ()=> client('age')
  })  

  // const pushed = (evt) => {
  //   console.log(evt)
  // }
  return (
    <>
      <section className="post">
        <div className="post__container">
          <form className="post__form" action="/" method="post">
            <div className="post__inner">
              <label className="post__label-file">
                <input className="post__input-file visually-hidden" type="file" name="title" placeholder="title"/>
                <span><FileSvg /></span>
              </label>
              <input className="post__input-title" type="text" name="title" placeholder="title"/>
              <button className="post__btn-send" type="submit">send</button>
            </div>
            <textarea className="post__textarea" name="body" cols="30" rows="5" placeholder="body"></textarea>
          </form>
        </div>


        {/* Region list */}
        <div className="post__target target">
          <button className="target__all-btn" type="button">All</button>
          <div className="target__inner">
            <button className="target__btn all-btn" type="button"> all</button>
            <ul className="target__list">
              {regSuccess && reg?.map((e) => (
                <li className="target__item" key={Math.random()}> 
                  <button className="target__bnt" data-name={e?.dbName} type="button" onClick={(evt) => {
                    region.push(evt.target.dataset.name)
                    console.log(region)
                  }}>{e?.name}</button>
                </li>                
              ))}
            </ul>
          </div>
          {/* profession list */}
          <div className="target__inner">
            <button className="target__btn all-btn" type="button">all</button>
            <ul className="target__list">
            {profSuccess && prof?.map((e) => (
                <li className="target__item" key={Math.random()}> 
                  <button className="target__bnt" data-name={e?.dbName} type="button">{e?.text}</button>
                </li>                
              ))}
            </ul>
          </div>
          {/* age list */}
          <div className="target__inner">
            <button className="target__btn all-btn" type="button">
              all
            </button>
            <ul className="target__list">
            {ageSuccess && age?.map((e) => (
                <li className="target__item" key={Math.random()}> 
                  <button className="target__bnt" data-name={e?.desc} type="button">{e?.desc}</button>
                </li>                
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default DashPosts;
