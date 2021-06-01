import { FormEvent, ReactNode, useEffect, useState } from 'react';
import { Container, BackButtoContainer, FormContainer } from './styles';
import arrow from '../../assets/LeftArrow.svg'
import {useHistory, useParams} from 'react-router-dom'
import api from '../../services/api';
import { Votes } from '../../components/VotesComponent/styles';
import {Link} from 'react-router-dom'

interface SurveyProps {
  children?: ReactNode;
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

interface Vote {
  qtde: number;
  option_id: number;
}

function Survey({ children }: SurveyProps) {

  const [surveys, setSurveys] = useState<Survey>()
  const [options, setOptions] = useState<Option[]>([])

  const [optionId, setOptionId] = useState('')

  const params = useParams<params>()
  
  async function getSurveyData(){
    const {data} = await api.get(`/survey/${params.id}`)
    setSurveys(data)
  }

  async function getOptionData(){
    const { data } = await api.get(`/options/${params.id}`)
    setOptions(data)
  }

 
	useEffect(() => {

		getSurveyData()
    getOptionData()

	}, [params.id])  


  const handleSubmit = async (event: FormEvent) => {

    event.preventDefault()

    const data = new FormData()
    
    const option_id = parseInt(optionId)
    
    data.append('option_id', optionId)

    await api.post(`/vote/${params.id}`, {'option_id': option_id })

    window.location.reload()
  }
  const {goBack} = useHistory()

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
        <h1>{surveys?.name}</h1>
        <p>{surveys?.description}</p>
        <div id="voteSubmit">
          <form  onSubmit={handleSubmit}>
          <div className="status">
              <h3>{surveys?.start.slice(0, 10).replace('-', '/').replace('-', '/')}</h3>-
              <h3>{surveys?.end.slice(0, 10).replace('-', '/').replace('-', '/')}</h3>
            </div>
            
            {options.map((option) => {
              return(
                <>
                <div className="left">
                  <input
                    key={option.option_id}
                    type="radio" 
                    name="options" 
                    id="options" 
                    value={option.option_id}
                    onChange={e => setOptionId(e.target.value)}
                  />
                  <label htmlFor="options">{option.option_name}</label>

                  <div  className="right">

                    <Votes>{option.qtde}</Votes>
                    
                  </div>
                </div>
                  
                </>
              )
            })}
            <div className="actionButtons">
            {surveys?.status === 1 ? 
                      (<button type="submit" style={{marginRight: 20}}>
                        Vote
                      </button>) : surveys?.status === 2 ?
                      <button type="reset" style={{cursor: "not-allowed", backgroundColor: "red", color:"white"}}>
                        Closed
                      </button> :
                      <button type="reset"  style={{cursor: "not-allowed", backgroundColor: "yellow", color:"black"}}>
                        Not Stated
                      </button>
            }

            {surveys?.status === 1 ? 
                      (<Link style={{width: "50%", textDecoration: "none"}} to={`/survey-edit/${surveys.survey_id}`}>
                        <button className="EditButton" type="reset">
                          Edit
                        </button>
                      </Link>) : surveys?.status === 3 ? 
                      (<Link style={{width: "50%", textDecoration: "none"}} to={`/survey-edit/${surveys.survey_id}`}>
                        <button className="EditButton" type="reset"  style={{cursor: "pointer", backgroundColor: "yellow", color:"black"}}>
                        Edit
                      </button>
                      </Link>) : 
                      <Link to="" style={{width: "50%", textDecoration: "none"}}>
                      <button type="reset" className="EditButton" style={{cursor: "not-allowed", backgroundColor: "red", color:"white"}}>
                        Edit
                      </button>
                      </Link>
                      
            }
            </div>
            
          </form> 
        </div>
      </FormContainer>
    </Container>
  );
};

export default Survey;
