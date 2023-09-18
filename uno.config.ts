// uno.config.ts
import {
  defineConfig,
  presetUno,
  presetIcons,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
      scale: 1,
      warn: true,
    }),
  ],
})