// modules
import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// redux
import { addExperience } from '../../../actions/profile';

const AddExperience = ({ addExperience, history }) => {
    const [formData, setFormData] = useState({
        company: '',
        title: '',
        location: '',
        from: '',
        to: '',
        current: false,
        description: ''
    });

    const [fieldToDisabled, setFieldToDisabled] = useState(false);

    const { company, title, location, from, to, current, description } = formData;

    const handleChange = e => {
        if (e.target.name === 'current') {
            setFormData({ ...formData, current: !current });
            setFieldToDisabled(!fieldToDisabled);
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        addExperience(formData, history);
    };

    return (
        <>
            <h1 className='large text-primary'>Add An Experience</h1>
            <p className='lead'>
                <i className='fas fa-code-branch' /> Add any developer/programming positions
                that you have had in the past
            </p>
            <small>* = required field</small>
            <form
                className='form'
                onSubmit={handleSubmit}
            >
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='* Job Title'
                        name='title'
                        value={title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='* Company'
                        name='company'
                        value={company}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Location'
                        name='location'
                        value={location}
                        onChange={handleChange}
                    />
                </div>
                <div className='form-group'>
                    <h4>From Date</h4>
                    <input
                        type='date'
                        name='from'
                        value={from}
                        onChange={handleChange}
                    />
                </div>
                <div className='form-group'>
                    <p>
                        <input
                            type='checkbox'
                            name='current'
                            checked={current}
                            value={current}
                            onChange={handleChange}
                        />
                        Current Job
                    </p>
                </div>
                <div className='form-group'>
                    <h4>To Date</h4>
                    <input
                        type='date'
                        name='to'
                        value={to}
                        onChange={handleChange}
                        disabled={fieldToDisabled ? 'disabled' : ''}
                    />
                </div>
                <div className='form-group'>
                    <textarea
                        name='description'
                        cols='30'
                        rows='5'
                        placeholder='Job Description'
                        value={description}
                        onChange={handleChange}
                    />
                </div>
                <input type='submit' className='btn btn-primary my-1' />
                <Link className='btn btn-light my-1' to='/dashboard'>
                    Go Back
                </Link>
            </form>
        </>
    );
};

AddExperience.propTypes = {
    addExperience: PropTypes.func.isRequired
};

const mapDispatchToProps = {
    addExperience
}

export default connect(
    null,
    mapDispatchToProps
)(withRouter(AddExperience));