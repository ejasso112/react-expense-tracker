import React from 'react'
import ChartBar from '../ChartBar/ChartBar'

import './Chart.css'

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value)
  const totalMaximum = Math.max(...dataPointValues)

  const dataPointsMap = props.dataPoints.map((dataPoint) => {
    return <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label} />
  })
  return <div className='chart'>{dataPointsMap}</div>
}

export default Chart
