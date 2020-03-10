import React, { useState } from 'react';
import './StarWars.css';
import styled from 'styled-components';
import { Container } from 'reactstrap';


const SubHeadline = styled.h2`
  color: dodgerblue;
  border: 1px solid black;
  background-color: green;
  color: #76d3f5;
  margin: 3px;

  &:hover {
    background-color: white;
    color: black;
  }
`;

function PeopleSection(props) {
    const [data, setData] = useState(props.data.results)
    return (
        <div>
             <Container >
            
            {data.map(char => {
                return (
                    <peopleContainer  >
                        <div className='mainBox' style={{ padding: '5px', display: 'flex', width: '80%', flexDirection: "column"}}>
                        <SubHeadline style={{ background: 'orange', width: "20%", padding: '5px' }}>Name: {char.name}</SubHeadline>
                          <div style={{background: 'gray', width: "20%", border: '3px solid green'}}>
                          Height: {char.height} CM
                          <div>
                            Link: <a href="#" className="alert-link">{char.homeworld}</a>
                          </div>
                          </div>
                        </div>
                          
                        
                        
                        {/* 
                        {char.hair_color}
                        {char.birth_year}
                        {char.gender}
                        {} */}
                    </peopleContainer>
                )
            })}
        
    </Container>
        </div>
    )
}

export default PeopleSection;