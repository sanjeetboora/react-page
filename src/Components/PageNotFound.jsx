import React from 'react';
class Pagenotfound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
