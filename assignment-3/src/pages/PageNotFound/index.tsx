import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="page-not-found">
      <div className="page-not-found d-flex justify-content-center align-items-center">
        <div className="content">
          <h3 style={{ fontSize: '6rem', display: 'inline-block' }}>Oops!</h3>
          <p style={{ fontSize: '5rem', display: 'inline-block' }}>404</p>
          <p style={{ fontSize: '2rem' }}>Page Not Found</p>
          <p style={{ fontSize: '1.25rem' }}>
            Có lẽ bạn đã nhập sai, vui lòng quay về trang chủ!
          </p>
        </div>
      </div>
        <Link to="/">
          <button>Trang chủ</button>
        </Link>
    </div>
  );
}

export default PageNotFound;
