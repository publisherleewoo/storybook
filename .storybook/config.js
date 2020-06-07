import { configure, setAddon } from "@storybook/react"
import JSXAddon from 'storybook-addon-jsx'

function loadStories() {
   configure(require.context("../src/stories", true, /.js$|.jsx$/), module)
}

setAddon(JSXAddon)
configure(loadStories, module)