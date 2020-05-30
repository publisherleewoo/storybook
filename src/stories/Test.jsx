import React from 'react';
import {storiesOf} from '@storybook/react'

import RCC from '../01/RCC'

storiesOf('RCC',module).add("기본 설정",()=><RCC/>)
storiesOf('RCC',module).add("예제",()=><RCC test="hi"/>)
storiesOf('RCC',module).add("예제2",()=><RCC test="bye"/>)


 