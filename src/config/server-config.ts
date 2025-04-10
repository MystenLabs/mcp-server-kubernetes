export const serverConfig = {
  name: "kubernetes",
  version: "0.1.0",
  capabilities: {
    resources: {},
    tools: {
      // Core K8s operations
      list_pods: true,
      list_nodes: true,
      list_services: true,
      list_deployments: true,
      list_cronjobs: true,
      list_jobs: true,
      list_namespaces: true,
      list_api_resources: true,
      describe_pod: true,
      describe_deployment: true,
      describe_cronjob: true,
      get_logs: true,
      get_job_logs: true,
      get_events: true,
      create_pod: true,
      create_deployment: true,
      create_namespace: true,
      create_cronjob: true,
      create_configmap: true,
      delete_pod: true,
      delete_deployment: true,
      delete_namespace: true,
      delete_cronjob: true,
      scale_deployment: true,
      // Helm operations
      install_helm_chart: true,
      upgrade_helm_chart: true,
      uninstall_helm_chart: true,
      // Kubectl operations
      explain_resource: true,
      // Port Forwarding
      start_port_forward: true,
      stop_port_forward: true,
      // Context Management (Newly Added)
      list_kube_contexts: true,
      get_current_kube_context: true,
      switch_kube_context: true,
      // Server Management
      cleanup: true,
    },
  },
} as const;
