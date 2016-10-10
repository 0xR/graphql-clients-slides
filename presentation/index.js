// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
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
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

import CodeSlide from "spectacle-code-slide";
// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

import AsciinemaPlayer from "./asciinema-player.jsx";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("font-awesome/css/font-awesome.css");

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

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

const MyListItem = (props) => <ListItem textSize="2rem" {...props} />;
const theme = createTheme({
  primary: "#f9c300",
  secondary: "black",
  tertiary: "black",
  quartenary: "white"
}, {
  primary: "Open Sans Condensed",
  secondary: "PressStart2P",
  tertiary: "Source Code Pro for Powerline",
});

const slideProps = { maxWidth: "100%", maxHeight: "100%" };

// Sections
const talkBackgroundSection = [
  <Slide {...slideProps} >
    <Heading size={3} fit>
      About this talk
    </Heading>
    <Layout style={{ alignItems: "center" }}>
    <Fill style={{ flex: 2 }}>
      <Appear><Image src="../assets/twitter-program-online.png" /></Appear>
      <Appear><Image src="../assets/twitter-switching-jest.png" /></Appear>
    </Fill>
    <Fill style={{ flex: 3 }}>
    <Appear><Text textSize="2rem" >What about chai and its plugins?</Text></Appear>
    <Appear><Text textSize="2rem">What about css modules?</Text></Appear>
    <Appear><Text textSize="2rem">What about webpack-inject-loader / proxyquire?</Text></Appear>
    </Fill>
    </Layout>
  </Slide>,
  <Slide {...slideProps} >
    <Heading size={3} fit>
      About this talk
    </Heading>
    <Layout style={{ alignItems: "center" }}>
    <Fill>
      <Image src="../assets/github-jest-pr.png" />
      <Image src="../assets/jest-blog-chai.png" />
    </Fill>
    <Fill>
      <Appear>
      <div>
        <Image src="../assets/github-usejest.png" />
        <Image src="../assets/test-passed.png" />
      </div>
      </Appear>
      <Appear><Image src="../assets/twitter-pivot.png" /></Appear>
    </Fill>
    </Layout>
  </Slide>
];

const migrateExpectSection = [
  <Slide {...slideProps} >
    <Heading size={3} fit>
      Alias jasmine and chai
    </Heading>
    <CodePane
      lang="jsx"
      source={require("!raw!../includes/alias-jasmine.js")}
      textSize="20pt"
    />
  </Slide>,
  <Slide {...slideProps} >
    <Heading size={3} fit>
    Combine jasmine and chai - example
    </Heading>
    <CodePane
      lang="jsx"
      source={require("!raw!../includes/combined-expect-example.js")}
    />
  </Slide>,
  <Slide {...slideProps} >
    <Heading size={3} fit>
    Combine jasmine and chai
    </Heading>
    <CodePane
      lang="jsx"
      source={require("!raw!../includes/combine-jasmine-chai.js")}
      textSize="0.7rem"
    />
  </Slide>
];

const cssModulesSection = [
  <Slide {...slideProps} >
    <Heading size={3} fit>
      Ensure CSS modules still work
    </Heading>
    <CodePane
      lang="jsx"
      source={require("!raw!../includes/css-modules-preprocessor.js")}
    />
  </Slide>,
  <Slide {...slideProps} >
    <Heading size={3} fit>
      Snapshots with CSS modules
    </Heading>
    <Layout>
      <Fill >
        <CodePane
          lang="jsx"
          source={require("!raw!../includes/App.css")}
          textSize="0.7rem"
          style={{ marginBottom: "25px" }}
        />
        <CodePane
          lang="jsx"
          source={require("!raw!../includes/App.jsx")}
          textSize="0.7rem"
        />
      </Fill>
      <Fill style={{maxWidth: "25px"}}>
      &nbsp;
      </Fill>
      <Fill>
        <CodePane
          lang="jsx"
          source={require("!raw!../includes/App.snap.js")}
          textSize="0.7rem"
        />
      </Fill>
    </Layout>
  </Slide>
];

const injectLoaderSection = [
  <Slide {...slideProps} >
    <Heading size={3} fit >
    Inject loader compatibility
    </Heading>
    <CodePane
      lang="jsx"
      source={require("!raw!../includes/inject-loader-compatibility-implementation.js")}
      textSize="0.7rem"
    />
  </Slide>,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("!raw!../includes/inject-loader-compatibility-implementation.js")}
    ranges={[
      { loc: [0, 270], title: "injectLoaderCompatibility" },
      { loc: [3, 5], title: "Reset the modules first" },
      { loc: [6, 7], title: "Take the files to inject" },
      { loc: [8, 16], title: "Iterate over the those" },
      { loc: [13, 15], title: "Inject the mock using Jest" },
      { loc: [18, 19], title: "Return the module" },
      { loc: [21, 22], title: "Expose as a global" },
    ]}
    textSize="15pt"
  />,
  <Slide {...slideProps} >
    <Heading size={3} fit >
    Webpack inject loader / proxyquire
    </Heading>
    <CodePane
      lang="jsx"
      source={require("!raw!../includes/inject-loader.js")}
    />
  </Slide>
];

const supertestSection = [
  <Slide {...slideProps} >
    <Heading size={3} fit>
    Supertest
    </Heading>
    <CodePane
      lang="jsx"
      source={require("!raw!../includes/supertest.js")}
    />
  </Slide>,
  <Slide {...slideProps} >
    <Heading size={3} fit>
    Supertest with Promises
    </Heading>
    <CodePane
      lang="jsx"
      source={require("!raw!../includes/supertest-as-promised.js")}
    />
  </Slide>
];

const titleSlide = (
  <Slide {...slideProps} >
    <Heading size={1} fit>
      Snapshot tests
    </Heading>
    <Heading size={2} fit>
      with Mocha in Jest
    </Heading>
    <Layout style={{ justifyContent: "space-between" }}>
    <TitleElement><Icon name="user" /> Ruben Oostinga</TitleElement>
    <TitleElement><Icon name="twitter" /> @RubenOostinga</TitleElement>
    <TitleElement><Icon name="github" /> https://github.com/0xR</TitleElement>
    <TitleElement><Icon name="building" /> Xebia</TitleElement>
    </Layout>
  </Slide>
);

const contentSlide = (
  <Slide {...slideProps} >
    <Heading size={3} >
      Contents
    </Heading>
    <List bold fontSize="1rem">
      <MyListItem>What is snapshot testing</MyListItem>
      <MyListItem>Migrating to Jest</MyListItem>
        <List margin="0 0 0 3rem">
          <MyListItem>Porting over expect</MyListItem>
          <MyListItem>CSS modules</MyListItem>
          <MyListItem>Webpack inject loader / proxyquire</MyListItem>
          <MyListItem>Async</MyListItem>
          <MyListItem>Failing tests on React warning</MyListItem>
        </List>
    </List>
  </Slide>
);

const snapshotTestingSection = [
  <Slide {...slideProps} >
    <Heading size={3} fit>
      What is snapshot testing
    </Heading>
  </Slide>
];

const reactWarningsSection = [
  <Slide {...slideProps} >
    <Heading size={3} fit>
    Fail test on React warning
    </Heading>
    <CodePane
      lang="jsx"
      source={require("!raw!../includes/make-react-warnings-errors.js")}
    />
  </Slide>
];

const finalSlide = (
  <Slide {...slideProps} >
    <Heading size={3} fit>
    The End
    </Heading>
    <Text>
      Code:&nbsp;
      <Link href="https://github.com/0xR/snapshot-experiments/pull/1" >https://github.com/0xR/snapshot-experiments/pull/1</Link>
    </Text>
    <Text>Link to slides will be posted on <Icon name="twitter" /> @RubenOostinga</Text>
  </Slide>
);

// Should be a proper component to ensure HMR works
export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck>
          {[
            titleSlide,
            ...talkBackgroundSection,
            contentSlide,
            ...snapshotTestingSection,
            ...migrateExpectSection,
            ...cssModulesSection,
            ...injectLoaderSection,
            ...supertestSection,
            ...reactWarningsSection,
            finalSlide,
          ]}
        </Deck>
      </Spectacle>
    );
  }
}

/* what is snapshot testing
 * what problem does it solve
 * Conferencetalk Driven development, not gonna fall for free tool ;)
 * twitter screenshots
 * Christoph worked on it for over a year, some months
 * chai-jest-snapshot
 * disadvantage: no way to hook into the CLI, doesn"t clean up snapshots
 * migrating:
 * combining chai / jest
 * inject loader compatibility layer
 * proptype warnings because of resetModules
 * pro tip: make react proptype warning fail a test
 *
 * disadvantage: slow for integration, increade default timeout, cache sometimes confusing
 * only error: user error
 * pros: nice console output, DX: console.log, watch, rerun failed tests first, nice diff when test fails, buffered console, mocks that work, coverage of not included files
 */

