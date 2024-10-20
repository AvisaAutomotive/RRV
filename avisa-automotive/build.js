// build.js
const esbuild = require('esbuild');

esbuild.build({
    entryPoints: ['src/index.js'], // Your main entry point file
    bundle: true, // Bundle all dependencies into a single file
    minify: true, // Minify the output for production
    sourcemap: true, // Generate sourcemaps for easier debugging
    outfile: 'dist/bundle.js', // Output file path
    loader: {
        '.js': 'jsx', // Load JSX files correctly
        '.png': 'file', // Load image files if needed
        '.jpg': 'file',
        '.jpeg': 'file',
        '.gif': 'file',
        '.svg': 'file',
    },
    define: {
        'process.env.NODE_ENV': '"production"', // Set environment variable for React
    },
}).catch(() => process.exit(1));