import React, { Component } from 'react';
import  '../css/footer.css'

class footer extends Component {
    render() {
        return (
            <div>
                  <footer className="footer">
                  <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
          © 2020 Copyright:
          <a className="text-dark" href="">All Rights Reserved </a>
        </div>
     
      </footer>
            </div>
        );
    }
}

export default footer;