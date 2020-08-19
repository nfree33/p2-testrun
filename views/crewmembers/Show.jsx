const React = require('react')
const Default = require('../components/Default.jsx')

class Show extends React.Component {
    render(){
        const { name, rank, homePlanet, engineeringAccess} = this.props.crew;
        return(
            <Default>
            <div >
                <h1>Crew Member Page</h1>
                <h3>Name: {name}</h3>
                <h3>rank: {rank}</h3>
                <h3>Home Planet: {homePlanet}</h3>
                <h3>{engineeringAccess ? 'He has access!' : 'He stoopid, no access'}</h3>
                <a href="/crewmembers">Back to Crew Index</a>
            </div>
            </Default>
        )
    }
}

module.exports = Show;