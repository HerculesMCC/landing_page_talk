import React, { Component } from 'react';

class ConvertkitEmailForm extends Component {
  state = {
    message: '',
    email: '',
    isError: false
  };

  emailHandler = (e) => {
    let updatedEmail = e.target.value;
    this.setState({ email: updatedEmail });
  };

  subscribeUser = async (e) => {
    e.preventDefault();

    // Validation de l'email avec regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.state.email)) {
      this.setState({
        message: 'Please enter a valid email address',
        isError: true
      });
      return;
    }

    try {
      // Utilisez l'URL de votre serveur Express
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://landingpage-backend-1.onrender.com';
      const res = await fetch(`${apiUrl}/subscribe`, {  // Notez que c'est /subscribe et non /api/subscribe
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({ email: this.state.email }),
        mode: 'cors',  // Gardé car c'est une API externe
        credentials: 'include'  // Gardé si vous avez besoin des cookies
      });

      const json_res = await res.json();

      this.setState({
        message: json_res.message || 'Thank you for subscribing!',
        email: '',
        isError: false
      });
    } catch (error) {
      this.setState({
        message: 'An error occurred. Please try again.',
        isError: true
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.subscribeUser} noValidate>
        <div className="d-flex flex-column gap-3">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter your email" 
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value, message: '' })}
            style={{
              border: this.state.isError ? '1px solid #ffcdd2' : '',
              backgroundColor: this.state.isError ? '#fff3f3' : '',
              borderRadius: '0.25rem'
            }}
          />
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              id="newsletter-btn"
              className="btn px-4"
              value=""
              name="subscribe"
              style={{
                backgroundColor: '#d4e8f6',
                borderColor: '#d4e8f6',
                color: '#2c3e50',
                transition: 'all 0.3s ease',
                borderRadius: '0.25rem',
                display: 'inline-block',
                ':hover': {
                  backgroundColor: '#b8d8f0',
                  borderColor: '#b8d8f0'
                }
              }}
            >
              Join The Wait List
            </button>
          </div>
        </div>
        {
          (this.state.message.length > 0) && 
          <p id="newsletter-message" 
            className={`text-left text-sm mt-3 ${this.state.isError ? 'shake-animation' : ''}`} 
            style={{
              backgroundColor: this.state.isError ? '#fff3f3' : '#f8fbfe',
              border: `1px solid ${this.state.isError ? '#ffcdd2' : '#d4e8f6'}`,
              color: this.state.isError ? '#d32f2f' : '#2c3e50',
              padding: '0.75rem',
              borderRadius: '0.25rem',
              transition: 'all 0.3s ease'
            }}>
            {this.state.message}
          </p>
        }
      </form>
    );
  }
}

export default ConvertkitEmailForm;
