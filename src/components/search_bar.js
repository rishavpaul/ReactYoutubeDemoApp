import React, {Component} from "react";


class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { search_term: '' };
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.search_term}
                    onChange={event => this.onInputChange(event.target.value)}
                />

            </div>
        );
    }

    onInputChange(search_term) {
        this.setState({search_term: search_term});
        this.props.onSearchTermChange(search_term)
    }
}

export default SearchBar;