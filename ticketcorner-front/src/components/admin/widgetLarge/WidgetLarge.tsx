import "../../../style/Adminstyle/widgetLarge.css"
import {useState, useEffect } from 'react';


export default function WidgetLarge() {

  const [concerts, setConcerts] = useState([]);
  
// fetch all concerts from data
useEffect(() => {
  //setConcerts(true);
  const getConcerts = () => {

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://localhost:3030/concerts", {
      method: 'GET',
      redirect: 'follow'
    })
      .then(response => response.json())
      .then(result => setConcerts(result))
      .catch(error => console.log('error', error));
  }
  getConcerts()
    // console.log(concerts)
    //.then(setConcerts(false));
}, []);
  
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Sales</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Event</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Type</th>
        </tr>
        <tr className="widgetLgTr">
        {concerts.slice(0, 3).map((concert : any) =>{ return ( <td className="widgetLgUser"> 
            <img src="https://i.pinimg.com/originals/86/08/70/860870066df05a7a29bcb5bb9ea2e9a7.jpg" 
            alt="" className="widgetLhImg" />
            <span className="widgetLgName"> Samira </span>
          </td> ) })}
          <td className="widgetLgEvent">{concerts.slice(0, 3).map((concert : any)=>{ 
            return <p key={concert.id}>{ concert.tour }</p>
          } )}</td>
          <td className="widgetLgDate">{concerts.slice(0, 3).map((concert : any)=>{ 
            return <p key={concert.id}>{ concert.date }</p> })} </td>
          <td className="widgetLgPrice">{concerts.slice(0, 3).map((concert : any)=>{ 
            return <p key={concert.id}>{ concert.type }</p> })} </td>
        </tr>
      </table>
    </div>
  )
}