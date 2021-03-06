// modules
import React, { useState } from 'react';
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import cx from 'classnames';
// redux
import { createProfile } from "../../../actions/profile";
// styles
import styles from './styles.module.scss';

const CreateProfile = ({ createProfile, history }) => {
    const [formData, setFormData] = useState({
        company: '',
        website: '',
        location: '',
        status: '',
        skills: '',
        githubusername: '',
        bio: '',
        twitter: '',
        facebook: '',
        linkedin: '',
        youtube: '',
        instagram: ''
    });

    const [visibilitySocialInputs, toggleVisibilitySocialInputs] = useState(false);

    const {
        company,
        website,
        location,
        status,
        skills,
        githubusername,
        bio,
        twitter,
        facebook,
        linkedin,
        youtube,
        instagram
    } = formData;

    const handleToggle = () => {
        toggleVisibilitySocialInputs(!visibilitySocialInputs)
    }

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        createProfile(formData, history);
    };

    return (
        <>
            <h1 className={styles.header}>Create Your Profile</h1>
            <p className={styles.title}>
                <i className='fas fa-user' /> Let's get some information to make your
                profile stand out
            </p>
            <small>* = required field</small>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <select name='status' value={status} onChange={handleChange}>
                        <option value='0'>* Select Professional Status</option>
                        <option value='Developer'>Developer</option>
                        <option value='Junior Developer'>Junior Developer</option>
                        <option value='Senior Developer'>Senior Developer</option>
                        <option value='Manager'>Manager</option>
                        <option value='Student or Learning'>Student or Learning</option>
                        <option value='Instructor'>Instructor or Teacher</option>
                        <option value='Intern'>Intern</option>
                        <option value='Other'>Other</option>
                    </select>
                    <small className={styles.hint}>
                        Give us an idea of where you are at in your career
                    </small>
                </div>
                <div className={styles.formGroup}>
                    <input
                        type='text'
                        placeholder='Company'
                        name='company'
                        value={company}
                        onChange={handleChange}
                    />
                    <small className={styles.hint}>
                        Could be your own company or one you work for
                    </small>
                </div>
                <div className={styles.formGroup}>
                    <input
                        type='text'
                        placeholder='Website'
                        name='website'
                        value={website}
                        onChange={handleChange}
                    />
                    <small className={styles.hint}>
                        Could be your own or a company website
                    </small>
                </div>
                <div className={styles.formGroup}>
                    <input
                        type='text'
                        placeholder='Location'
                        name='location'
                        value={location}
                        onChange={handleChange}
                    />
                    <small className={styles.hint}>
                        City & state suggested (eg. Boston, MA)
                    </small>
                </div>
                <div className={styles.formGroup}>
                    <input
                        type='text'
                        placeholder='* Skills'
                        name='skills'
                        value={skills}
                        onChange={handleChange}
                    />
                    <small className={styles.hint}>
                        Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
                    </small>
                </div>
                <div className={styles.formGroup}>
                    <input
                        type='text'
                        placeholder='Github Username'
                        name='githubusername'
                        value={githubusername}
                        onChange={handleChange}
                    />
                    <small className={styles.hint}>
                        If you want your latest repos and a Github link, include your
                        username
                    </small>
                </div>
                <div className={styles.formGroup}>
                    <textarea
                        placeholder='A short bio of yourself'
                        name='bio'
                        value={bio}
                        onChange={handleChange}
                    />
                    <small className={styles.hint}>Tell us a little about yourself</small>
                </div>

                <div className={styles.wrapper}>
                    <button
                        onClick={handleToggle}
                        type='button'
                        className={cx(styles.button, styles.backButton)}
                    >
                        Add Social Network Links
                    </button>
                    <span>Optional</span>
                </div>

                {visibilitySocialInputs && (
                    <>
                        <div className={cx(styles.formGroup, styles.socialInput)}>
                            <i className={cx('fab fa-twitter fa-2x', styles.twitter)} />
                            <input
                                type='text'
                                placeholder='Twitter URL'
                                name='twitter'
                                value={twitter}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={cx(styles.formGroup, styles.socialInput)}>
                            <i className={cx('fab fa-facebook fa-2x', styles.facebook)} />
                            <input
                                type='text'
                                placeholder='Facebook URL'
                                name='facebook'
                                value={facebook}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={cx(styles.formGroup, styles.socialInput)}>
                            <i className={cx('fab fa-youtube fa-2x', styles.youtube)} />
                            <input
                                type='text'
                                placeholder='YouTube URL'
                                name='youtube'
                                value={youtube}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={cx(styles.formGroup, styles.socialInput)}>
                            <i className={cx('fab fa-linkedin fa-2x', styles.linkedin)} />
                            <input
                                type='text'
                                placeholder='Linkedin URL'
                                name='linkedin'
                                value={linkedin}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={cx(styles.formGroup, styles.socialInput)}>
                            <i className={cx('fab fa-instagram fa-2x', styles.instagram)} />
                            <input
                                type='text'
                                placeholder='Instagram URL'
                                name='instagram'
                                value={instagram}
                                onChange={handleChange}
                            />
                        </div>
                    </>
                )}

                <input type='submit' className={cx(styles.button, styles.submitButton)} />
                <Link className={cx(styles.button, styles.backButton)} to='/dashboard'>
                    Go Back
        </Link>
            </form>
        </>
    );
};

CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
    createProfile
};

export default connect(
    null,
    mapDispatchToProps,
)(withRouter(CreateProfile));