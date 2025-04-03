import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <p>&copy; 2025 Vault Inc. All rights reserved.</p>
        <p>Follow us on social media:</p>
        <div className="d-flex justify-content-center">
          <a href="#" className="btn btn-outline-primary mx-2">Facebook</a>
          <a href="#" className="btn btn-outline-info mx-2">Twitter</a>
          <a href="#" className="btn btn-outline-danger mx-2">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
