import React from 'react'
import styles from './Contact.module.css'
import Cal from '@calcom/embed-react'

function Contact() {
  return (
    <div className={styles.calWrapper}>
      <div className={styles.introText}>
        <p>
          Whether you&apos;re into tech talk, cooking up open-source ideas, thinking about hiring,
          or just want to chat about something totally random — I&apos;m always up for a good convo.
        </p>
        <p>
          I can also be reached{' '}
          <a
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
            }}
            href="#"
            style={{ textDecoration: 'underline', color: '#0070f3', cursor: 'pointer' }}
          >
            here
          </a>
        </p>{' '}
      </div>
      <div className={styles.calendarBox}>
        <Cal
          namespace="30min"
          calLink="paramarora/30min"
          style={{ width: '100%', height: '100%' }}
          config={{ layout: 'month_view' }}
        />
      </div>
    </div>
  )
}

export default Contact
