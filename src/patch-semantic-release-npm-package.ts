import { Project, SyntaxKind } from 'ts-morph'

export const patchSemanticReleaseNpmPackage = async ({ file }: { file: string }) => {
  const project = new Project()
  const source = project.addSourceFileAtPath(file)

  const verifyConditions = source.getFunctionOrThrow('verifyConditions')

  const [problematicClause] = verifyConditions
    .getBodyOrThrow()
    .getChildrenOfKind(SyntaxKind.IfStatement)
    .flatMap((ifNode) => ifNode.getChildrenOfKind(SyntaxKind.Block))
    .flatMap((blockNode) => blockNode.getChildrenOfKind(SyntaxKind.ThrowStatement))

  if (problematicClause === undefined) {
    throw new Error('Expected to find throw statement')
  }

  problematicClause.replaceWithText('// do nothing')
  await source.save()
}
