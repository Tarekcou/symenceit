import React from 'react'

const Stats = () => {
  return (
    <div className="shadow mx-auto">
      <div className="flex mx-auto w-11/12 text-center">
        <div className="stat">
          <div className="stat-title">Experience</div>
          <div className="stat-value">5 years +</div>
          <div className="stat-desc">Jan 2020 - Present</div>
        </div>

        <div className="stat">
          <div className="stat-title">Software</div>
          <div className="stat-value">15+</div>
          <div className="stat-desc">↗︎ 2 this year</div>
        </div>

        <div className="stat">
          <div className="stat-title">Users</div>
          <div className="stat-value">10000+</div>
          <div className="stat-desc">↗︎ 1000+</div>
        </div>
      </div>
    </div>
  );
}

export default Stats