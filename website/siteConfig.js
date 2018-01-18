/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'User1',
    image: '/test-site/img/docusaurus.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true
  }
]

const siteConfig = {
  title: 'Functional JavaScript' /* title for your website */,
  tagline: 'Field Guide',
  url: 'https://fp.how2js.com' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  projectName: 'fpjs',
  headerLinks: [{ doc: 'contents', label: 'Guide' }],
  users,
  /* path to images for header/footer */
  headerIcon: 'img/fpjs-logo.svg',
  footerIcon: 'img/fpjs-logo.svg',
  favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#2E8555',
    secondaryColor: '#205C3B'
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Your Name or Your Company Name',
  // organizationName: 'deltice', // or set an env variable ORGANIZATION_NAME
  // projectName: 'test-site', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default'
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl:
    'https://github.com/jrs-innovation-center/functional-javascript-field-guide'
}

module.exports = siteConfig
