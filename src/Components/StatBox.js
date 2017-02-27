import {Component, h} from 'preact'

const StatBox = ({value, label}) => <div>
  <h2 className='stat-box-title'>{value}</h2>
  <div className='lead stat-box-label'>{label}</div>
</div>

export default StatBox
