import React, { Component } from 'react';
import './CourseCard.css';

class CourseCard extends Component {
  state = {};
  formatNumber(count) {
    count = count / 1000;
    return count.toFixed(1);
  }
  batchDetail(e) {
    let text = '';
    if (e.weekdayBatch && e.weekendBatch) {
      text = 'Weekend and Weekday Batches';
    } else if (e.weekendBatch) {
      text = 'Weekend Batches';
    } else {
      text = 'Weekday Batches';
    }
    return text;
  }
  render() {
    console.log('this.props', this.props);
    return (
      <div className='course-cards row justify-content-center mt-4'>
        {this.props.courseList.map((course) => {
          return (
            // course card
            <div
              className='card col-sm-12 col-md-6 col-lg-4 mx-3 my-3 bg-white rounded border p-0'
              key={course.id}>
              {/* course card header image */}
              <img
                src={course.img}
                className='card-img-top'
                alt='courseImage'
              />
              {/* course card body */}
              <div className='card-body'>
                <div className='card-title font-weight-bold'>
                  {course.title}
                </div>
                <div className='d-flex fs-12 fw-600'>
                  <div className='mr-3'>
                    <span className='color-grey mr-2'>LEVEL </span>
                    <span>{course.level}</span>
                  </div>
                  <div>
                    <span className='color-grey mr-2'>GRADES</span>
                    <span>
                      {course.gradeStart} - {course.gradeEnd}
                    </span>
                  </div>
                </div>
                <hr />
                <div className='d-flex flex-column small'>
                  <div className='mb-3'>
                    <img
                      src={'/Assets/Images/course-card/trending.svg'}
                      className='course-card-img'
                      alt='Total Students'
                    />
                    <span className='font-weight-bold'>
                      {this.formatNumber(course.enrolledStudents)}k
                    </span>
                    {'  '}
                    Happy Students
                  </div>
                  <div className='mb-3'>
                    <img
                      src={'/Assets/Images/course-card/duration.svg'}
                      className='course-card-img'
                      alt='Course Day'
                    />
                    <span className='font-weight-bolder'>
                      {course.duration} Hours
                    </span>
                    {'  '}
                    over {course.sessions} sessions
                  </div>
                  <div className='mb-3'>
                    <img
                      src={'/Assets/Images/course-card/people.svg'}
                      alt='Course Batch'
                      className='course-card-img'
                    />
                    {this.batchDetail(course)}
                  </div>
                </div>
                <div className='d-flex justify-content-between fs-20'>
                  <div>
                    <img
                      src={'/Assets/Images/course-card/rupees-icon.svg'}
                      alt='Rupees'
                    />
                    {'  '}
                    <span className='font-weight-bolder'>
                      {course.priceAfterDiscount}
                    </span>
                    {'  '}
                    <span className='small color-grey fw-600'>
                      <del>{course.actualPrice}</del>
                    </span>
                  </div>
                  <div>
                    <img
                      src={'/Assets/Images/course-card/percentage-icon.svg'}
                      alt='percentage'
                    />
                    {'  '}
                    <span className='font-weight-bold small text-success'>
                      {course.discountPercentage}% off
                    </span>
                  </div>
                </div>
                <hr />
                <div className='d-flex justify-content-center explore-link'>
                  <span>LEARN MORE</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CourseCard;
