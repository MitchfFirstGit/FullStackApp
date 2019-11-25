
// modules
import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
// redux
import { deleteExperience } from '../../../../actions/profile';
// styles
import styles from '../Education/styles.module.scss';

const Experience = ({ experience, deleteExperience }) => {
    const handleDelete = ({ target }) => {
        deleteExperience(target.id)
    };

    return (
        <>
            <h2 className={styles.header}>Experience </h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Title</th>
                        <th>Years</th>
                        <th />
                    </tr>
                </thead>
                <tbody>{experience.map(exp => (
                    <tr key={exp._id}>
                        <td>{exp.company}</td>
                        <td>{exp.title}</td>
                        <td>
                            <Moment format="YYYY/MM/DD">{exp.from}</Moment> -
                            {exp.to === null ? (
                                ' Now'
                            ) : (
                                    <Moment format="YYYY/MM/DD">{exp.to}</Moment>
                                )}
                        </td>
                        <td>
                            <button className={styles.button} id={exp._id} onClick={handleDelete}>
                                Delete
                        </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
};

Experience.propTypes = {
    experience: PropTypes.array.isRequired,
    deleteExperience: PropTypes.func.isRequired
};

const mapDispatchToProps = {
    deleteExperience
};

export default connect(
    null,
    mapDispatchToProps
)(Experience);