import * as React from 'react';
import homedata from '../content/general/homedata.yaml';



export default function Header () {
  return(
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item columns" href="https://bulma.io/images/bulma-logo.png">
    <div className='column'>
    <h1 className='is-size-2 has-text-orange ml-4 is-hovered is-size-4-mobile'>{homedata.HeaderLogoTitle}</h1>
    <p className='is-size-6 is-size-7-mobile  ml-4 is-hovered'>{homedata.HeaderLogoSubTitle}</p>
</div>
    </a>

    <a href=" " role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu is-justify-content-space-around">
    <div class="navbar-end ml-0">
      <div class="navbar-item">
        <a href=" " class="navbar-item mr-5  is-hovered">
        Home
      </a>
      <a href=" " class="navbar-item mr-5  is-hovered">
        Blog
      </a>
        <a href=" " class="navbar-item  mr-5 is-hovered">
        About
      </a>
      <a href=" " class="navbar-item is-size  mr-5  is-hovered">
        Resource
      </a>
        <a href=" " class="navbar-item  mr-5  is-hovered">
        Contact
      </a>
      </div>
    </div>
  </div>
</nav>
  );
};