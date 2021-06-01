import React, { FormEvent, ReactNode, useEffect, useState } from 'react'
import arrow from '../../assets/LeftArrow.svg'
import { Container, BackButtoContainer, FormContainer } from './styles'
import { useHistory, useParams } from 'react-router-dom'
import api from '../../services/api'

interface FormProps {
  children: ReactNode
}


interface params {
  id: string
}

interface Survey {
	survey_id: string,
	name: string,
	description: string,
	status: number,
	start: string,
	end: string
}

interface Option {
  option_id: number,
  survey_id: string,
  option_name: string,
  qtde: number,
}


function Form({ children }: FormProps) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const [survey_options, setsurvey_options] = useState([''])
  const [status, setStatus] = useState(0)



  const [survey, setSurvey] = useState<Survey>()

  const params = useParams<params>()
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
    async function fetchSurvey(){
      const {data} = await api.get(`/survey/${params.id}`)
      setSurvey(data)
    }

    async function fetchSurveyOptions(){
      const { data } = await api.get(`/options/${params.id}`)
      setsurvey_options(data)
    }


    fetchSurveyOptions()
    fetchSurvey()
  
  }, [params.id])

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


    await api.put('/create-survey', {name, description, survey_options, start, end, status})

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
                placeholder={survey?.name}
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
                placeholder={survey?.description}
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
