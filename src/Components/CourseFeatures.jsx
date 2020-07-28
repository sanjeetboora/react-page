import React from 'react';
import info from '../info.json';
import './Coursefeatures.css';

function Coursefeatures() {
  return (
    <div className='row'>
      {info.courseFeatures.map((feature, i) => {
        return (
          <div
            className='card col-sm-12 col-md-6 col-lg-3 bg-transparent border-0'
            key={feature.id}>
            {/* header image*/}
            <img
              src={feature.img}
              className={i === 0 ? 'card-img-top wd-105' : 'card-img-top wd-80'}
              alt={feature.title}
            />

            {/* card body */}
            <div className='card-body p-0 py-3 mr-lg-4'>
              <h5 className='card-title font-weight-bold'>{feature.title}</h5>

              <p className='card-text'>
                {feature.desc}
                {feature.linkExists ? (
                  <a href={feature.link} className='text-white ml-1'>
                    <u>{feature.linkTitle}</u>
                  </a>
                ) : null}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Coursefeatures;
