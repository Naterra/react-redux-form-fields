import React, { Fragment, useState, useRef, useEffect } from 'react';

const Select = ({input, id = 1, label, required, options, disabled, onChange, children,  meta: { touched, error, warning }  }) => {
	const elRef = useRef();

	const _options = options
		? options
		: {
				dropdownOptions: { coverTrigger: false}
			};

	useEffect(() => {
		const instance = M.FormSelect.init(elRef.current, _options);
		return () => {
			instance && instance.destroy();
		};
	});

	const onChangeEvent = (e) => {
		input.onChange(e);
		if (onChange) onChange(e.target.value);
	};

	return (
		<div className={`input-field  ${required ? 'required' : ''}`}>
			<select
				id={id}
				ref={elRef}
				disabled={disabled}
				onChange={e => onChangeEvent(e)}
				{...input}
			>
				<option value="">---</option>
				{children}
			</select>

			<label>{label}</label>

			{  touched && (error || warning) &&  <div className="form-field-error">
				{error && <span className="field-error">{error}</span>}
				{warning && <span className="field-warn">{warning}</span>}
			</div>}
		</div>
	);
};

Select.defaultProps = {
	id: 1,
	name: '',
	label: '',
	defaultValue: false,
	options: {},
	disabled: false,
	onChange: false
};

export default Select;
