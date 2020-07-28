import React from 'react';
import './Coursecard.css';

function Coursecard(props) {
  return (
    <div className='course-cards row mt-4 m-0'>
      {props.courseList.map((course) => {
        return (
          <div className='card bg-white rounded border p-0' key={course.id}>
            {/* course card header image */}
            <img src={course.img} className='card-img-top' alt='courseImage' />
            {/* course card body */}
            <div className='card-body'>
              <div className='card-title font-weight-bold'>{course.title}</div>
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
                    {(course.enrolledStudents / 1000).toFixed(1)}k
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
                  {/* {batchDetail(course)} */}
                  {course.weekdayBatch && course.weekendBatch
                    ? 'Weekend and Weekday Batches'
                    : null}
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

export default Coursecard;
