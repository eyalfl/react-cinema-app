import React from 'react';
import './Paginate.scss';

const Paginate = ({ currentPage, totalPages, handlePaginate }) => {
  const prevClass = (currentPage > 1) ? 'paginate-button' : 'paginate-button disable';
  const nextClass = (currentPage < totalPages) ? 'paginate-button' : 'paginate-button disable';
  return (
    <div className='paginate-container'>
      <span className='pageCount'>
        {currentPage} &nbsp;-&nbsp; {totalPages}
      </span>
      <button className={prevClass} onClick={() => handlePaginate('prev')}>Prev</button>
      <button className={nextClass} onClick={() => handlePaginate('next')}>Next</button>
    </div>
  );
};

export default Paginate;
