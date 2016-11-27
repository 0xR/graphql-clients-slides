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
  Text,
  Table,
  TableHeaderItem,
  TableRow,
  TableItem
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
  itdepends: require("../assets/itdepends-big.jpg"),
  check: require("../assets/emoji/check.svg"),
  cross: require("../assets/emoji/cross.svg"),
  cry: require("../assets/emoji/cry.svg"),
  neutral: require("../assets/emoji/neutral.svg"),
  complexity: require("../assets/complexity.svg")
};

preloader(images);

function notes(noteArray) {
  const listItems = noteArray.map((n) => `<li>${n}</li>`);
  return `<ul>${listItems.join("")}</ul>`;
}

function TitleElement({ children }) {
  const style = {
    flex: "0 0 auto"
  };
  return (
    <Fit {...{ style }}>
    <Text margin="20px 0px 0px" textSize="2rem">
    {children}
    </Text>
    </Fit>
  );
}

const emojiStyle = {
  /* Emoji Sizing */
  fontSize: "inherit",
  height: "3ex",
  width: "3.1ex",
  minHeight: "20px",
  minWidth: "20px",

  /* Inline alignment adjust the margins  */
  display: "inline-block",
  margin: "-.2ex .15em .2ex",
  lineHeight: "normal",
  verticalAlign: "middle"
};

function emoji(type) {
  return <img style={emojiStyle} src={images[type]} />;
}


function Icon({ name, ...rest }) {
  return <i className={`fa fa-${name}`} aria-hidden="true" {...rest} />;
}

const theme = createTheme({
  primary: "#e10098"
});

const slideProps = { maxWidth: "80%", maxHeight: "100%" };

const slidesUrl = "http://graphql-london-web-clients.surge.sh/";
const githubUrl = "https://github.com/0xR/graphql-clients";

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
    <Heading size={4}>
    Background
    </Heading>
  </Slide>
);
const finalSlideSection = [
  <Slide {...slideProps} >
    <Image src={images.itdepends.replace("/", "")} height="700" />
  </Slide>,
  <Slide {...slideProps} >
    <Heading size={4}>
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
];

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

const plainGraphQlSection = [
  <Slide {...slideProps} >
    <Heading size={4}>
      What problems does GraphQL itself solve?
    </Heading>
    <List>
      <Appear><ListItem>Avoiding multiple server roundtrips</ListItem></Appear>
      <Appear><ListItem>Avoid overfetching</ListItem></Appear>
      <Appear><ListItem>Have a schema for cross team communication</ListItem></Appear>
    </List>
  </Slide>,
  <Slide {...slideProps} >
    <Heading size={2}>
    Demo eslint plugin plain redux
    </Heading>
  </Slide>
];


const colocationSection = [
  <Slide {...slideProps} >
    <Heading size={4}>
      Query colocation - Plain JS
    </Heading>
    <CodePane
      lang="jsx"
      source={require("!raw!../includes/plain-colocation.js")}
    />
  </Slide>,
  <Slide {...slideProps} >
    <Heading size={4}>
      Query colocation - Lokka
    </Heading>
    <CodePane
      lang="jsx"
      source={require("!raw!../includes/lokka-colocation.js")}
    />
  </Slide>
];

const stateManagementSection = [
  <Slide {...slideProps} >
    <Heading size={4} >
    Demo app
    </Heading>
  </Slide>,
  <Slide {...slideProps} >
    <Heading size={4}>
    What logic has to be written?
    </Heading>
    <List>
      <Appear><ListItem>Loading state</ListItem></Appear>
      <Appear><ListItem>Error state</ListItem></Appear>
      <Appear><ListItem>State selectors</ListItem></Appear>
      <Appear><ListItem>Cache management</ListItem></Appear>
      <Appear><ListItem>State normalization</ListItem></Appear>
    </List>
  </Slide>,
];


const apolloSection = [
  <Slide {...slideProps} >
    <Heading size={4}>
    Apollo client
    </Heading>
    <List>
      <Appear><ListItem>Manages your state</ListItem></Appear>
      <Appear><ListItem>Has implementations for Android / iOS</ListItem></Appear>
      <Appear><ListItem>Uses redux</ListItem></Appear>
      <Appear><ListItem>Works with any GraphQL backend</ListItem></Appear>
      <Appear><ListItem>Runtime query compilation or Webpack loader</ListItem></Appear>
      <Appear><ListItem>Components are unaware of Apollo wrapper</ListItem></Appear>
    </List>
  </Slide>,
  <Slide {...slideProps} >
    <Heading size={4}>
    Apollo colocation
    </Heading>
    <CodePane
      lang="jsx"
      source={require("!raw!../includes/apollo-example.js")}
    />
  </Slide>,
  <Slide {...slideProps} >
    <Heading size={4}>
    Apollo example
    </Heading>
    <CodePane
      lang="jsx"
      source={require("!raw!../includes/apollo-example-2.js")}
    />
  </Slide>,
  <Slide {...slideProps} >
    <Heading size={4} >
    Demo apollo with Redux devtools
    </Heading>
  </Slide>
];

const relaySection = [
  <Slide {...slideProps} >
    <Heading size={4}>
    Relay
    </Heading>
    <List>
      <Appear><ListItem>Relay specific GraphQL server</ListItem></Appear>
      <Appear><ListItem>Highly optimized fetching by default</ListItem></Appear>
      <Appear><ListItem>Query compilation with a Babel plugin</ListItem></Appear>
      <Appear><ListItem>Components call Relay specific API's</ListItem></Appear>
    </List>
  </Slide>,
  <Slide {...slideProps} >
    <Heading size={4}>
    Relay example
    </Heading>
    <CodePane
      lang="jsx"
      source={require("!raw!../includes/relay-example.js")}
    />
  </Slide>,
  <Slide {...slideProps} >
    <Heading size={4}>
    Relay example
    </Heading>
    <CodePane
      lang="jsx"
      source={require("!raw!../includes/relay-example-2.js")}
    />
  </Slide>,
  <Slide {...slideProps} >
    <Heading size={4}>
    Relay specific server changes
    </Heading>
    <List>
      <Appear><ListItem>Refetch any object by global id</ListItem></Appear>
      <Appear><ListItem>Cursor based pagination</ListItem></Appear>
      <Appear><ListItem>Mutations have an identifier</ListItem></Appear>
    </List>
  </Slide>,
  <Slide {...slideProps} >
    <Heading size={4}>
    Relay 2
    </Heading>
    <List>
      <Appear><ListItem>Complete rewrite</ListItem></Appear>
      <Appear><ListItem>Prefetching</ListItem></Appear>
      <Appear><ListItem>Local state management</ListItem></Appear>
      <Appear><ListItem>Custom GraphQL extension</ListItem></Appear>
      <Appear><ListItem>Streaming connection responses</ListItem></Appear>
      <Appear><ListItem>In production at Facebook at the end of the year</ListItem></Appear>
    </List>
  </Slide>,
  <Slide {...slideProps} >
    <Heading size={4} >
    Demo relay with Relay devtools
    </Heading>
  </Slide>
];

const performanceSection = [
  <Slide {...slideProps} >
    <Heading size={4}>
    Performance
    </Heading>
    <Table style={{ fontSize: "1.5rem" }}>
      <TableRow>
        <th />
        <th>Own client</th>
        <th>Lokka</th>
        <th>Apollo</th>
        <th>Relay</th>
      </TableRow>
      <TableRow>
        <td>Bundle size (minified, not gzipped)</td>
        <td>0.3k</td>
        <td>8k</td>
        <td>193k (148k without query parser)</td>
        <td>216k</td>
      </TableRow>
      <Appear>
        <TableRow>
        <td>Time to interactive (ms)</td>
        <td>1420</td>
        <td>3515,6</td>
        <td>2335,4</td>
        <td>2613</td>
        </TableRow>
      </Appear>
      <Appear>
      <TableRow>
      <td>Total bundle size</td>
      <td>208k</td>
      <td>635k?!</td>
      <td>386k</td>
      <td>409k</td>
      </TableRow>
      </Appear>
    </Table>
  </Slide>
];


const comparisonTableSection = [
  <Slide {...slideProps} bgColor="white">
    <Heading size={4} >
    Comparison state managers
    </Heading>
    <Table style={{ fontSize: "1.5rem" }}>
      <Appear>
        <TableRow>
          <TableHeaderItem />
          <TableHeaderItem>Apollo</TableHeaderItem>
          <TableHeaderItem>Relay</TableHeaderItem>
        </TableRow>
      </Appear>
      <Appear>
        <TableRow>
          <td>Dev tools</td>
          <td>{emoji("check")}</td>
          <td>{emoji("check")}</td>
        </TableRow>
      </Appear>
      <Appear>
        <TableRow>
          <td>Optimistic rendering</td>
          <td>{emoji("check")}</td>
          <td>{emoji("check")}</td>
        </TableRow>
      </Appear>
      <Appear>
        <TableRow>
          <td>Easy to replace</td>
          <td>{emoji("neutral")}</td>
          <td>{emoji("cry")}</td>
        </TableRow>
      </Appear>
      <Appear>
        <TableRow>
          <td>Works with any GraphQL server</td>
          <td>{emoji("check")}</td>
          <td>{emoji("cross")}</td>
        </TableRow>
      </Appear>
      <Appear>
        <TableRow>
          <td>Works with any frontend</td>
          <td>{emoji("check")}</td>
          <td>{emoji("cross")}</td>
        </TableRow>
      </Appear>
      <Appear>
        <TableRow>
          <td>Local state</td>
          <td>{emoji("check")}</td>
          <td>{emoji("cross")}</td>
        </TableRow>
      </Appear>
      <Appear>
        <TableRow>
          <td>Integrates with redux easily</td>
          <td>{emoji("check")}</td>
          <td>{emoji("cross")}</td>
        </TableRow>
      </Appear>
      <Appear>
        <TableRow>
          <td>Prefetching</td>
          <td>{emoji("neutral")}</td>
          <td>{emoji("cross")}Relay 2</td>
        </TableRow>
      </Appear>
      <Appear>
        <TableRow>
          <td>Query compilation</td>
          <td>{emoji("cross")} webpack loader</td>
          <td>{emoji("check")}</td>
        </TableRow>
      </Appear>
      <Appear>
        <TableRow>
          <td>Highly Optimized by default</td>
          <td>{emoji("cross")}</td>
          <td>{emoji("check")}</td>
        </TableRow>
      </Appear>
    </Table>
  </Slide>,
  <Slide {...slideProps} bgColor="white">
    <Heading size={4}>
    How complex is your App?
    </Heading>
     <Image src={images.complexity} width="100%"/>
  </Slide>,
  <Slide {...slideProps} >
    <Heading size={4}>
    What do I pick?
    </Heading>
    <List>
      <Appear><ListItem>App not really complex or needs a fast page load? Use simple client</ListItem></Appear>
      <Appear><ListItem>Have to start now? Use apollo</ListItem></Appear>
      <Appear><ListItem>Can postpone making a decision? Wait for Relay 2 and reconsider</ListItem></Appear>
    </List>
  </Slide>
];

const supportSection = [
  <Slide {...slideProps} >
    <Heading size={4}>
    Support
    </Heading>
    <List>
      <Appear><ListItem>Lokka - Kadira</ListItem></Appear>
      <Appear><ListItem>Apollo - Meteor</ListItem></Appear>
      <Appear><ListItem>Relay - Facebook</ListItem></Appear>
    </List>
  </Slide>
];

//TODO
//complexity chart

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
            ...plainGraphQlSection,
            ...colocationSection,
            ...stateManagementSection,
            ...apolloSection,
            ...relaySection,
            ...performanceSection,
            ...supportSection,
            ...comparisonTableSection,
            ...finalSlideSection
          ]}
        </Deck>
      </Spectacle>
    );
  }
}


