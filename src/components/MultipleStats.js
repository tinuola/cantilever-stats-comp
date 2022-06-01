import { Button, FlexHeading, FlexSubheading, Header, Heading, Subheading } from './styles/Header.styled';
import data from '../data';
import { ImageCaption, StatsContainer, StatItem, StatData, StatText } from './styles/Main.styled';
import { Divider, Frame } from './styles/Layout.styled';

function MultipleStats () {
  return(
    <>
      <Frame>
        <Header>
          <FlexHeading>
            <Heading color='#9f8de4'>Guaranteed Results</Heading>
            <Heading color='#fff'>You Can See and Feel</Heading>
          </FlexHeading>
          <FlexSubheading>
            <Subheading>Calibrate is the only weight loss program that guarantees at least 10% weight loss, or your money back (see terms). Here's why: 93% of our membrs say Calibrate is more effective than other programs they've tried, and their results prove it.</Subheading>
            <Button>See Results</Button>
          </FlexSubheading>
        </Header>
      </Frame>
      <Divider/>
      {/* <main> */}
        <Frame>
          <img src="https://via.placeholder.com/1920x900" alt="Real Calibrate members" />
          <ImageCaption>Real Calibrate Members</ImageCaption>
        </Frame>
        <StatsContainer>
          {data.map((item) => (
            <StatItem>
              <img src={item.icon} alt="Icon" />
              <StatData suffix={item.suffix}>{item.number}</StatData>
              <StatText>{item.stat_text}</StatText>
            </StatItem>
          )) }
        </StatsContainer>
      {/* </main> */}
    </>
  )
}

export default MultipleStats;