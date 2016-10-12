import React from "react";

// Import Spectacle Core tags
import {
  Appear,
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

import CodeSlide from "spectacle-code-slide";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import AsciinemaPlayer from "./asciinema-player.jsx";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("font-awesome/css/font-awesome.css");

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
      <Appear><Text>@cpojer: What do you think about switching to Jest?</Text></Appear>
    </Fill>
    <Fill style={{ flex: 3 }}>
    <Appear><Text textSize="2rem" >What about chai and its plugins?</Text></Appear>
    <Appear><Text textSize="2rem">What about css modules?</Text></Appear>
    <Appear><Text textSize="2rem">What about webpack-inject-loader / proxyquire?</Text></Appear>
    </Fill>
    </Layout>
  </Slide>,
  <Slide {...slideProps} >
    <Appear><Text>Started a PoC</Text></Appear>
    <Appear><Text fit>Merged PR in Jest to allow chai to be <code>global.expect</code></Text></Appear>
    <Appear><Text fit>Migrated 683 tests in ~40 hours</Text></Appear>
  </Slide>,
  <Slide {...slideProps} >
    <Image src="../assets/twitter-pivot.png" width="100%"/>
  </Slide>,
];

const lessonsLearnedMigrationSection = [
  <Slide {...slideProps} >
    <Heading size={3} fit>Lessons learned</Heading>
  </Slide>,
  <Slide {...slideProps} >
    <Heading size={3} fit>Downsides of migration to Jest</Heading>
    <List>
      <Appear><ListItem>Slow (> 10s for a suite) when you:</ListItem></Appear>
      <Appear><List margin="0 0 0 3rem">
        <ListItem>resetModules every test</ListItem>
        <ListItem>Start express every test</ListItem>
        <ListItem>Run coverage</ListItem>
        <ListItem>Don't use the cache</ListItem>
      </List></Appear>
      <Appear><ListItem>Cache sometimes confusing</ListItem></Appear>
      <Appear><ListItem>Migrating existing mock injectors is difficult</ListItem></Appear>
    </List>
  </Slide>,
  <Slide {...slideProps} >
    <Heading size={3} fit>
      Upsides of the migration
    </Heading>
    <List>
      <Appear><ListItem>Snapshot tests with CLI integration and cleanup</ListItem></Appear>
      <Appear><ListItem>Solved the issues we had with mocha-webpack</ListItem></Appear>
      <Appear><ListItem>Lots of little things which improve DX</ListItem></Appear>
    </List>
  </Slide>
];

const migrateExpectSection = [
  <Slide {...slideProps} >
    <Heading size={3} fit>
      Migrating to Jest
    </Heading>
  </Slide>,
  <Slide {...slideProps} >
    <Heading size={3} fit>
      Alias jasmine and chai
    </Heading>
    <CodePane
      lang="jsx"
      source={require("!raw!../includes/alias-jasmine.js")}
      textSize="2.3rem"
    />
  </Slide>,
  <Slide {...slideProps} >
    <Heading size={3} fit>
    Combine jasmine and chai - example
    </Heading>
    <CodePane
      lang="jsx"
      source={require("!raw!../includes/combined-expect-example.js")}
      textSize="1.5rem"
    />
  </Slide>,
  <Slide {...slideProps} >
    <Heading size={3} fit>
    Combine jasmine and chai
    </Heading>
    <CodePane
      lang="jsx"
      source={require("!raw!../includes/combine-jasmine-chai.js")}
      textSize="1.3rem"
    />
  </Slide>,
  <Slide {...slideProps} >
    <Heading size={3} fit>
    Combine jasmine and chai
    </Heading>
    <CodePane
      lang="jsx"
      source={require("!raw!../includes/combine-jasmine-chai-2.js")}
      textSize="1.5rem"
    />
  </Slide>
];

const cssModulesSection = [
  <Slide {...slideProps}>
    <Heading size={3} fit>
      Snapshots with CSS modules
    </Heading>
  </Slide>,
  <Slide {...slideProps} >
    <Heading size={3} fit>
      The solution in the documentation
    </Heading>
    <List>
      <Appear><ListItem>Replaces the CSS import with an ES2015 Proxy</ListItem></Appear>
      <Appear><ListItem>Ensures this works for all classes: <CodePane textSize="2.5rem">styles.foobar === 'foobar'</CodePane></ListItem></Appear>
      <Appear><ListItem>Doesn't parse the CSS file to see if the class exists</ListItem></Appear>
    </List>
  </Slide>,
  <Slide {...slideProps}>
    <Heading size={3} fit>
      Snapshots with CSS modules
    </Heading>
    <CodePane
      lang="jsx"
      source={require("!raw!../includes/App.css")}
      textSize="1.5rem"
      style={{ margin: "0 0 25px 0" }}
    />
  </Slide>,
  <Slide {...slideProps}>
    <Heading size={3} fit>
      Snapshots with CSS modules
    </Heading>
    <CodePane
      lang="jsx"
      source={require("!raw!../includes/App.jsx")}
      textSize="1rem"
    />
  </Slide>,
  <Slide {...slideProps}>
    <Heading size={3} fit>
      Snapshots with CSS modules
    </Heading>
    <CodePane
      lang="jsx"
      source={require("!raw!../includes/App.snap.js")}
      textSize="1rem"
    />
  </Slide>,
  <Slide {...slideProps}>
    <Heading size={3} fit>
      Future idea: parsing CSS module imports
    </Heading>
    <CodePane
      lang="jsx"
      source={require("!raw!../includes/App-webpack.snap.js")}
      textSize="1rem"
    />
  </Slide>,
];

const injectLoaderSection = [
  <Slide {...slideProps} >
    <Heading size={3} fit >
    Webpack inject loader / proxyquire
    </Heading>
  </Slide>,
  <Slide {...slideProps} >
    <Heading size={3} fit >
    Webpack inject loader / proxyquire
    </Heading>
    <CodePane
      lang="jsx"
      source={require("!raw!../includes/inject-loader.js")}
      textSize="1.5rem"
    />
  </Slide>,
  <Slide {...slideProps} >
    <Heading size={3} fit >
    Use a wrapper to make it jest compatible
    </Heading>
    <CodePane
      lang="jsx"
      source={require("!raw!../includes/inject-loader-compatibility.js")}
      textSize="1.4rem"
    />
  </Slide>,
  <Slide {...slideProps} >
    <Heading size={3} fit >
    Use a VIM macro to automate migration
    </Heading>
    <AsciinemaPlayer src="assets/inject-loader-compatibility-macro.json" autoplay fontSize="big"/>
  </Slide>,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("!raw!../includes/inject-loader-compatibility-implementation.js")}
    ranges={[
      { loc: [0, 270], title: "injectLoaderCompatibility" },
      { loc: [3, 5], title: "Reset the modules first" },
      { loc: [6, 7], title: "Take the files to inject" },
      { loc: [8, 16], title: "Iterate over those" },
      { loc: [13, 15], title: "Inject the mock using Jest" },
      { loc: [18, 19], title: "Return the module" },
      { loc: [21, 22], title: "Expose as a global" },
    ]}
    {...{ maxWidth: '100%' }}
    textSize="1.3rem"
  />,
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
    <Layout style={{ justifyContent: "space-between", margin: "0 0 25px 0" }}>
    <TitleElement><Icon name="user" /> Ruben Oostinga</TitleElement>
    <TitleElement><Icon name="twitter" /> @RubenOostinga</TitleElement>
    <TitleElement><Icon name="github" /> https://github.com/0xR</TitleElement>
    <TitleElement><Icon name="building" /> Xebia</TitleElement>
    </Layout>
    <Text textAlign="right" textSize="1.5rem"><Link href="http://reactnl-2016-jest.surge.sh/">http://reactnl-2016-jest.surge.sh/</Link></Text>
  </Slide>
);

const contentSlide = (
  <Slide {...slideProps} >
    <Heading size={3} >
      Contents
    </Heading>
    <List>
      <Appear><ListItem>What is snapshot testing</ListItem></Appear>
      <Appear><ListItem>Migrating to Jest</ListItem></Appear>
      <Appear><ListItem>Lessons learned</ListItem></Appear>
    </List>
  </Slide>
);

const snapshotTestingSection = [
  <Slide {...slideProps} >
    <Heading size={3} fit>
      What is snapshot testing
    </Heading>
    <AsciinemaPlayer src="assets/snapshot-testing.json" autoplay fontSize="big"/>
  </Slide>,
  <Slide {...slideProps} >
    <Heading size={3} fit>What problem does snapshot testing solve?</Heading>
    <List>
      <Appear><ListItem>You want to assert everything, but not maintain all assertions</ListItem></Appear>
      <Appear><ListItem>Makes testing easy, so no excuse for no tests</ListItem></Appear>
      <Appear><ListItem>Find unexpected regressions easily</ListItem></Appear>
      <Appear><ListItem>Record of the render output</ListItem></Appear>
    </List>
  </Slide>,
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
    <Text>
      Slides:&nbsp;
      <Link href="http://reactnl-2016-jest.surge.sh/">http://reactnl-2016-jest.surge.sh/</Link></Text>
    <Text>For the upcoming blogpost, follow <Icon name="twitter" /> @RubenOostinga</Text>
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
            ...lessonsLearnedMigrationSection,
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

