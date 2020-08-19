const React = require('react');
const Default = require('../components/Default.jsx')

class Index extends React.Component {
    render() {
        const { crew } = this.props;
        return (
            <Default>
            <div>
                <h1>Crew Member Index Page</h1>
                <nav>
                    <h2><a href="/crewmembers/new">Add New Crew</a></h2>
                    <h3><a href="/logs">Captains Log</a></h3>
                </nav>
                <ul>
                    {
                        crew.map((crew, i) => {
                            return (
                                <li>
                                    {/* /crewmembers/crewmembers/override_post_method */}
                                        <h3><a href={`/crewmembers/${crew._id}`}>Name: {crew.name}</a></h3>       <br/> 
                                        <h3>Rank: {crew.rank}</h3>       <br/>
                                        <h3>Home Planet: {crew.homePlanet}</h3> <br/>
                                        <h3>Engineering Access: {crew.engineeringAccess ? 'You have access!' : 'You stoopid, no access'}</h3><br/>
                                    <form action={`/crewmembers/${crew._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="delete"/>
                                    </form>
                                    {/* Create a link to the edit route /crewmembers/crew/edit */}
                                    <a href={`/crewmembers/${crew._id}/edit`}>Edit</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            </Default>
        )
    }
}

module.exports = Index;