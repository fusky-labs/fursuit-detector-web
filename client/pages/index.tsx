import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss';
import { useState } from 'react';

const Home: NextPage = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    
    const Upload = async() => {
      await fetch('http://127.0.0.1:5000/detect', {
        method: 'POST',
        body: formData
      }).then(resp => {
        resp.json().then(data => {console.log(data)})
      })
    }
    Upload();
  }
  return (
    <div>
      <Head>
        <title>Fursuit Detector App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <input type="file" name="image" id='image'/>
          <input type="submit" value="Upload"/>
        </form>
      </div>
    </div>
  )
}

export default Home;