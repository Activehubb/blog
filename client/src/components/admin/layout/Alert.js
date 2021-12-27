import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) =>
	alerts !== null &&
	alerts.length > 0 &&
	alerts.map((alert) => (
		<div
			key={alert.id}
			className={`bg-${alert.alertType}-100 border-l-4 border-${alert.alertType}-500 text-${alert.alertType}-700 p-4 shadow rounded my-2`}
			
		>
			<p className='text-base font-normal capitalize'>{alert.msg}</p>
		</div>
	));

Alert.propTypes = {
	alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
	alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
