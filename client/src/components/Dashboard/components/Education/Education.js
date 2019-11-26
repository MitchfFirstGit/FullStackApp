// modules
import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
// redux
import { deleteEducation } from '../../../../actions/profile';
// styles
import styles from './styles.module.scss';

const Education = ({ education, deleteEducation }) => {
    const handleDelete = ({ target }) => {
        deleteEducation(target.id)
    };

    return (
        <>
            <h2 className={styles.header}>Education</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>School</th>
                        <th>Degree</th>
                        <th>Years</th>
                        <th />
                    </tr>
                </thead>
                <tbody>{education.map(edu => (
                    <tr key={edu._id}>
                        <td>{edu.school}</td>
                        <td>{edu.degree}</td>
                        <td>
                            <Moment format="YYYY/MM/DD">{edu.from}</Moment> -
                        {edu.to === null ? (
                                ' Now'
                            ) : (
                                    <Moment format="YYYY/MM/DD">{edu.to}</Moment>
                                )}
                        </td>
                        <td>
                            <button className={styles.button} id={edu._id} onClick={handleDelete}>
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

Education.propTypes = {
    education: PropTypes.array.isRequired,
    deleteEducation: PropTypes.func.isRequired
};

const mapDispatchToProps = {
    deleteEducation
};

export default connect(
    null,
    mapDispatchToProps
)(Education);