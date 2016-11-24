import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Quote,
  Cite,
  CodePane,
  Deck,
  Fit,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Slide,
  Spectacle,
  Text
} from "spectacle";

import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";


// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("font-awesome/css/font-awesome.css");

const images = {
  scaling: require("../assets/solving-scaling.jpg"),
};

preloader(images);

function notes(noteArray) {
  const listItems = noteArray.map(n => `<li>${n}</li>`);
  return `<ul>${listItems.join('')}</ul>`
}

function TitleElement({ children }) {
  const style = {
    flex: "0 0 auto",
  };
  return (
    <Fit {...{ style }}>
    <Text margin="20px 0px 0px" textSize="2rem">
    {children}
    </Text>
    </Fit>
  );
}

function Icon({ name, ...rest }) {
  return <i className={`fa fa-${name}`} aria-hidden="true" {...rest} ></i>;
}

const theme = createTheme({
  primary: "#e10098"
});
//const theme = createTheme({
  //primary: "#E10098",
  //secondary: "black",
  //tertiary: "black",
  //quartenary: "white"
//}, {
  //primary: "Open Sans Condensed",
  //secondary: "PressStart2P",
  //tertiary: "Source Code Pro for Powerline",
//});

const slideProps = { maxWidth: "100%", maxHeight: "100%" };

const slidesUrl = "http://graphql-london-web-clients.surge.sh/";
const githubUrl = "https://github.com/0xR/snapshot-experiments/pull/1";

// Sections
const titleSlide = (
  <Slide {...slideProps} >
    <Heading size={1} fit>
    GraphQL web clients
    </Heading>
    <Layout style={{ justifyContent: "space-between", margin: "0 0 25px 0" }}>
    <TitleElement><Icon name="user" /> Ruben Oostinga</TitleElement>
    <TitleElement><Icon name="twitter" /> @RubenOostinga</TitleElement>
    <TitleElement><Icon name="github" /> https://github.com/0xR</TitleElement>
    <TitleElement><Icon name="building" /> Xebia</TitleElement>
    </Layout>
    <Text textAlign="right" textSize="1.5rem"><Link href={slidesUrl}>{slidesUrl}</Link></Text>
  </Slide>
);

const backgroundSlide = (
  <Slide {...slideProps} >
    <Heading size={1} fit>
    Background
    </Heading>
  </Slide>
);
const finalSlide = (
  <Slide {...slideProps} >
    <Heading size={2} fit>
    The End
    </Heading>
    <Text>
      Code:&nbsp;
      <Link href={githubUrl} >{githubUrl}</Link>
    </Text>
    <Text>
      Slides:&nbsp;
      <Link href={slidesUrl}>{slidesUrl}</Link></Text>
    <Text>For the upcoming blogpost, follow <Icon name="twitter" /> @RubenOostinga</Text>
  </Slide>
);

const pickingLibrariesSection = [
  <Slide {...slideProps} >
    <Heading size={4}>
      Picking technology
    </Heading>
    <List>
      <Appear><ListItem>Does it solve the problem I have</ListItem></Appear>
    </List>
  </Slide>,
  <Slide {...slideProps} >
     <Image src={images.scaling.replace("/", "")} height="700" />
  </Slide>,
  <Slide {...slideProps} >
    <Heading size={4}>
      Picking technology
    </Heading>
    <List>
      <ListItem>Does it solve the problem I have</ListItem>
      <Appear><ListItem>Does it introduce less problems than it solves</ListItem></Appear>
      <Appear><ListItem>Is it well supported</ListItem></Appear>
      <Appear><ListItem>Can I migrate away when things change?</ListItem></Appear>
    </List>
  </Slide>,
  <Slide transition={["slide"]} bgColor="black">
    <BlockQuote>
      <Quote>The Only Thing That Is Constant Is Change</Quote>
      <Cite>Heraclitus (Early JavaScript developer)</Cite>
    </BlockQuote>
  </Slide>
];

// Should be a proper component to ensure HMR works
export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck>
          {[
            titleSlide,
            backgroundSlide,
            ...pickingLibrariesSection,
            finalSlide,
          ]}
        </Deck>
      </Spectacle>
    );
  }
}

