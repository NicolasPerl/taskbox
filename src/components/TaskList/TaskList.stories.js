import React from 'react'
import { PureTaskList } from './TaskList';
import * as TaskStories from '../Tasks/Task.stories'

export default {
  title: 'TaskList',
  component: PureTaskList,
  decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
}

const Template = args => <PureTaskList {...args} />

export const Default = Template.bind({});
Default.args = {
  // Shaping the stories through args composition.
  // The data was inherited from the Default story in task.stories.js.
  tasks: [
    { ...TaskStories.Default.args.task, id: '1', title: 'Task Nic' }, // these are props
    { ...TaskStories.Default.args.task, id: '2', title: 'Task 2', state: 'TASK_PINNED' },
    { ...TaskStories.Default.args.task, id: '3', title: 'Task 3' },
    { ...TaskStories.Default.args.task, id: '4', title: 'Task 4' },
    { ...TaskStories.Default.args.task, id: '5', title: 'Task 5' },
    { ...TaskStories.Default.args.task, id: '6', title: 'Task 6' },
  ],
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Default story.
  tasks: [
    ...Default.args.tasks.slice(0, 4),
    { id: '5', title: 'Task 5 (pinned)', state: 'TASK_PINNED' },
    { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Loading story.
  ...Loading.args,
  loading: false,
};