import React, { Component } from 'react';

class ConvertkitEmailForm extends Component {
  state = {
    message: '',
    email: '',
    isError: false,
    isLoading: false
  };

  emailHandler = (e) => {
    let updatedEmail = e.target.value;
    this.setState({ email: updatedEmail });
  };

  subscribeUser = async (e) => {
    e.preventDefault();
    this.setState({ isLoading: true });

    // Validation de l'email avec regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.state.email)) {
      this.setState({
        message: 'Please enter a valid email address',
        isError: true,
        isLoading: false
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
        isError: false,
        isLoading: false
      });
    } catch (error) {
      this.setState({
        message: 'An error occurred. Please try again.',
        isError: true,
        isLoading: false
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
              disabled={this.state.isLoading}
              style={{
                backgroundColor: this.state.isLoading ? '#e9ecef' : '#d4e8f6',
                borderColor: this.state.isLoading ? '#e9ecef' : '#d4e8f6',
                color: this.state.isLoading ? '#6c757d' : '#2c3e50',
                transition: 'all 0.3s ease',
                borderRadius: '0.25rem',
                display: 'inline-block',
                cursor: this.state.isLoading ? 'not-allowed' : 'pointer',
                ':hover': {
                  backgroundColor: this.state.isLoading ? '#e9ecef' : '#b8d8f0',
                  borderColor: this.state.isLoading ? '#e9ecef' : '#b8d8f0'
                }
              }}
            >
              {this.state.isLoading ? (
                <div className="d-flex align-items-center gap-2">
                  <div className="spinner-border spinner-border-sm" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <span>Subscribing...</span>
                </div>
              ) : (
                'Join The Wait List'
              )}
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
