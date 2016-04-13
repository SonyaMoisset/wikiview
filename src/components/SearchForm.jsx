import React from 'react';

export default class SearchForm extends React.Component {

  constructor() {
    super();
    this.state = { searchTerm: '' };
  }

  handleInputChange(e) { this.setState({ searchTerm: e.target.value }); }

  handleSubmit(e) {
    e.preventDefault();
    let searchTerm = this.state.searchTerm.trim();

    if (!searchTerm) { return; }

    this.props.onSearch(searchTerm);
    this.setState({searchTerm: ''});
  }

  render() {
    return (
      <div className='search-box-container'>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input className='search-box-text' type='text' placeholder='Search for something...' onChange={this.handleInputChange.bind(this)} value={this.state.searchTerm}/>
          <p className="random-text">
            <small>or visit a <a href="http://en.wikipedia.org/wiki/Special:Random" target="_blank"> random article</a>.</small>
          </p>
        </form>
      </div>
    );
  }
}
