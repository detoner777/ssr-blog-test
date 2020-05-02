import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import Layout from 'layouts/Main'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  input {
    width: 70vh;
  }
  p {
    font-size: 19px;
    font-weight: bold;
  }
`

const Success = styled.p`
  font-size: 25px;
  color: green;
  font-weight: bold;
`

const Button = styled.input`
  height: 40px;
  margin-top: 20px;
`

function PostForm () {
  const { register, handleSubmit, errors } = useForm()
  const [isSent, setIsSent] = useState(false)

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const onSubmit = (data) => {
    axios
      .post('https://simple-blog-api.crew.red/posts', data, config)
      .then(() => setIsSent(true))
      .catch((err) => console.log(err))
  }

  const successMessage = (
    <Success>Your post was successfully published!</Success>
  )

  const form = (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <p>Come up with a title</p>
      <textarea name='title' type='text' ref={register({ required: true })} />
      {errors.title && 'Title is required'}
      <p>Write down your thoughts</p>
      <textarea rows='30' name='body' ref={register({ required: true })} />
      {errors.body && 'This is required'}
      <Button type='submit' />
    </Form>
  )

  return <Layout>{isSent ? successMessage : form}</Layout>
}

export default PostForm
