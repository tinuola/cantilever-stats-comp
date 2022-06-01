import { Button, FlexHeading, FlexSubheading, Header, Heading, Subheading } from './styles/Header.styled';
import { Frame } from './styles/Layout.styled';

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

      <main>
      </main>
    </>
  )
}

export default MultipleStats;