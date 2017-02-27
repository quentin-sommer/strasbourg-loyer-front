import {Component, h} from 'preact'
import Sort from 'react-collection-helpers/lib/components/Sort'
import First from 'react-collection-helpers/lib/components/First'
import Some from 'react-collection-helpers/lib/components/Some'
import Card from 'elemental/lib/components/Card'
import Row from 'elemental/lib/components/Row'
import Col from 'elemental/lib/components/Col'
import Spinner from 'elemental/lib/components/Spinner'
import fetchStats from '../API/stats'
import Map from './Map'
import StatBox from './StatBox'

const ALL_SELECTED = 17
const getSelectedDistrict = (entries, selectedDistrictId) => {
  return entries.find(item => item.districtId === selectedDistrictId)
}



class App extends Component {
  state = {
    stats: {
      data: [],
      selectedDistrict: ALL_SELECTED,
    }
  }

  componentDidMount() {
    fetchStats()
      .then(stats => this.setState({
        stats: {...this.state.stats, data: stats[0].data}
      }))
  }

  render({}, {page}) {
    const means = getSelectedDistrict(this.state.stats.data, this.state.stats.selectedDistrict)
    return (
      <div style={{maxWidth: '960px', margin: 'auto'}}>
        <h1 className="font-serif">Strasbourg loyer</h1>
        <Card>
          <Row>
            <Col className='text-center' sm='100%'>
              <h2>{means ? means.district.substring(0, 15) : '...'}</h2>
            </Col>
          </Row>
          {means !== undefined
            ? <Row>
              <Col sm="25%">
                <StatBox
                  value={`${means.meanRent.toFixed(0)}€`}
                  label='Loyer moyen'
                />
              </Col>
              <Col sm="25%">
                <StatBox
                  value={`${means.meanSquareRent.toFixed(1)}€`}
                  label='Prix moyen du mètre carré'
                />
              </Col>
              <Col sm="25%">
                <StatBox
                  value={means.meanRoom.toFixed(1)}
                  label='Nombre de pièces moyen'
                />
              </Col>
              <Col sm="25%">
                <StatBox
                  value={`${means.meanSurface.toFixed(0)}m²`}
                  label='Surface moyenne'
                />
              </Col>
            </Row>
            : <Row>
              <Col sm="1/3"/>
              <Col sm="1/3" className='text-center'>
                <Spinner size="lg"/>
              </Col>
              <Col sm="1/3"/>
            </Row>
          }
        </Card>
        <Row>
          <Col>
            <Map
              onDistrictHover={(e) => {
                this.setState({
                  stats: {
                    ...this.state.stats,
                    selectedDistrict: parseInt(e.target.id, 10)
                  }
                })
              }}
              onDistrictOut={() => {
                this.setState({
                  stats: {
                    ...this.state.stats,
                    selectedDistrict: ALL_SELECTED
                  }
                })
              }}
            />
          </Col>
        </Row>
      </div>
    )
  }
}

export default App
