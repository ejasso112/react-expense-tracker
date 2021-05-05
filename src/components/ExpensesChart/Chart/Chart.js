import React from 'react'
import ChartBar from '../ChartBar/ChartBar'

import './Chart.css'

const Chart = (props) => {
  /* props = {
    dataPoints: Array - Array of data point objsect to render,
  }*/
  const dataPoints = props.dataPoints

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const currentMonthIndex = new Date().getMonth()
  const currentMonth = monthNames[currentMonthIndex]

  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value)
  const totalSum = dataPointValues
    .reduce((a, b) => a + b, 0)
    .toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    })

  const currentMonthTotal = dataPointValues[currentMonthIndex].toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  const totalMaximum = Math.max(...dataPointValues)
  const chartMax = totalMaximum.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  })

  const dataPointsMap = dataPoints.map((dataPoint) => {
    return <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label} />
  })

  return (
    <div className='chart'>
      <h2 className='chart__heading'>Expenses Overview</h2>
      <div className='chart__body'>
        <div className='chart__description'>
          <div className='chart__total'>
            <h3>Total Expenses</h3>
            <div>{totalSum}</div>
          </div>
          <div className='chart__monthly'>
            <h3>{currentMonth} Total</h3>
            <div>{currentMonthTotal}</div>
          </div>
        </div>
        <div className='chart__inner'>
          <div className='chart__key'>
            <div className='chart__max'>{chartMax}</div>
            <div className='chart__min'>$0</div>
          </div>
          {dataPointsMap}
        </div>
      </div>
    </div>
  )
}

export default Chart
