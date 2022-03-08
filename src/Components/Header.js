import React from 'react';

const Header =() => {
  
        return (
            <div className = "header">
               <h1> To Do Lijstje </h1>
            </div>
            );
    
}



const Footer = () => {
    const author = 'Michal Davidse';
    const date = new Date().getFullYear();

   return (<footer id="footer"> &copy; {author} - {date}
      </footer>);
    
}

export { Header, Footer, };

