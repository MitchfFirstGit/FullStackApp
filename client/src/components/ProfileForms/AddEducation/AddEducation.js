// modules
import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cx from 'classnames';
// redux
import { addEducation } from '../../../actions/profile';
// styles
import styles from './styles.module.scss';

const AddEducation = ({ addEducation, history }) => {
    const [formData, setFormData] = useState({
        school: '',
        degree: '',
        fieldofstudy: '',
        from: '',
        to: '',
        current: false,
        description: ''
    });

    const [fieldToDisabled, setFieldToDisabled] = useState(false);

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
        addEducation(formData, history);
    };

    const {
        school,
        degree,
        fieldofstudy,
        from,
        to,
        current,
        description
    } = formData;

    return (
        <>
            <h1 className={styles.header}>Add Your Education</h1>
            <p className={styles.title}>
                <i className='fas fa-code-branch' /> Add any school or bootcamp that you
                have attended
            </p>
            <small>* = required field</small>
            <form
                className={styles.form}
                onSubmit={handleSubmit}
            >
                <input
                    type='text'
                    placeholder='* School or Bootcamp'
                    name='school'
                    value={school}
                    onChange={handleChange}
                    required
                />
                <input
                    type='text'
                    placeholder='* Degree or Certificate'
                    name='degree'
                    value={degree}
                    onChange={handleChange}
                    required
                />
                <input
                    type='text'
                    placeholder='Field of Study'
                    name='fieldofstudy'
                    value={fieldofstudy}
                    onChange={handleChange}
                />
                <div className={styles.wrapper}>
                    <h4>From Date</h4>
                    <input
                        type='date'
                        name='from'
                        value={from}
                        onChange={handleChange}
                    />
                </div>
                    <label>
                        <input
                            type='checkbox'
                            name='current'
                            checked={current}
                            value={current}
                            onChange={handleChange}
                        />
                        Current School
                    </label>
                <div className={styles.wrapper}>
                    <h4>To Date</h4>
                    <input
                        type='date'
                        name='to'
                        value={to}
                        onChange={handleChange}
                        disabled={fieldToDisabled ? 'disabled' : ''}
                    />
                </div>
                    <textarea
                        name='description'
                        cols='30'
                        rows='5'
                        placeholder='Program Description'
                        value={description}
                        onChange={handleChange}
                    />
                <input type='submit' className={cx(styles.button, styles.submitButton)} />
                <Link className={cx(styles.button, styles.backButton)} to='/dashboard'>
                    Go Back
                </Link>
            </form>
        </>
    );
};

AddEducation.propTypes = {
    addEducation: PropTypes.func.isRequired
};

const mapDispatchToProps = {
    addEducation
}

export default connect(
    null,
    mapDispatchToProps
)(withRouter(AddEducation));