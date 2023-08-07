import {
  defineConfig,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';
import presetRemToPx from '@unocss/preset-rem-to-px';
import presetAttributify from '@unocss/preset-attributify';

export default defineConfig({
  theme: {
    colors: {
      dfl: '#80D1C8', // 蒂芙尼绿
    },
    boxShadow: {
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
    },
    borderRadius: {
      sm: '10px 10px 0 0',
    },
  },
  rules: [],
  shortcuts: [
    // flex样式布局
    [
      /^f-((c|s|e)(-(c|s|e|b|a))*)$/,
      ([, , g1, , g2]) => {
        let style = ``;
        const temps = [
          { k: 'c', v: 'center' },
          { k: 's', v: 'start' },
          { k: 'e', v: 'end' },
          { k: 'b', v: 'between' },
          { k: 'a', v: 'around' },
        ];
        const r1 = temps.find((i) => i.k == g1);
        style = `flex items-${r1?.v || 'center'} content-${r1?.v || 'center'}`;

        if (g2) {
          const r2 = temps.find((i) => i.k == g2);
          style += ` justify-${r2?.v || 'center'}`;
        }
        return style;
      },
    ],
  ],
  presets: [
    presetUno(),
    presetAttributify({
      /* preset options */
    }),
    presetRemToPx({
      // baseFontSize: '4'
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
