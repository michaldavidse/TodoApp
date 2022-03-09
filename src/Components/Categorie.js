import React, { useState, forceUpdate } from 'react';
import Progressbar from './Progressbar';


function Categorie({name, count, showCategorie}){
    var todo = count(name)[0];
    var total = count(name)[1];
    let progress = Math.round(100-(todo/total)*100);  
 
    
    return(
          
        <div className={`categorie `} onClick={showCategorie} name={name}>
            <h2>{name} -
            <span id="progress" ><span className={"count "+ name} > {progress}% </span>afgerond</span>
              </h2>
            <Progressbar progress={progress} name={name}/>
            </div>
    )

}

export default Categorie