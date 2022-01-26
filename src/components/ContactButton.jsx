import React from 'react';
import * as Icon from 'react-bootstrap-icons';

const ContactButton = () => {
  return (
    <>
      <button
        className='floating-right-bottom-btn'
        style={{
          position: 'fixed',
          width: '50px',
          height: '50px',
          background: '#0C9',
          color: '#fff',
          borderRadius: '50%',
          textAlign: 'center',
          boxShadow: '2px 2px 3px #999',
          right: '1em',
          bottom: '1em',
          zIndex: 999,
          border: 'none',
          outline: 'none',
        }}
        onClick={() => {
          window.location = '#contact';
        }}>
        <Icon.Chat color='white' size={20} />
      </button>
    </>
  );
};

export default ContactButton;
