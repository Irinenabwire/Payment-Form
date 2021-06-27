import React from 'react';
import '../../sign.css';
import { Link } from 'react-router-dom';
import '../Button.css';


import loginImg from "../../login.svg";

class SignIn extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="Mobile phone number">Mobile phone number *</label>
              <input type="text" name="Mobile phone number" placeholder="Mobile phone number" />
            </div>
            <div className="form-group">
              <label htmlFor="E-wallet pin">E-wallet pin *</label>
              <input type="text" name="E-wallet pin" placeholder="E-wallet pin" />
            </div>
            
            
          </div>
        </div>
        <div className="footer">
       
        
          <Link to='/' className='btn-mobile'>
          <button  type="button" className="btn">
        Sign In
          </button>
    </Link>
          {/* or
          */}

        </div>
      </div>
    );
  }
}



export default SignIn;

