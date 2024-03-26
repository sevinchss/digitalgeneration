/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('./src/images/back.png')",
        bg1: "url('/src/images/bg1.png')",
        bg2: "url('./src/images/bg2.png')",
        bg3: "url('./src/images/bg3.png')",
        bg4: "url('./src/images/bg4.png')",
        bg5: "url('./src/images/bg5.png')",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '1rem',
        xl: '1rem',
        '2xl': '1rem',
      },
    },

    fontFamily: {
      'fobt': 'ZCOOL XiaoWei',
      'fobt2': 'oldenburg'
    },
  },
  plugins: [],
}
)
