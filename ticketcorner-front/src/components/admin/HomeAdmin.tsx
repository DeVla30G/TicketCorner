import React from "react";
import "../../style/Adminstyle/HomeAdmin.css";
import FeaturedInfo from "./featuredInfo/FeaturedInfo";
import Chart from "./charts/Charts";
import WidgetSmall from "./widgetSmall/WidgetSmall";
import WidgetLarge from "./widgetLarge/WidgetLarge";
import axios from 'axios';
import { render } from "@testing-library/react";



export const HomeAdmin = () => {
  
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart />
    
      <div className="homeWidgets">
          <WidgetSmall />
          <WidgetLarge />
        </div>
    </div>
   
  )
}

export default HomeAdmin;