const esbuild = require('esbuild')

esbuild
   .build({
      entryPoints: ['src/server.ts'],
      outfile: 'dist/index.js',
      bundle: true,
      platform: 'node',
      sourcemap: true,
      minify: true,
      loader: {
         '.tsx': 'tsx',
         '.ts': 'ts',
      },
   })
   .catch(() => process.exit(1))
