import React from 'react';
import Textarea from '../src/TextArea';
import ReduxForm from '../.storybook/decorators/ReduxForm';
import { Field } from 'redux-form';

export default {
	title: 'Textarea',
	component: Textarea,
	argTypes: {},
	decorators: [story => <ReduxForm story={story} />]
};

const Template = args => <Field name="numbers" component={Textarea} {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	label: 'Product Description'
};

export const ErrorMessage = Template.bind({});
ErrorMessage.args = {
	...Primary.args,
	meta: {
		touched: true,
		error: 'Error'
	}
};

export const WarningMessage = Template.bind({});
WarningMessage.args = {
	...Primary.args,
	meta: {
		touched: true,
		warning: 'Warning'
	}
};
