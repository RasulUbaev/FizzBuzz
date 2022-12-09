tailwind.config = {
    theme: {
        extend: {
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '2rem',
                    lg: '3rem',
                    md: "4rem",
                    xl: '4rem',
                    '2xl': '5rem',
                    '3xl': '6rem',
                },
                screens: {
                    'xsm': "370px",
                    'sm': "504px",
                    'md': "688px",
                    'lg': "864px",
                    'xl': "1088px",
                    "2xl": "1260px",
                    "3xl": "1392px"
                }
            },

            backgroundImage: {
                'bg-round': "url('./image/55.jpg')",
              },
        }
    }
}