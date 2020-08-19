const React = require('react')

class Default extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <link rel="stylesheet" href="/style.css" />
                    <title>YARRRR</title>
                </head>
                <body>

                    {this.props.children}

                </body>
            </html >
        )
    }
}

module.exports = Default