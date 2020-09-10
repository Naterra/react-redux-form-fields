import React from 'react';
import Select from '../src/Select';
import { Field } from 'redux-form';
import ReduxForm from '../.storybook/decorators/ReduxForm';

export default {
	title: 'Select',
	component: Select,
	argTypes: {},
	decorators: [story => <ReduxForm story={story}/>],
};


const Template = args => <Field name='numbers' component={Select} {...args} >
	<option value='1'>1</option>
	<option value='2'>2</option>
	<option value='3'>3</option>
</Field>;


export const Primary = Template.bind({});
Primary.args = {
	label: 'Numbers',
};


export const Disabled = Template.bind({});
Disabled.args = {
	...Primary.args,
	disabled: true,
};




