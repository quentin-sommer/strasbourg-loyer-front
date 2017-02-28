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

const DISPLAY_NAMES = {
  1: 'Kutenau',
  2: 'Petite France - Hôpital',
  3: 'Wacken',
  4: 'Quartier des XV',
  5: 'Orangerie',
  6: 'Esplanade',
  7: 'Contades - République',
  8: 'Halles',
  9: 'Gare - Laiterie',
  13: 'Neudorf',
  16: 'Centre Ville',
  [ALL_SELECTED]: 'Moyenne globale',
}
const getDisplayName = districtId => DISPLAY_NAMES[districtId]
const getSelectedDistrict = (entries, selectedDistrictId) =>
  entries.find(item => item.districtId === selectedDistrictId)

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
    const selected = getSelectedDistrict(this.state.stats.data, this.state.stats.selectedDistrict)
    const mostExp = this.state.stats.data.reduce((acc, cur) => (cur.meanSquareRent < acc.meanSquareRent && getDisplayName(cur.districtId) !== undefined) ? cur : acc, {meanSquareRent: 100})

    return (
      <div style={{maxWidth: '960px', margin: 'auto'}}>
        <Row>
          <Col>
            <h1 class="font-serif text-center app-title">Loyers de
              Strasbourg</h1>
            <p class="lead justify">Nous avons analysé les données de plus de
              {' '}<b>3000 biens</b> de
              différentes
              plateformes immobilières afin de générer des statistiques sur les
              différents quartiers de Strasbourg</p>
            <p class="justify">Vous êtes-vous déjà demandé quel quartier de
              Strasbourg est le moins cher ? Eh bien,
              c'est <b>{getDisplayName(mostExp.districtId)}</b>. Le prix du
              mètre carré là-bas est de <b>{mostExp.meanSquareRent}€/m²</b> en
              moyenne. Surpris ? Profitez-en pour vérifier vos a priori sur
              votre quartier...
            </p>
          </Col>
        </Row>
        <Card>
          <Row>
            <Col class="text-center" sm="100%">
              <h2>{selected ? getDisplayName(this.state.stats.selectedDistrict) : '...'}</h2>
            </Col>
          </Row>
          {selected !== undefined
            ? <Row>
              <Col sm="25%">
                <StatBox
                  value={`${selected.meanRent.toFixed(0)}€`}
                  label="Loyer moyen"
                />
              </Col>
              <Col sm="25%">
                <StatBox
                  value={`${selected.meanSquareRent.toFixed(1)}€`}
                  label="Prix moyen du mètre carré"
                />
              </Col>
              <Col sm="25%">
                <StatBox
                  value={selected.meanRoom.toFixed(1)}
                  label="Nombre de pièces moyen"
                />
              </Col>
              <Col sm="25%">
                <StatBox
                  value={`${selected.meanSurface.toFixed(0)}m²`}
                  label="Surface moyenne"
                />
              </Col>
            </Row>
            : <Row>
              <Col sm="1/3"/>
              <Col sm="1/3" class="text-center">
                <Spinner size="lg"/>
              </Col>
              <Col sm="1/3"/>
            </Row>
          }
        </Card>
        <Card style={{padding: 0}}>
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
        </Card>

        <Row style={{marginBottom: '2em'}}>
          <Col>
            Réalisé par <a target="#" href="http://quentin-sommer.com">Quentin
            Sommer</a>
          </Col>
        </Row>
      </div>
    )
  }
}

export default App
