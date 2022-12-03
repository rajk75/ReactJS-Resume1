import React, { Component } from 'react';
import './App.scss';
import About from './Components/about';
import Certificate from './Components/certificate';
import Education from './Components/education';
import Experience from './Components/experience';
import Skills from './Components/skills';


class App extends Component {
  render() {
      const person={
          //avatar:'',
          name:'Raj Kotak',
          profession:'Developer',
          bio:'Pursuing Bachelors in computer science',
          address:'Columbus State University',
          social:[
            {name:'facebook',url:'#'},
            {name:'github',url:'#'},
            {name:'linkedin',url:'#'} ],
          experience: [
        {
          jobTitle: "Sap Developer",
          company: "COCO COLA",
          startDate: "May 2022",
          endDate: "July 2022",
          jobDescription:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
        },
        {
          jobTitle: "Data Science Intern",
          company: "Ismile Technologies",
          startDate: "April 2020",
          endDate: "July 2020",
          jobDescription:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
        }
      ],
      education: [
        {
          degree: "Bachelors",
          institution: "mumbai",
          startDate: "July 2016",
          endDate: "2020",
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
        },
        {
          degree: "Bachelors",
          institution: "Columbus State university",
          startDate: "July 2020",
          endDate: "On-going",
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
        }
      ],  
      certificate: [
        {
          name: "Graduate Assistantship",
          institution: "Columbus State university",
          date: "March 2020",
          description: "Aenean commodo ligula eget dolor. Aenean massa."
        }
      ], 
      skills: [
        { name: "HTML5", percentage: '95%' },
        { name: "CSS", percentage: '90%' },
        { name: "Bootstrap", percentage: '85%' },
        { name: "PHP", percentage: '80%' },
        { name: "JavaScript", percentage: '75%' },
        { name: "ReactJS", percentage: '70%' }   
      ]    
                
      }
      
    return (
         
      <div className="App">

        <About
        avatar={person.avatar}
        name={person.name}
        profession={person.profession}
        bio={person.bio}
        address={person.address}
        social={person.social}
        />
        <br/>
        <Certificate
        certificate={person.certificate}
        />
        <br/>
        <Education education={person.education}
        />
        <br/>
        <Experience experience=
        {person.experience}
        />
        <br/>
        <Skills skills=
        {person.skills}
        />
        </div>
     
    );
  }
}

export default App;
