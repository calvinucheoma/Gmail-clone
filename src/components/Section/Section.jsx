import React from 'react';
import './Section.css';


const Section = ({Icon, title, color, selected}) => {

  return (

    <div 
        className={`section ${selected && 'sectionSelected'}`} 
        style={{
                borderBottom: `3px solid ${color}`, 
                color: `${selected && color}`,
              }}
    >

        <Icon className='sectionIcon' />
        <h4> {title} </h4>

    </div>

  )

};

export default Section;