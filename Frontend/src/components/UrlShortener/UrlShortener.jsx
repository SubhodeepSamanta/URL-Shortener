import React, { useState } from 'react'
import style from './UrlShortener.module.css'
import axiosInstance from '../../api/axiosInstance'

const UrlShortener = () => {
  const [url, setUrl] = useState('')
  const [customSlug, setCustomSlug] = useState('')
  const [shortUrl, setShortUrl] = useState('')
  const [copy, setCopy] = useState('Copy')
  const [error, setError] = useState('')

  const handleChange = (e) => setUrl(e.target.value)
  const handleSlugChange = (e) => setCustomSlug(e.target.value)

  const handleClick = async () => {
    setError('')
    setShortUrl('')
    try {
      const payload = { url }
      if (customSlug.trim()) payload.slug = customSlug.trim()
      const { data } = await axiosInstance.post('/api/create', payload)
      setShortUrl(data.shorturl)
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to shorten URL')
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl)
    setCopy('Copied!')
    setTimeout(() => setCopy('Copy'), 2000)
  }

  return (
    <div className={style.bg}>
      <div className={style.urlCard}>
        <h1 className={style.title}>🔗 URL Shortener</h1>
        <p className={style.subtitle}>Paste your long URL and get a short, shareable link instantly!</p>
        <div className={style.formGroup}>
          <label className={style.label}>
            <span>Enter your URL</span>
            <input
              type="url"
              placeholder="https://www.google.com"
              className={style.userInput}
              value={url}
              onChange={handleChange}
              required
            />
          </label>
          <label className={style.label}>
            <span>
              Custom Slug <span className={style.optional}>(optional)</span>
            </span>
            <div className={style.slugInputWrap}>
              <span className={style.slugPrefix}>url.site/</span>
              <input
                type="text"
                placeholder="my-custom-slug"
                className={style.slugInput}
                value={customSlug}
                onChange={handleSlugChange}
                maxLength={32}
              />
            </div>
          </label>
          <button
            type="button"
            className={style.shortenButton}
            onClick={handleClick}
            disabled={!url}
          >
            Shorten URL
          </button>
        </div>
        {error && (
          <div className={style.error}>{error}</div>
        )}
        {shortUrl && (
          <div className={style.resultBox}>
            <h4>Your Shortened URL</h4>
            <div className={style.shortUrlBox}>
              <input
                type="text"
                value={shortUrl}
                readOnly
                className={style.shortUrlInput}
              />
              <button
                className={`${style.copyButton} ${copy === 'Copied!' ? style.copied : ''}`}
                onClick={handleCopy}
              >
                {copy}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default UrlShortener