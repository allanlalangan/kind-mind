import { type Config } from "tailwindcss";

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
} satisfies Config;
