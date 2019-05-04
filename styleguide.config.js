const path = require('path');

module.exports = {
  styleguideComponents: {
    // Wrapper: path.join(__dirname, 'src/components/settings/_styleguide.wrapper'),
  },
  components: 'src/components/**/[A-Z]*.jsx',
  template: {
    head: {
      scripts: [],
      links: [
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css?family=Montserrat:600|Open+Sans:400,700|Playfair+Display:900',
        },
        {
          rel: 'stylesheet',
          href:
            'https://unpkg.com/ionicons@4.5.5/dist/css/ionicons.min.css',
        },
      ],
    },
  },
};
