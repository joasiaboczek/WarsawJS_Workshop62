import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Info = ({ text }: { text: string }) => (
  <p className="text-red-700">{text}</p>
);

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <Content>
      <Info text={'test1'} />
      <Info text={'test2'} />
      <Info text={'test3'} />

      <p></p>
      <p></p>
    </Content>
  </Main>
);

export default About;
