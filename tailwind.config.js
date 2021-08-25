module.exports = {
  purge: {
    enabled: true,
    content: ['*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins', 'serif']
      },
      colors:{
        'Red': 'hsl(0, 78%, 62%)',
        'Cyan': 'hsl(180, 62%, 55%)',
        'Orange': 'hsl(34, 97%, 64%)',
        'Blue': 'hsl(212, 86%, 64%)',
        /* neutral */
        'Dark-Blue': 'hsl(234, 12%, 34%)',
        'Grayish-Blue': 'hsl(229, 6%, 66%)',
        'Light-Gray': 'hsl(0, 0%, 98%)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
