import React from 'react';

import Task from './Task';

export default {
  component: Task, // the component itself
  title: 'Task', // must be unique accross storybook
};

/**As we have multiple permutations of our component, it's convenient to assign it to a Template variable. 
 * Introducing this pattern in your stories will reduce the amount of code you need to write and maintain. 
 * Arguments or args for short, allow us to live edit our components with the controls addon without restarting Storybook. Once an args value changes so does the component.
 */
const Template = args => <Task {...args} />;

/** think of stories as permutations of a component
 * you can have as many stories per component as you need
 */
export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};