cli 셋팅법
```
 npm install -g @storybook/cli
```
```
$ getstorybook
```
```
$ npm run storybook
```



<br/><br/><br/><br/><br/><br/>

```
npm i storybook @storybook/addon-actions @storybook/addons @storybook/react
```

```
//package.json
  "scripts": {
    "storybook": "start-storybook -p 9001 -c .storybook",
    "start": "react-scripts start"
  },

  "devDependencies": {
   "@storybook/addon-actions": "^5.2.6",
   "@storybook/addons": "^5.2.6",
   "@storybook/react": "^5.3.19",
   "storybook-addon-jsx": "^7.1.13"
  }

```

![image](https://user-images.githubusercontent.com/29581010/83318897-19254380-a274-11ea-9667-43676846293f.png)


```javascript
// ./.storybook/config.js
import { configure } from "@storybook/react"

function loadStories() {
   configure(require.context("../src/stories", true, /.js$|.jsx$/), module)
}

configure(loadStories, module)
```

```javascript
// ./.storybook/addons.js
import '@storybook/addon-actions/register'

```

```javascript
// ./src/stories/Counter.stories.js
import React from 'react';
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

//RCC 컴포넌트가 있는 상태에서
import RCC from '../01/RCC'

storiesOf('RCC',module).add("테스트",()=><RCC/>)
.add("예제1",()=><RCC test="hi"/>)
.add("onChange예제",()=><RCC test="bye" onChange={action('onChange 이벤트 발생')}/>)
```

