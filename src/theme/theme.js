import { extendTheme, theme as base } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  fonts:{
      heading:`Inter, ${base.fonts?.heading}`,
      body:`Inter, ${base.fonts?.body}`,
      h1:`Inter, ${base.fonts?.body}`,
      h2:`Inter, ${base.fonts?.body}`,
      p:`Inter, ${base.fonts?.body}`,
  }
});

export default theme;