import React from 'react';
import homedata from '../content/general/homedata.yaml';
import Heading from './element/Heading';
import Button from './element/button';

export default function HomeHero() {
  return (
    <section class="section px-0">
      <div class="columns">
        <div class="column">
          <img src={homedata.HeroImageLeft} alt="heroimage" />
        </div>
        <div class="column">
          <div class="columns">
            <div class="column is-8 has-text-centered is-offset-2 ">
              <Heading
                className="is-size-4 has-text-centered is-size-5-mobile mb-4 is-hovered"
                text={homedata.HeroTitleRight}
              />
              <img src={homedata.HeroImageRight} alt="heroimage" />
              <Heading
                className="is-size-4 has-text-centered is-size-6-mobile my-3 mx-6 is-hovered"
                text={homedata.HeroSubTitleRight}
              />
              <p className="text-base has-text-centered is-size-7-mobile mt-3 mx-6 is-hovered mb-3">
                {homedata.HeroDescriptionRight}
              </p>
              <Button text="All Post" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
