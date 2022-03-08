import React from 'react';


function Categorie({name, count, showItems}){
    var todo = count(name)[0];
    console.log("todo:"+ todo);
    var total = count(name)[1];
    var progressbar = (100-(todo/total)*100).toString();
    console.log(progressbar);

    var progressStyle = {
        width: progressbar+"%",
        }


    
    return(
          
        <div className={`categorie `} onClick={showItems(name)} >
            <h2>{name} - <span className={"count "+ name} > {todo} </span></h2>
            <div className={"progressBar "}>
                <div className={"progressBar" + name} style={progressStyle}>
                </div>
            </div>
        </div> 
    )

}

export default Categorie