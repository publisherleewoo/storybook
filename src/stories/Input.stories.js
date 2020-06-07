import React from "react"
import { storiesOf } from "@storybook/react"
import {action} from '@storybook/addon-actions'

import Input from "../03/Input"

storiesOf("Input", module)
  .addWithJSX("기본설정", () => <Input name="name"/>)
  .addWithJSX("label", () => <Input name="name" label={"이름"} />)
  .addWithJSX("onChange", () => <Input name="name" onChange={action('onChange 이벤트 발생')} />)