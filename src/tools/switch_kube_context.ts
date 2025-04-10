import { KubernetesManager } from "../types.js";
import { McpError, ErrorCode } from "@modelcontextprotocol/sdk/types.js";

export const switchKubeContextSchema = {
  name: "switch_kube_context",
  description: "Switch the active Kubernetes context.",
  inputSchema: {
    type: "object",
    properties: {
      contextName: {
        type: "string",
        description: "The name of the context to switch to.",
      },
    },
    required: ["contextName"],
  },
  outputSchema: {
    type: "object",
    properties: {
      message: {
        type: "string",
        description: "Confirmation message indicating success.",
      },
      activeContext: {
        type: "string",
        description: "The name of the newly active Kubernetes context after the switch.",
      },
    },
    required: ["message", "activeContext"],
  },
} as const;

export async function switchKubeContext(
  k8sManager: KubernetesManager,
  input: { contextName: string }
): Promise<{ message: string; activeContext: string }> {
  try {
    const newActiveContext = k8sManager.switchContext(input.contextName);
    return {
      message: `Successfully switched context to '${newActiveContext}'`,
      activeContext: newActiveContext,
    };
  } catch (error: any) {
    console.error(`Error switching kube context to '${input.contextName}': ${error.message}`);
    // Re-throw McpErrors directly, wrap others if needed
    if (error instanceof McpError) {
      throw error;
    } else {
      // Consider wrapping other errors in a standard format if desired
      throw new McpError(ErrorCode.InternalError, `Failed to switch context: ${error.message}`);
    }
  }
}
