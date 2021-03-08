import React from 'react'

class SearchBar extends React.Component {
    state = { term: '' }

    handleOnChange = (event) => {
        this.setState({ term: event.target.value })
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmitForm(this.state.term)
    }

    render() {
        return (
            <div className="search-bar ui segment" >
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input className="top-bar" type="text"
                            value={this.state.term}
                            placeholder = "Search"
                            onChange={this.handleOnChange}></input>
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchBar