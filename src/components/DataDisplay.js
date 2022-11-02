import React from "react";
import uniqid from 'uniqid'
import formatDate from "./util";

const DataDisplay = (props) => {

    const elements= [];
    props.data.forEach((element) => {
        elements.push(
            <div key={uniqid()} className='info'>
                <div className="header">
                    <h4>{element.name ? element.name : element.position}</h4>
                    <span> {formatDate(element.start)} - {formatDate(element.end)}</span>
                </div>
                <h5>{element.title ? element.title : element.company } </h5>
                {element.tasks && 
                    <p>{element.tasks}</p>}
            </div>
        )
    })

    return elements;
}

export default DataDisplay;