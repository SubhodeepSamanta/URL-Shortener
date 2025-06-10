import React from 'react'
import style from '../UrlShortener/UrlShortener.module.css'
import { useRef } from 'react'
import { useState } from 'react';
import axiosInstance from '../../api/axiosInstance';

const UrlShortener = () => {
  const [url,setUrl]= useState('');
  const [shortUrl,setShortUrl]= useState('');
  const [copy,setCopy]= useState("Copy");

  const handleChange= (e)=>{
    setUrl(e.target.value);
  }
  
  const handleClick= async ()=>{
    const {data}= await axiosInstance.post("/api/create", {url});
    setShortUrl(data);
    console.log(data);
  }

  const handleCopy= ()=>{
    navigator.clipboard.writeText(shortUrl);
      setCopy("Copied!")
      setTimeout(()=>{
        setCopy("Copy");
      },2000)
  }

  return (
    <div className={style.urlContainer}>
      <h1>Url Shortener</h1>
      <label>
        Enter your URL
        <input type="url" placeholder='https://www.google.com' className={style.userInput} value={url} onChange={(e)=>handleChange(e)} required />
        </label>
        <button type='button' className={style.shortenButton} onClick={handleClick}>Shorten URL</button>
        {shortUrl && (<>
    <h4>Your Shortened URL is</h4>
  <div className={style.shortUrlBox}>
    <input
      type="text"
      value={shortUrl}
      readOnly
      className={style.shortUrlInput}
    />
    <button className={`${style.copyButton} ${copy==="Copied!" ? style.copied : "" }`} onClick={handleCopy}>{copy}</button>
  </div></>
)}
    </div>
  )
}

export default UrlShortener