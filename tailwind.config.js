module.exports = {
    purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: { darkviolet: '#7A04DD' }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}