import React, { Component } from 'react';
import info from '../info.json';
import './CourseFeatures.css';
class CourseFeatures extends Component {
  getImageClass(id) {
    let classes = 'card-img-top ';
    classes += id === 1 ? 'wd-105' : 'wd-80';
    return classes;
  }
  render() {
    console.log(info);
    return (
      <div className='row'>
        {info.courseFeatures.map((feature) => (
          // course feature card
          <div
            className='card col-sm-12 col-md-6 col-lg-3 bg-transparent border-0'
            key={feature.id}>
            {/* header image*/}
            <img
              src={feature.img}
              className={this.getImageClass(feature.id)}
              alt={feature.title}
            />
            {/* card body */}
            <div className='card-body p-0 py-3 mr-4'>
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
        ))}
      </div>
    );
  }
}

export default CourseFeatures;
