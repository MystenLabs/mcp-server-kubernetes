import { KubernetesManager } from "../types.js";

export const getCurrentKubeContextSchema = {
  name: "get_current_kube_context",
  description: "Get the currently active Kubernetes context name.",
  inputSchema: {}, // No input needed
  outputSchema: {
    type: "object",
    properties: {
      currentContext: {
        type: "string",
        description: "The name of the currently active Kubernetes context.",
      },
    },
    required: ["currentContext"],
  },
} as const;

export async function getCurrentKubeContext(
  k8sManager: KubernetesManager,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _input: Record<string, never> // Explicitly define no input expected
): Promise<{ currentContext: string }> {
  try {
    const currentContext = k8sManager.getCurrentContext();
    return { currentContext };
  } catch (error: any) {
    console.error(`Error getting current kube context: ${error.message}`);
    // Rethrow or handle as McpError if appropriate for the server's error handling
    throw error;
  }
}
