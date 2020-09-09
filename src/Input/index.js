import React from 'react';
import '../assets/styles.css';

const Input = ({ input, type, label = '', preLabel, placeholder = '', required, disabled = false, meta: { touched, error, warning } }) => (
	<div className={`input-field ${required ? 'required' : ''}`}>
		{preLabel && <span style={{}}>{preLabel || ''}</span>}

		<input {...input} type={type} placeholder={placeholder} disabled={disabled} autoComplete="off" />
		<label className="active" htmlFor={input.name}>
			{label}
		</label>

		{touched &&
			(error || warning) && (
				<div className="form-field-error">
					{error && <span className="field-error">{error}</span>}
					{warning && <span className="field-warn">{warning}</span>}
				</div>
			)}
	</div>
);

Input.defaultProps = {
	input: {},
	type: 'text',
	label: '',
	placeholder: '',
	required: false,
	disabled: false,
	meta: {}
};

export default Input;
