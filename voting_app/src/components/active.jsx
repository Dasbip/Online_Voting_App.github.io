import React, { useState } from 'react'

function Active() {
  const [data, Setdata] = useState([
    {
      "id": 1,
      "title": "Lecture Session on Child Rights and Media",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW6qJYseaRiMsMd7Ifw8UPcEjuBcLk5ntMBA&usqp=CAU",
      "Description": "Child rights ensure well-being: education, health, safety, expression.",
      "Contestants": 143,
      "date": "23rd AUG 2023"
    },
    {
      "id": 2,
      "title": "Lecture Session on Child Rights and Media",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW6qJYseaRiMsMd7Ifw8UPcEjuBcLk5ntMBA&usqp=CAU",
      "Description": "Child rights ensure well-being: education, health, safety, expression.",
      "Contestants": 143,
      "date": "23rd AUG 2023"
    },
    {
      "id": 3,
      "title": "Lecture Session on Child Rights and Media",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW6qJYseaRiMsMd7Ifw8UPcEjuBcLk5ntMBA&usqp=CAU",
      "Description": "Child rights ensure well-being: education, health, safety, expression.",
      "Contestants": 143,
      "date": "23rd AUG 2023"
    },
    {
      "id": 4,
      "title": "Lecture Session on Child Rights and Media",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW6qJYseaRiMsMd7Ifw8UPcEjuBcLk5ntMBA&usqp=CAU",
      "Description": "Child rights ensure well-being: education, health, safety, expression.",
      "Contestants": 143,
      "date": "23rd AUG 2023"
    },
    {
      "id": 5,
      "title": "Lecture Session on Child Rights and Media",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW6qJYseaRiMsMd7Ifw8UPcEjuBcLk5ntMBA&usqp=CAU",
      "Description": "Child rights ensure well-being: education, health, safety, expression.",
      "Contestants": 143,
      "date": "23rd AUG 2023"
    },
    {
      "id": 6,
      "title": "Lecture Session on Child Rights and Media",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW6qJYseaRiMsMd7Ifw8UPcEjuBcLk5ntMBA&usqp=CAU",
      "Description": "Child rights ensure well-being: education, health, safety, expression.",
      "Contestants": 143,
      "date": "23rd AUG 2023"
    }])

  return (
    <div className='active_wrapper'>
      <div className="actv_heading">
        <ul>
          <div className='head-text'>
          <li>Active and Ongoing</li>
          <li>Events</li>
          </div>
          <button className='morebtn'>More</button>
        </ul>
      </div>
      <div className="active_cards">
      <ul className="event_card" key={""}>
        {data.map((item, index) => {
          return (<>
              <li><img src={item.img} alt="eventimg" />
              <h2>{item.title}</h2>
              <p>{item.Description}</p>
              <h4>Contestants :{item.Contestants}</h4>
              <button>{item.date}</button>
              </li>
              </>)
        })}
      </ul>
      </div>
    </div>
  )
}

export default Active;