import React from 'react';
import Switch from '../src/Switch';
import { Field } from 'redux-form';
import ReduxForm from '../.storybook/decorators/ReduxForm';

export default {
	title: 'Switch',
	component: Switch,
	argTypes: {},
	decorators: [story => <ReduxForm story={story} />]
};

const Template = args => <Field name="switch" component={Switch} {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	label: 'Subscribe'
};

export const Disabled = Template.bind({});
Disabled.args = {
	...Primary.args,
	disabled: true
};
