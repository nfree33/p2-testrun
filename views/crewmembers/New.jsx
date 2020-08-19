const React = require('react')
const Default = require('../components/Default.jsx')

class New extends React.Component {
    render(){
    return (
        <Default>
        <div>
            <h1>The Captains Crew</h1>
            <form action="/crewmembers" method ="POST">
                    Name: <input type="text" name="name"/> <br/>
                    Rank: <input type="text" name="rank"/> <br/>
                    Home Planet: <input type="text" name="homePlanet"/> <br/>
                    Engineering Access: 
                    <input type="checkbox" name="engineeringAccess"/>
                    <input type="submit" name="" value="Submit Crew"></input>
            </form>

        </div>
        </Default>
    )
}
}

module.exports = New