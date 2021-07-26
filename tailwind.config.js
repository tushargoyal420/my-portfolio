module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme)=>
      ({
        'slider-img': "url('./src/components/images/bg1.jpg')"
        // sliderimg1: "url('https://images.unsplash.com/photo-1549645402-a9d655c5c344?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80')"
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}