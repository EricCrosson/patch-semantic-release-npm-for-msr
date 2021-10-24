#!/usr/bin/env node

/**
 * patch-semantic-release-npm-for-msr
 * Patch @semantic-release/npm to unblock me on issue 414
 */

import { command, run, option } from 'cmd-ts'
import { File } from 'cmd-ts/dist/cjs/batteries/fs'

import { patchSemanticReleaseNpmPackage } from './patch-semantic-release-npm-package'

const cmd = command({
  name: 'patch-semantic-release-npm-for-msr',
  description: 'Patch @semantic-release/npm to unblock me on issue 414',
  args: {
    file: option({
      long: 'file',
      type: File,
    }),
  },
  handler: patchSemanticReleaseNpmPackage,
})

const main = async () => run(cmd, process.argv.slice(2))

main()

// Local Variables:
// mode: typescript
// End:
