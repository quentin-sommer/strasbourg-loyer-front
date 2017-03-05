import {Component, h} from 'preact'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

const findAll = arr => arr.find(item => item.district === 'ALL')
const Chart = (props) => {
  const meanRent = props.data.map((stats, idx) => ({
    x: idx + 1,
    rents: findAll(stats.data).meanRent
  }))
  const meanRoom = props.data.map((stats, idx) => ({
    x: idx + 1,
    nbRooms: findAll(stats.data).meanRoom
  }))
  const meanSquareRent = props.data.map((stats, idx) => ({
    x: idx + 1,
    squareRent: findAll(stats.data).meanSquareRent
  }))
  const meanSurface = props.data.map((stats, idx) => ({
    x: idx + 1,
    surface: findAll(stats.data).meanSurface
  }))
  console.log(meanRent)
  return (
    <div>
      <div style={{display: 'flex', height: '400px'}}>
        <ResponsiveContainer>
          <LineChart width={400}
                     height={400}
                     data={meanRent}
                     margin={{top: 5, right: 30, left: 20, bottom: 5}}
          >
            <XAxis dataKey="x"/>
            <YAxis domain={['dataMin - 10', 'dataMax + 10']}/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend />
            <Line type="monotone" dataKey="rents" stroke="#8884d8"
                  activeDot={{r: 8}}/>
          </LineChart>
        </ResponsiveContainer>
        <ResponsiveContainer>
          <LineChart width={400}
                     height={400}
                     data={meanSquareRent}
                     margin={{top: 5, right: 30, left: 20, bottom: 5}}
          >
            <XAxis dataKey="x"/>
            <YAxis domain={['dataMin - 5', 'dataMax + 5']}/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend />
            <Line type="monotone" dataKey="squareRent" stroke="#8884d8"
                  activeDot={{r: 8}}/>
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div style={{display: 'flex', height: '400px'}}>
        <ResponsiveContainer>
          <LineChart width={400}
                     height={400}
                     data={meanRoom}
                     margin={{top: 5, right: 30, left: 20, bottom: 5}}
          >
            <XAxis dataKey="x"/>
            <YAxis domain={['dataMin - .1', 'dataMax + .1']}/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend />
            <Line type="monotone" dataKey="nbRooms" stroke="#8884d8"
                  activeDot={{r: 8}}/>
          </LineChart>
        </ResponsiveContainer>
        <ResponsiveContainer>
          <LineChart width={400}
                     height={400}
                     data={meanSurface}
                     margin={{top: 5, right: 30, left: 20, bottom: 5}}
          >
            <XAxis dataKey="x"/>
            <YAxis domain={['dataMin - 5', 'dataMax + 5']}/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend />
            <Line type="monotone" dataKey="surface" stroke="#8884d8"
                  activeDot={{r: 8}}/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Chart
