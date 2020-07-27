import React, { Component } from 'react';
class Pagenotfound extends Component {
  render() {
    return (
      <div>
        <div className='m-5 text-dark font-weight-bolder'>
          Page Not Found :(
        </div>

        <div className='m-5'>
          <button className='btn btn-secondary text-white'>
            <a href='/' className='text-white'>
              Return back to Home :){' '}
            </a>
          </button>
        </div>
      </div>
    );
  }
}

export default Pagenotfound;
