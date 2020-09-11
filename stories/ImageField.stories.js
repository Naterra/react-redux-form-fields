import React from 'react';
import ImageField from '../src/ImageField';
import { Field } from 'redux-form';
import ReduxForm from '../.storybook/decorators/ReduxForm';

export default {
	title: 'ImageField',
	component: ImageField,
	argTypes: {},
	decorators: [story => <ReduxForm story={story} />]
};

const Template = args => <Field name="File" component={ImageField} {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	label: 'File',
	name: 'file'
};

export const DisplayFile = Template.bind({});
DisplayFile.args = {
	...Primary.args,
	formValues: {
		file: 'https://www.nymetroparents.com/columnpic2/manhattan-skyline-sunset.jpg'
	}
};
