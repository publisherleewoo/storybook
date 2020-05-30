import React from 'react';
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import RCC from '../01/RCC'

storiesOf('RCC',module).add("테스트",()=><RCC/>)
.add("예제1",()=><RCC test="hi"/>)
.add("onChange예제",()=><RCC test="bye" onChange={action('onChange 이벤트 발생')}/>)


 