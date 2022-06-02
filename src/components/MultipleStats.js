import {
  CtaLabel,
  CtaLink,
  FlexHeading,
  FlexSubheading,
  Header,
  Heading,
  Subheading,
} from './styles/Header.styled';
import { Image, ImageCaption } from './styles/Image.styled';
import { Divider, Frame } from './styles/Layout.styled';
import { StatsContainer, StatItem, StatIcon, StatNum, StatText } from './styles/Stats.styled';

import data from '../data';

export default function MultipleStats() {
  return (
    <>
      <Frame>
        <Header>
          <FlexHeading>
            <Heading color='#9f8de4'>Guaranteed Results</Heading>
            <Heading color='#fff'>You Can See and Feel</Heading>
          </FlexHeading>
          <FlexSubheading>
            <Subheading>
              Calibrate is the only weight loss program that guarantees at least 10% weight loss, or
              your money back (see terms). Here's why: 93% of our membrs say Calibrate is more
              effective than other programs they've tried, and their results prove it.
            </Subheading>
            <CtaLink href='#'>
              <CtaLabel>See Results</CtaLabel>
            </CtaLink>
          </FlexSubheading>
        </Header>
      </Frame>

      <Divider />

      <main>
        <Frame>
          <Image src='https://via.placeholder.com/1920x800' alt='Group of product customers' />
          <ImageCaption>Real Calibrate Members</ImageCaption>
        </Frame>
        <StatsContainer>
          {data.map((item) => (
            <StatItem>
              <StatIcon src={item.icon} alt='Icon' />
              <StatNum suffix={item.suffix}>{item.number}</StatNum>
              <StatText>{item.stat_text}</StatText>
            </StatItem>
          ))}
        </StatsContainer>
      </main>
    </>
  );
}
