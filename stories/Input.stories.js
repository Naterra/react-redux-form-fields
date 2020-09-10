import React from 'react';
import Input from '../src/Input';
import { Field } from 'redux-form';
import ReduxForm from '../.storybook/decorators/ReduxForm';


export default {
	title: 'Input',
	component: Input,
	argTypes: {},
	decorators: [story => <ReduxForm story={story} />]
};

const Template = args =><Field name="numbers" component={Input} {...args} />;


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
