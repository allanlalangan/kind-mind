import { type Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        primary: colors.indigo,
        secondary: colors.orange,
        accent: colors.sky,
        base: colors.gray,
        neutral: colors.slate,
      }),
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, config }) {
      // Add your custom styles here
      const notchClasses = {
        ".safe-top": {
          paddingTop: "env(safe-area-inset-top)",
        },
        ".safe-left": {
          paddingLeft: "env(safe-area-inset-left)",
        },
        ".safe-right": {
          paddingRight: "env(safe-area-inset-right)",
        },
        ".safe-bottom": {
          paddingBottom: "env(safe-area-inset-bottom)",
        },
      };

      addUtilities(notchClasses);
    }),
  ],
} satisfies Config;
