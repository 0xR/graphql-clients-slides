class Posts extends Component {
  constructor(props) {
    super();
    const onReadyStateChange = ({ done }) => {
      this.setState({ loading: !done });
    }

    this.onIncrement = () => this.props.relay.setVariables({
      offset: this.props.relay.variables.offset + pageSize
    }, onReadyStateChange);

    this.onDecrement = () => this.props.relay.setVariables({
      offset: this.props.relay.variables.offset - pageSize
    }, onReadyStateChange);

    this.state = { loading: false };
  }
  /* ... */
}
