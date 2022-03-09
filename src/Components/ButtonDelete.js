import React from "react";

function ButtonDelete({show, deleteToDo}){
    
    if(show ==="all"){
        return(
            <div id="buttonDelete">
                    <button onClick={deleteToDo}>Lijstje opkuisen</button>
                </div>
        )

    }

    else{
        return(
            <div id="buttonDelete">
                   
                </div>
        )
    }

    

}

export default ButtonDelete 