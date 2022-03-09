import React from 'react';

const Footer = () => {
    const author = 'Michal Davidse';
    const date = new Date().getFullYear();

   return (<footer id="footer"> &copy; {author} - {date}
      </footer>);
    
}

export default Footer