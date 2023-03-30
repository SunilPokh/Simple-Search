
import React from 'react';
import data from '../../../server/data';
import SearchResult from "./SearchResult";

class Menu extends React.Component {
    constructor() {
        super();
        this.state = {
            showingSearch: false,
            displaySuggestion: false,
            suggestedList: []
        };
    }

    showSearchContainer(e) {
        e.preventDefault();
        this.setState({
            showingSearch: !this.state.showingSearch
        });
    }
    onSearch(e) {
        if (e.target.value !== '') {
            this.setState({
                displaySuggestion: true
            })
        } else {
            this.setState({
                displaySuggestion: false
            })
        }
        const getProductName = data?.map(d => d);
        for (let i = 0; i < getProductName.length; i++) {
            const search = searchQuery => getProductName.filter(s => s.name.toLowerCase().includes(searchQuery));
            if (search(e.target.value)) {
                this.setState({
                    suggestedList: search(e.target.value)
                });
            }
        }
    }
    render() {
        return (
            <header className="menu">
                <div className="menu-container">
                    <div className="menu-holder">
                        <h1>Search Engine</h1>
                        <nav>
                            <a href="#" className="nav-item">HOME</a>
                            <a href="#" className="nav-item">PRODUCTS</a>
                            <a href="#" className="nav-item">STORES</a>
                            <a href="#" className="nav-item">ATTRACTIONS</a>

                            <a href="#" onClick={(e) => this.showSearchContainer(e)}>
                                <i className="material-icons search">search</i>
                            </a>
                        </nav>
                    </div>
                </div>
                <div className={(this.state.showingSearch ? "showing " : "") + "search-container"}>
                    <input type="text" onChange={(e) => this.onSearch(e)} />
                    <a href="#" onClick={(e) => this.showSearchContainer(e)}>
                        <i className="material-icons close">close</i>
                    </a>
                    {this.state.displaySuggestion &&
                        <SearchResult suggestedList={this.state.suggestedList} />
                    }
                </div>
            </header>
        );
    }


}

module.exports = Menu;
