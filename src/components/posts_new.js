import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {createPost} from '../actions'
import '../style/App.css'

class PostsNew extends Component {

    renderField(field) {
        const { meta: { touched, error } } = field
        const className = `form-group ${touched && error ? 'text-danger' : ''}`

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className='form-control' type='text' {...field.input} />
                <div className='text-help'>
                    {touched ? error : ''}
                </div>
            </div>
        )
    }

    onSubmit(values) {
        console.log(values)
        this.props.createPost(values, () => {
            this.props.history.push('/')
        })
    }

    render(){
        const { handleSubmit } = this.props

        return(
            <div className='form-div container'>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field name='title' label='Title' component={this.renderField} />
                    <Field name='categories' label='Categories' component={this.renderField} />
                    <Field name='content' label='Content' component={this.renderField} />
                    <Link to='/' className='float-right btn btn-danger'>Cancel</Link>
                    <button type='submit' className='mr-5 float-right btn btn-primary'>Submit</button>
                </form>
            </div>
        )
    }
}

function validate(values){
    const errors = {}
    if(!values.title){
        errors.title = 'Enter a title'
    }

    if(!values.categories){
        errors.categories = 'Enter some categories'
    }

    if(!values.content){
        errors.content = 'Enter some content'
    }

    return errors
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(connect(null, {createPost})(PostsNew))
