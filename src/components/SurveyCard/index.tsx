import React, { ReactNode } from 'react'
import { Container } from './styles'

interface CardProps {
    name: string,
    description: string;
    children?: ReactNode,
    start: string,
    end: string,
    isOpen?: boolean,
    notStated?: boolean,
    isOver?: boolean,
}

function SurveyCard({name, description, children, isOpen, notStated, isOver, start, end}: CardProps) {
   
    return (
        <Container isOpen={isOpen} notStated={notStated} isOver={isOver}>
            <h1>{name}</h1>
            <p>
                {description}
            </p>
            <div>
                <div>
                    <h3>
                        {start}
                    </h3> 
                    <h3>
                        {end}
                    </h3>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </Container>
    )
}

export default SurveyCard
