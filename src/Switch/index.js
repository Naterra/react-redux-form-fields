import React from 'react';
import './style.css';

const Switch = ({ input, label, disabled = false, onChange, children, meta: { touched, error, warning } }) => {
	return (
		<div className={`input-field`}>
			<div className="switch">
				<label className="switchLabel">{label}</label>
				<label>
					Off
					<input type="checkbox" disabled={disabled} {...input} />
					<span className="lever" />
					On
				</label>
			</div>

			{touched &&
				(error || warning) && (
					<div className="form-field-error">
						{error && <span className="field-error">{error}</span>}
						{warning && <span className="field-warn">{warning}</span>}
					</div>
				)}
		</div>
	);
};

Switch.defaultProps = {
	label: '',
	disabled: false
};

export default Switch;
