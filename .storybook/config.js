import {configure} from '@storybook/react'

function loadStories(){
   configure(require.context('../src/stories', true, /.js$|.jsx$/), module);
}

configure(loadStories,module)