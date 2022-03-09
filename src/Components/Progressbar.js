import React from 'react';

function Progressbar({progress, name}){
    var progressbar = progress;
    var progressStyle = {
        width: progressbar.toString()+"%",
        }


    
    return(
            <div className={"progressBar "}>
                <div className={"progressBar" + name} style={progressStyle}>
                </div>
            </div>

    )

}


export default Progressbar