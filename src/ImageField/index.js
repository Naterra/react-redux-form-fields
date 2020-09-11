import React from 'react';

const ImageField = ({ input, name, label = 'File', formValues, deleteFileCallback }) => {
	const { value, ...inputProps } = input;
	const initialValue = (formValues && formValues[name]) || false;
	
	const handleChange = e => {
		const file = e.target.files[0];
		input.onChange(file);
	};

	if (initialValue) {
		return (
			<div className="col s12">
				<label style={{ float: 'left', display: 'block', width: '100%', marginBottom: '10px' }}>{label}</label>
				<img src={initialValue} style={{ width: '200px' }} />
				<i className="material-icons red-text" onClick={e => (deleteFileCallback ? deleteFileCallback(name) : false)}>
					delete_forever
				</i>
			</div>
		);
	} else {
		return <UploadInterface label={label} inputProps={inputProps} handleChange={handleChange} />;
	}
};

ImageField.defaultProps = {
	label: 'File',
	name: 'file',
	deleteFileCallback: null
};

const UploadInterface = ({ label, inputProps, handleChange }) => {
	return (
		<div className="file-field input-field">
			<div className="btn">
				<span>{label}</span>
				<input {...inputProps} type="file" onChange={e => handleChange(e)} />
			</div>
			<div className="file-path-wrapper">
				<input className="file-path validate" type="text" />
			</div>
		</div>
	);
};

export default ImageField;
