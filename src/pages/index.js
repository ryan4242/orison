import { html } from '@popeindustries/lit-html-server';
import { mdFile } from '../../bin/orison-esm.js';
import nav from '../partials/nav.js';

export default () => html`
  <section>${mdFile('./src/partials/documentation/setup.md')}</section>
  <section>${mdFile('./src/partials/documentation/getting-started.md')}</section>
  <section>${mdFile('./src/partials/documentation/programatic.md')}</section>
  <section>${mdFile('./src/partials/documentation/single-pages.md')}</section>
  <section>${mdFile('./src/partials/documentation/multiple-pages.md')}</section>
  <section>${mdFile('./src/partials/documentation/partials.md')}</section>
  <section>${mdFile('./src/partials/documentation/layouts.md')}</section>
  <section>
    <p>
      OrisonJS utilizes the following JavaScript libraries:
    </p>
    <ol>
      <li><a href="https://github.com/popeindustries/lit-html-server">lit-html-server</a></li>
      <li><a href="https://github.com/Polymer/lit-html">lit-html</a></li>
      <li><a href="https://github.com/expressjs/express">express</a></li>
      <li><a href="https://github.com/markdown-it/markdown-it">markdown-it</a></li>
    </ol>
  </section>
`;
