import React from 'react';
import styled from 'styled-components';

const InfoBlock = ({ content }) => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="card">
          <div className="header">
            <div className="dots">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
          <div className="footer">
            <pre className="code-content">{content}</pre>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container * {
    padding: 0;
    margin: 0;
  }

  .card {
    min-width: 300px;
    width: fit-content;
    height: fit-content;
    background-color: #12161cff; /* Un gris más oscuro para diferenciar */
    border-radius: 10px;
    display: grid;
    grid-template-rows: 30px 1fr;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .card .header {
    display: flex;
    align-items: center;
    padding-left: 10px;
    border-bottom: 1px solid #4a5568;
  }

  .card .header .dots {
    display: flex;
    gap: 5px;
  }

  .card .header .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  .card .header .dot:nth-child(1) { background-color: #fc5753; }
  .card .header .dot:nth-child(2) { background-color: #fdbb2d; }
  .card .header .dot:nth-child(3) { background-color: #27c93f; }

  .card .footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    padding: 10px;
  }

  .card .footer .code-content {
    color: #e2e8f0; /* Un blanco ligeramente más suave */
    white-space: pre-wrap;
    word-wrap: break-word;
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.9rem;
  }
`;

export default InfoBlock;