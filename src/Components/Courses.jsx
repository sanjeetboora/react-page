import React, { Component } from 'react';
import './Courses.css';
import info from '../info.json';
import CourseFeatures from './CourseFeatures';
import CourseCard from './CourseCard';

class Courses extends Component {
  // fixed values for intial display of courses
  state = {
    courseCategory: 'All',
    gradeStart: 5,
    gradeEnd: 8,
    courseList: [],
  };

  //intial display of courses filtered on the basis of active grade section
  componentDidMount() {
    let courseList = info.courseDetails.filter(
      (e) => e.gradeStart === this.state.gradeStart
    );
    this.setState({ courseList });
  }

  //courses filtered based upon selected grade section
  gradesCourseFilter = (grade) => {
    let currGrade = grade;
    let courseList = [];

    if (this.state.courseCategory === 'All') {
      courseList = info.courseDetails.filter((x) => x.gradeStart === currGrade);
    } else {
      courseList = info.courseDetails.filter(
        (x) =>
          x.gradeStart >= currGrade &&
          x.gradeEnd <= currGrade + 3 &&
          x.domain === this.state.courseCategory
      );
    }
    this.setState({
      courseList: courseList,
      gradeStart: currGrade,
      gradeEnd: currGrade + 3,
    });
  };

  //courses filtered based upon selected course category
  categoryCourseFilter = (e) => {
    let currCategory = e.target.value;
    let courseList = [];
    if (currCategory === 'All') {
      courseList = info.courseDetails.filter(
        (x) => x.gradeStart === this.state.gradeStart
      );
    } else {
      courseList = info.courseDetails.filter(
        (x) =>
          x.gradeStart === this.state.gradeStart && x.domain === currCategory
      );
    }
    this.setState({
      courseList: courseList,
      courseCategory: currCategory,
    });
  };

  render() {
    return (
      <div>
        <div className='banner-container'>
          {/* Navbar */}
          <div className='navbar-container pt-3'>
            <nav className='navbar navbar-expand-lg px-0'>
              <a className='navbar-brand mr-4' href='/'>
                <img
                  src={'/Assets/Images/logo/camp-k-12-logo.png'}
                  alt='logo'
                />
              </a>
              {/* navbar toggle button for small screen */}
              <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarTogglerDemo02'
                aria-controls='navbarTogglerDemo02'
                aria-expanded='false'
                aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
              </button>

              <div
                className='collapse navbar-collapse'
                id='navbarTogglerDemo02'>
                <ul className='navbar-nav mr-auto mt-2 mt-lg-0 text-light'>
                  <li className='nav-item active mr-4'>ONLINE COURSES</li>
                  <li className='nav-item mr-4'>OFFLINE CAMPS</li>
                  <li className='nav-item mr-4'>REFER & EARN</li>
                </ul>
              </div>
              <div className='ml-auto d-flex'>
                <img
                  src='/Assets/Images/leaderboard/leaderboard.png'
                  className='mr-3'
                  alt='Leaderboard'
                />
                <button className='btn btn-sm mr-3 text-white font-w600 btn-bg-light px-4'>
                  FREE TRIAL
                </button>
                <button className='btn btn-sm text-light font-w600 btn-bg-light px-4'>
                  LOG IN
                </button>
              </div>
            </nav>
          </div>
          {/* courses features */}
          <div className='header-container'>
            <div className='pt-3 pb-5 text-white'>
              <h1 className='font-weight-bolder mb-4'>ONLINE COURSES</h1>
              <div className='px-1 mb-3'>
                <CourseFeatures />
              </div>
              <button className='btn free-trial-btn rounded'>
                BOOK A FREE TRIAL
              </button>
            </div>
          </div>
        </div>
        {/* courses section */}
        <div className='courses-container'>
          <div className='online-courses-section bg-white shadow-sm'>
            {/* grade selection nav */}
            <div className='grades-container d-flex justify-content-center'>
              <ul
                className='shadow-sm nav nav-pills bg-white rounded-0 p-0'
                id='pills-tab'
                role='tablist'>
                <li className='sm-col-12 order-1'>
                  <a
                    className='nav-link'
                    data-toggle='pill'
                    href='#grade1-4'
                    role='tab'
                    aria-controls='grade1-4'
                    aria-selected='true'
                    onClick={() => this.gradesCourseFilter(1)}>
                    Grades 1-4
                  </a>
                </li>
                <li className='sm-col-12 order-1'>
                  <a
                    className='nav-link active'
                    data-toggle='pill'
                    href='#grade5-8'
                    role='tab'
                    aria-controls='grade5-8'
                    aria-selected='false'
                    onClick={() => this.gradesCourseFilter(5)}>
                    Grades 5-8
                  </a>
                </li>
                <li className='sm-col-12 order-1'>
                  <a
                    className='nav-link'
                    data-toggle='pill'
                    href='#grade9-12'
                    role='tab'
                    aria-controls='grade9-12'
                    aria-selected='false'
                    onClick={() => this.gradesCourseFilter(9)}>
                    Grades 9-12
                  </a>
                </li>
              </ul>
            </div>
            {/* courses section */}
            <div className='courses-section-container'>
              <div className='row justify-content-between px-2'>
                {/* selected grade and course category */}
                <div className='col-sm-12 col-md-12 col-lg-6'>
                  Showing{' '}
                  <span className='font-weight-bold'>
                    {this.state.courseCategory}
                  </span>{' '}
                  courses for{' '}
                  <strong>
                    Grades {this.state.gradeStart}-{this.state.gradeEnd}
                  </strong>
                </div>
                {/* course category filter dropdown*/}
                <div className='col-sm-12 col-md-6 col-lg-3'>
                  <select
                    className='form-control'
                    onChange={this.categoryCourseFilter}>
                    <option value='All'>All Courses</option>
                    <option value='Programming Fundamentals'>
                      Programming Fundamentals
                    </option>
                    <option value='Java Programming'>Java Programming</option>
                    <option value='Python Programming'>
                      Python Programming
                    </option>
                  </select>
                </div>
              </div>
              {/* listing relevant course cards */}
              {this.state.courseList.length > 0 ? (
                <CourseCard courseList={this.state.courseList} />
              ) : (
                // Show message when no courses available for selected criteria
                <div className='text-center justify-content-between my-5 '>
                  New Courses coming soon :)
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Courses;
