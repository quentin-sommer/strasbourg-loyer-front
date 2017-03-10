import {Component, h} from 'preact'
import Sort from 'react-collection-helpers/lib/components/Sort'
import First from 'react-collection-helpers/lib/components/First'
import Some from 'react-collection-helpers/lib/components/Some'
import {
  FacebookShareButton,
  TwitterShareButton
} from 'react-share/lib/share-buttons'
import fetchStats from '../API/stats'
import Map from './Map'
import StatBox from './StatBox'

const generateShareIcon = require('react-share/lib/generateIcon')
const ALL_SELECTED = 17

const DISPLAY_NAMES = {
  1: 'Krutenau',
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
  [ALL_SELECTED]: 'Moyennes globale',
}
const getDisplayName = districtId => DISPLAY_NAMES[districtId]
const getSelectedDistrict = (entries, selectedDistrictId) =>
  entries.find(item => item.districtId === selectedDistrictId)

const FbButton = generateShareIcon.generateIcon('facebook')
const TwitterButton = generateShareIcon.generateIcon('twitter')
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
    const mostExp = this.state.stats.data.reduce((acc, cur) => (cur.meanSquareRent > acc.meanSquareRent && getDisplayName(cur.districtId) !== undefined) ? cur : acc, {meanSquareRent: 0})

    return (
      <div style={{maxWidth: '960px', margin: 'auto'}}>
        <div style={{padding: '0 .5em 0 .5em'}}>
          <h1 class="font-serif text-center app-title">Meilleurs Loyers de
            Strasbourg🏠</h1>
          <p class="lead justify">Strabourg Loyer analyse les données de plus de
            {' '}<b>3000 offres de location</b> de
            différentes
            plateformes immobilières afin de générer des statistiques sur les
            différents quartiers de Strasbourg</p>
          <p class="lead justify">Vous êtes-vous déjà demandé quel quartier de
            Strasbourg est le plus cher ? Eh bien,
            c'est <b>{getDisplayName(mostExp.districtId)}</b>. Le prix du
            mètre carré là-bas est de <b>{mostExp.meanSquareRent}€/m²</b> en
            moyenne. Surpris ? Profitez-en pour vérifier vos a priori sur
            votre quartier ➡
          </p>
        </div>
        <div class="stats-map">
          <div class="stat-box-wrapper">
            <h2
              class="text-center stat-title">{selected ? getDisplayName(this.state.stats.selectedDistrict) : 'Chargement'}</h2>
            {selected !== undefined
              ? <div class="flex-stat-wrapper">
                <div class="flex-stat-item">
                  <StatBox
                    value={`${selected.meanRent.toFixed(0)}€`}
                    label="Loyer moyen"
                  />
                </div>
                <div class="flex-stat-item">
                  <StatBox
                    value={`${selected.meanSurface.toFixed(0)}m²`}
                    label="Surface moyenne"
                  />
                </div>
                <div class="flex-stat-item">
                  <StatBox
                    value={`${selected.meanSquareRent.toFixed(1)}€`}
                    label="Prix du mètre carré"
                  />
                </div>
                <div class="flex-stat-item">
                  <StatBox
                    value={selected.meanRoom.toFixed(1)}
                    label="Nombre de pièces moyen"
                  />
                </div>
              </div>
              : <div style={{display: 'flex'}}>
                <div style={{flex: 25}}/>
                <div style={{flex: 25}} class="text-center">
                  ...
                </div>
                <div style={{flex: 25}}/>
              </div>
            }
          </div>
          <div style={{padding: 0}}>
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
          </div>
        </div>
        <div style={{
          margin: '1em 0 0 0',
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
          <div class="share-btn">
            <FacebookShareButton
              url="https://www.strasbourg-loyer.fr"
              title="Meilleurs Loyers de Strasbourg"
              picture={`${_API_URL_}/excerpt.webp`}>
              <FbButton size={32}/>
            </FacebookShareButton>
          </div>
          <div class="share-btn">
            <TwitterShareButton
              url="https://www.strasbourg-loyer.fr"
              title="Découvrez les meilleurs loyers de Strasbourg !">
              <TwitterButton size={32}/>
            </TwitterShareButton>
          </div>
        </div>
        <div style={{
          marginTop: '2.5em',
          padding: '0 .5em 0 .5em'
        }}>
          <h2>FAQ</h2>
          <p class="faq-question">Où se situe le quartier X ?</p>
          <p className="faq-answer"><span class="faq-question">➡ </span>La
            carte
            est volontairement centrée sur
            le centre-ville car c'est la zone comportant le plus de données.</p>
          <p class="faq-question">D'où proviennent les données ?</p>
          <p className="faq-answer"><span class="faq-question">➡ </span>De
            différents sites d'immobilier populaires.</p>
          <p class="faq-question">Pourquoi l'hôpital est avec la Petite France
            ?</p>
          <p className="faq-answer"><span class="faq-question">➡ </span>L'hôpital
            n'influant pas en lui-même sur
            les données, il est inclus avec la Petite France pour
            toutes les locations présentes autour de la porte de l'hôpital.</p>
          <p class="faq-question">Je ne suis pas d'accord avec le tracé du
            quartier X</p>
          <p className="faq-answer"><span class="faq-question">➡ </span>
            J'ai essayé de concilier différentes représentations des quartiers,
            en prenant en compte les
            différents tracés existants et les
            données disponibles dans chacun des quartiers.</p>
          <p class="faq-question">J'ai une autre question !</p>
          <p className="faq-answer"><span class="faq-question">➡ </span>Vous
            pouvez me contacter sur <a target="#"
                                       href="https://twitter.com/quentin_smr">Twitter</a>{' !'}
          </p>


          <p class="lead text-center" style={{margin: '1.5em 0 1em 0'}}>
            Réalisé par <a target="#" href="https://twitter.com/quentin_smr">Quentin
            Sommer</a>
          </p>
        </div>
      </div>
    )
  }
}

export default App
