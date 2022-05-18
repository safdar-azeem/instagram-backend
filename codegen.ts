import type { CodegenConfig } from '@graphql-codegen/cli'
import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files'

const config = {
   overwrite: true,
   schema: './src/schema/**/*.graphql',
   generates: {
      './src/types': {
         ...defineConfig(),
         presetConfig: {
            resolverGeneration: 'disabled',
            mode: 'modules',
            typeDefsFileMode: 'modules',
            typeDefsFilePath: '../types/typeDefs.generated.ts',
         },
      },
   },
   hooks: {
      afterAllFileWrite: ['yarn prettier --write'],
   },
} satisfies CodegenConfig

export default config
