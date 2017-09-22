import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Route } from 'react-router-dom'
import 'github-markdown-css'

import Markdown from 'react-remarkable'
import { lifecycle } from 'recompose'
import R from 'ramda'

const { pathOr } = R

const Show = lifecycle({
  componentDidMount: function() {
    const page = pathOr('index', ['props', 'match', 'params', 'page'], this)

    fetch(`/${page}.md`)
      .then(res => res.text())
      .then(text => this.setState({ source: text, title: page }))
  }
})(({ source, title }) => {
  return (
    <div className="flex flex-column vh-100">
      <div className="h3 bg-black-80 white">
        <h1 className="avenir tc tracked ttu">{title}</h1>
      </div>
      <div className="markdown-body vh-100 pa2 overflow-scroll">
        <Markdown
          options={{
            html: true,
            highlight: function(str, lang) {
              if (lang && hljs.getLanguage(lang)) {
                try {
                  return hljs.highlight(lang, str).value
                } catch (err) {}
              }

              try {
                return hljs.highlightAuto(str).value
              } catch (err) {}

              return '' // use external default escaping
            }
          }}
        >
          {source}
        </Markdown>
      </div>
    </div>
  )
})

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Show} />
      <Route path="/:page" component={Show} />
    </div>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('app'))
