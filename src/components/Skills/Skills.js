import React from 'react'
import "./Skills.css"

const skillData=[
    {
        heading:"Programming Languages",
        skillsList:[{skill:"Python"},{skill:"Javascript"},{skill:"R programming"}]
    },
    {
        heading:"Backend Development",
        skillsList:[{skill:"Django"},{skill:"Django rest framework"},{skill:"Mysql"},{skill:"Postgres"}]
    },
    {
        heading:"Frontend Development",
        skillsList:[{skill:"ReactJS"},{skill:"Redux"},{skill:"HTML"},{skill:"CSS"}]
    },
    {
        heading:"ML & Deep Learning",
        skillsList:[{skill:"Pytorch"},{skill:"numpy"},{skill:"pandas"},{skill:"openCV"}]
    },
    {
        heading:"Databases",
        skillsList:[{skill:"Mysql"},{skill:"Postgres"}]
    },
    {
        heading:"Automation Testing",
        skillsList:[{skill:"Selenium"},{skill:"appium"},{skill:"Pytest"}]
    },
    {
        heading:"Other skills",
        skillsList:[{skill:"Git & Github"},{skill:"Docker"},{skill:"Postman"},{skill:"Nginx"},{skill:"Gunicorn"}]
    },
]

const SkillsContainer=({heading,skillsList})=>{
    return(<div className="single-skill-container">
        <div className="skill-heading">
            <h4>{heading}</h4>
        </div>
        <div className="skill-list-container">
            <ul>
            {skillsList && skillsList.map((i,d)=>(
                <li>{i.skill}</li>
            ))}
            </ul>
        </div>

    </div>)
}

const Skills = () => {
    return (
        <div id="siklls" className="skills-container">
            <div className="skill-section-header-container">
            <div className="skill-section-header-border-wrap">
                <h2 className="skill-section-header">Technical Skills</h2>
                </div>
            </div>
            <div className="skills-list-container">
            {skillData.map((data,i)=>(
                <SkillsContainer heading={data.heading} skillsList={data.skillsList} />
            ))}
            </div>
        </div>
    )
}

export default Skills
