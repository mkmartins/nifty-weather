import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {fetchWeather} from '../actions/index'

class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          term:""
        }
    }


    //setting this function as an arrow function
    //same as having the following line in the constructor function:
    //this.onInputChange = this.onInputChange.bind(this)
    //or calling onChange={()=>{this.onInputChange}} in the render function
    onInputChange = (event) => {
        this.setState({ term:event.target.value })
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.fetchWeather(this.state.term)
        this.setState({ term:"" })
    }

    render(){
        return(
            <form onSubmit={ this.onFormSubmit } className="input-group">
                <input 
                    placeholder="Input City"
                    className="form-control"
                    value={ this.state.term }
                    onChange={ this.onInputChange }/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">
                        Search
                    </button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather},dispatch)
}

export default connect(null,mapDispatchToProps)(SearchBar)