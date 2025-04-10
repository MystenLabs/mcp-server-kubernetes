import { KubernetesManager } from "../types.js";

export const listKubeContextsSchema = {
  name: "list_kube_contexts",
  description: "List the available Kubernetes contexts from the kubeconfig file.",
  inputSchema: {}, // No input needed
  outputSchema: {
    type: "object",
    properties: {
      contexts: {
        type: "array",
        items: { type: "string" },
        description: "A list of available Kubernetes context names.",
      },
    },
    required: ["contexts"],
  },
} as const;

export async function listKubeContexts(
  k8sManager: KubernetesManager,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _input: Record<string, never> // Explicitly define no input expected
): Promise<{ contexts: string[] }> {
  try {
    const contexts = k8sManager.listContexts();
    return { contexts };
  } catch (error: any) {
    console.error(`Error listing kube contexts: ${error.message}`);
    // Rethrow or handle as McpError if appropriate for the server's error handling
    throw error;
  }
}
