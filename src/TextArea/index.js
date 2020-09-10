import React, { useRef, useEffect } from 'react';

const Textarea = ({ input, label, placeholder = '', isRequired, meta: { touched, error, warning } }) => {
	const elRef = useRef();

	useEffect(() => {
		const instance = M.textareaAutoResize(elRef.current);
		return () => {
			instance && instance.destroy();
		};
	});

	return (
		<div className="row">
			<div className={` ${isRequired ? 'required' : ''} input-field col s12`}>
				<label className="active">{label}</label>

				<textarea ref={elRef} className="materialize-textarea" rows="10" placeholder={placeholder} {...input} />
				{touched &&
					(error || warning) && (
						<div className="form-field-error">
							{error && <span className="field-error">{error}</span>}
							{warning && <span className="field-warn">{warning}</span>}
						</div>
					)}
			</div>
		</div>
	);
};

Textarea.defaultProps = {
	label: '',
	placeholder: '',
	isRequired: false
};

export default Textarea;
