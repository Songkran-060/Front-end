module.exports = {
    purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: { paleviolet: '#000000' }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}