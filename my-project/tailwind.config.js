import withMT from "@material-tailwind/react/utils/withMT"

export default {
  content:[
    "./src/**/*.{html,js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ['Open Sans', 'sans-serif'],
        healing: ['Healing', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        primary: '#ff0000',
        secondary: '#00ff00',
      },
    },
  },
  plugins: [],
}
