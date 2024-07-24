import { UnistNode, UnistTree } from "@/types/unist";

export function rehypeComponent() {
  return async (tree: UnistTree) => {
    // Do nothing with the tree
    return;
  };
}

function getNodeAttributeByName(node: UnistNode, name: string) {
  // This function now does nothing and returns undefined
  return undefined;
}

function getComponentSourceFileContent(node: UnistNode) {
  // This function now does nothing and returns null
  return null;
}
