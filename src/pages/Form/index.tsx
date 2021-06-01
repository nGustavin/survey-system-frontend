import React, { FormEvent, ReactNode, useEffect, useState } from 'react'
import arrow from '../../assets/LeftArrow.svg'
import { Container, BackButtoContainer, FormContainer } from './styles'
import { useHistory } from 'react-router-dom'
import api from '../../services/api'

interface FormProps {
  children: ReactNode
}

function Form({ children }: FormProps) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const [survey_options, setsurvey_options] = useState([''])
  const [status, setStatus] = useState(0)
  
  const {goBack} = useHistory()

  const handleInputChange = (e: any, index: number) => {
    const values = [...survey_options]
    values[index] = e.target.value
    setsurvey_options(values)
  }
   
  const handleRemoveClick = (index: any) => {
    const list = [...survey_options]
    list.splice(index, 1)
    setsurvey_options(list)
  }
   
  const handleAddClick = () => {
    setsurvey_options([...survey_options, ""])
  }

  
  
  useEffect(() => {
    const now = new Date().toISOString()
    if(end > now && start <= now){
      setStatus(1)
    }

    if(end < now){
      setStatus(2)
    }

    if(start > now && end > start){
      setStatus(3)
    }

    if(end < start){
      setStatus(4)
    }

  }, [end, start])

  
  async function handleSubmit(event: FormEvent){
    event.preventDefault()

    const data = new FormData()
    
    data.append('name', name)
    data.append('description', description)
    data.append('status', String(status))
    data.append('survey_options', JSON.stringify(survey_options))
    data.append('start', start)
    data.append('end', end)


    await api.post('/create-survey', {name, description, survey_options, start, end, status})

    goBack()

  }


  return (
    <Container>
      <BackButtoContainer>
        <img 
          src={arrow} 
          alt="Back to home" 
          onClick={goBack}
        />
      </BackButtoContainer>
      <FormContainer>
        <h1>Create new survey</h1>
        <form onSubmit={handleSubmit}>
          <div className="default-field">
            <label htmlFor="name">
              Name
            </label>
            <input 
                name="name"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
              />
          </div>
          <div className="default-field">
            <label htmlFor="description">
              Description
            </label>
            <textarea 
                name="description"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
          </div>
          <div className="row-fields">
            <div>
              <label htmlFor="start">
                Starts In
              </label>
              <input
                  min="21/09/2021"
                  type="date"
                  name="start"
                  value={start}
                  onChange={e => {setStart(e.target.value)}}
                />
            </div>
              <div>
                <label htmlFor="end">
                Ends In
                </label>
                <input
                  type="date"
                  name="end"
                  value={end}
                  onChange={e => {setEnd(e.target.value)}}
                />
                </div>
          </div>
          {survey_options.map((name, i) => {
            return(
              <div key={i} className="default-field">
              <label htmlFor="options">Survey Option {i + 1} {i === 0 && '(Min. 3)'} </label>
              <div>
                <input 
                  type="text" 
                  name="option" 
                  value={name}
                  onChange={e => handleInputChange(e, i)}
                />

                {survey_options.length !== 1 && 
                <button 
                  className="removeFields"
                  type="button"
                  onClick={() => handleRemoveClick(i)}                
                  >Remove
                </button>
                }
              </div>
            </div>
            )
          })}
          <div className="addFieldContainer">
            <button 
              onClick={handleAddClick}
              className="addFields"
              type="button"
            >New option
            </button> 
          </div>

          {
            survey_options.length< 3 || status === 4 ?
            <button 
            className="submitNotAllowed"
          >
            SUBMIT
          </button> : 
          <button 
          type="submit"
          onClick={handleSubmit}
          className="submitButton"
        >
          SUBMIT
        </button>
          }
        </form>
      </FormContainer>
    </Container>
  )
}

export default Form
