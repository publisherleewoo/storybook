import React from 'react';
import {storiesOf} from '@storybook/react'

import Counter from '../01/Counter'

storiesOf('Counter',module).add("기본 설정",()=><Counter/>)
storiesOf('Counter',module).add("예제",()=><Counter test="hi"/>)
storiesOf('Counter',module).add("예제2",()=><Counter test="bye"/>)


 