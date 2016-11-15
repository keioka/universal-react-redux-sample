import React, { Component }from 'react'
import ReactDOM from 'react-dom/server'
import serialize from 'serialize-javascript'
import Helmet from 'react-helmet'

class HTML extends Component {
  
  constructor(){
    super()
  }

  render(){
    const {components, store} = this.props;
    const content = components ? ReactDOM.renderToString(components): ''
    
    const head = Helmet.rewind()

    return (
      <html lang="en">
        <head>
          <Helmet
            defaultTitle="My Site"
            titleTemplate="My Site - %s"
          />
          <link rel="stylesheet" href="build/style.css" />
        </head>
        <body>
          <div id="content" dangerouslySetInnerHTML={{__html: content}}/>
          <script dangerouslySetInnerHTML={{__html: `window.__REDUX_STORE__=${serialize(store.getState())};`}} charSet="UTF-8"/>
          <script src="http://localhost:5001/webpack-dev-server.js"></script>
          <script src="build/bundle.js"></script>
        </body>
      </html>
    )
  }
}

export default HTML
