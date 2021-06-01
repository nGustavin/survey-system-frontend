import React, { useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md'
import Header from '../../components/Header'
import SurveyCard from '../../components/SurveyCard'
import api from '../../services/api'
import colors from '../../styles/colors'
import { Container } from './styles'
import { Link } from 'react-router-dom'


interface Survey {
	survey_id: string,
	name: string,
	description: string,
	status: number,
	start: string,
	end: string
}

function Home() {
	const [surveys, setSurveys] = useState<Survey[]>([])

	useEffect(() => {
		api.get('/surveys').then(response => {
			setSurveys(response.data)
		  })
	}, [])

	function deleteSurvey(survey_id: string){
        api.delete(`/survey/${survey_id}`)

        setSurveys(surveys.filter(survey => survey.survey_id !== survey_id))
    }

	
	const formatDate = (dt: string) => {
		let formatedYear = dt.slice(0, 10).replace('-', '/').replace('-', '/')
	   
		return formatedYear
	  }
	  

	return (
		<Container>
			<Header surveyAmount={surveys.length} isHome/>
			<div className="card-container">
				{surveys.map( survey => {
					switch (survey.status) {
						case 2:
							return(
								<SurveyCard
									end={formatDate(survey.end)}
									start={formatDate(survey.start)}
									name={survey.name}
									description={survey.description}
									isOver
								>
							<Link to={`/survey/${survey.survey_id}`} style={{textDecoration: "none", color: "#000"}} key={survey.survey_id}>
									<button style={{width: '110px', height: '2.2rem',
											background: '#fff242', borderRadius: 4}}>FINALIZED</button>
									</Link>
									<MdDelete
										onClick={() => deleteSurvey(survey.survey_id)} 
										size={32}
										color={colors.red}
									/>
								</SurveyCard>
							)
						case 3:
							return(
								<SurveyCard
										end={formatDate(survey.end)}
										start={formatDate(survey.start)}
										key={survey.survey_id}
										name={survey.name}
										description={survey.description}
										notStated
									>
								<Link to={`/survey/${survey.survey_id}`} style={{textDecoration: "none", color: "#000"}} key={survey.survey_id}>
										<button
											style={{width: '110px', height: '2.2rem',
											background: '#fff242', borderRadius: 4}}
										>NOT STARTED</button>
										</Link>
										<MdDelete
											onClick={() => deleteSurvey(survey.survey_id)} 
											size={32}
											color={colors.red}
										/>
									</SurveyCard> 
							)
						default:
							return(
								<SurveyCard
										end={formatDate(survey.end)}
										start={formatDate(survey.start)}
										key={survey.survey_id}
										name={survey.name}
										description={survey.description}
										isOpen
									>
								<Link to={`/survey/${survey.survey_id}`} style={{textDecoration: "none", color: "#000"}} key={survey.survey_id}>
										<button style={{width: '110px', height: '2.2rem',
										background: '#68ffb8', borderRadius: 4
									}}>VOTE</button>
										</Link>
										<MdDelete
											onClick={() => deleteSurvey(survey.survey_id)} 
											size={32}
											color={colors.red}
										/>
									</SurveyCard>
							)
							}
						}
					)}
			</div>
		</Container>
	)
}
	
export default Home
	

