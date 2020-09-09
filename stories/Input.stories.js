import React from 'react';
import Input from '../src/Input';

export default {
	title: 'Forms/Input',
	component: Input,
	argTypes: {}
};

const Template = args => <Input {...args} />;


export const Primary = Template.bind({});
Primary.args = {
	label: 'Full Name',
	placeholder: 'Jon Snow'
};

export const Disabled = Template.bind({});
Disabled.args = {
	...Primary.args,
    disabled: true,
};

export const Required = Template.bind({});
Required.args = {
	...Primary.args,
	required: true,
};

export const PasswordField = Template.bind({});
PasswordField.args = {
	...Primary.args,
	label: 'Password',
	type: 'password',
};

export const EmailField = Template.bind({});
EmailField.args = {
	...Primary.args,
	label: 'E-Mail',
	type: 'email',
};

export const ErrorMessage = Template.bind({});
ErrorMessage.args = {
	...Primary.args,
	meta: {
		touched:true,
		error:'Field cannot be empty'
	},
};

export const WarningMessage = Template.bind({});
WarningMessage.args = {
	...Primary.args,
	meta: {
		touched:true,
		warning:'Too short'
	},
};
