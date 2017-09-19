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
      .then(text => this.setState({ source: text }))
  }
})(({ source }) => {
  return (
    <div className="markdown-body">
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
