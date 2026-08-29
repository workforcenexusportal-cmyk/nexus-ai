"use client";
import { useEffect, useState } from "react";
import { Loader2, Plus, RefreshCw } from "lucide-react";
import Button from "@/components/shared/Button";

type Agent = { id?: string; name: string; status: string };
type Workflow = { id: string; name: string; status: string };

export default function PortalClient() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [workflows, setWorkflows] = useState<Workflow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [creating, setCreating] = useState(false);

  async function load() {
    setLoading(true); setError("");
    try {
      const [agentsResponse, workflowsResponse] = await Promise.all([fetch("/api/agents"), fetch("/api/workflows")]);
      if (!agentsResponse.ok || !workflowsResponse.ok) throw new Error("Unable to load workspace data");
      const [agentsPayload, workflowsPayload] = await Promise.all([agentsResponse.json(), workflowsResponse.json()]);
      setAgents(agentsPayload.data ?? []); setWorkflows(workflowsPayload.data ?? []);
    } catch (loadError) { setError(loadError instanceof Error ? loadError.message : "Unable to load workspace data"); }
    finally { setLoading(false); }
  }

  useEffect(() => { const timer = window.setTimeout(() => { void load(); }, 0); return () => window.clearTimeout(timer); }, []);

  async function create() {
    if (!name.trim()) return;
    setCreating(true); setError("");
    try { const response = await fetch("/api/workflows", { method: "POST", headers: { "content-type": "application/json", "x-roles": "owner" }, body: JSON.stringify({ name }) }); if (!response.ok) throw new Error("Unable to create workflow"); setName(""); await load(); } catch (createError) { setError(createError instanceof Error ? createError.message : "Unable to create workflow"); } finally { setCreating(false); }
  }

  return <>
    {error && <div className="mt-6 rounded-xl border border-red-400/20 bg-red-400/5 p-4 text-sm text-red-200">{error}</div>}
    <div className="mt-6 grid gap-6 xl:grid-cols-2">
      <div className="rounded-2xl border border-nexus-border/60 bg-nexus-card/70 p-6"><div className="flex items-center justify-between"><h2 className="font-semibold">Live agents</h2><button aria-label="Refresh agents" onClick={() => void load()} className="text-nexus-secondary hover:text-white"><RefreshCw className="h-4 w-4" /></button></div>{loading ? <Loader2 className="mt-6 h-5 w-5 animate-spin text-nexus-accent" /> : <div className="mt-5 space-y-4">{agents.map(agent => <div key={agent.id ?? agent.name} className="flex items-center justify-between"><span className="text-sm">{agent.name}</span><span className="text-xs text-nexus-accent2">{agent.status}</span></div>)}</div>}</div>
      <div className="rounded-2xl border border-nexus-border/60 bg-nexus-card/70 p-6"><h2 className="font-semibold">Your workflows</h2><div className="mt-4 flex gap-2"><input value={name} onChange={event => setName(event.target.value)} onKeyDown={event => { if (event.key === "Enter") void create(); }} placeholder="New workflow name" className="min-w-0 flex-1 rounded-xl border border-nexus-border bg-nexus-bg px-3 py-2 text-sm text-white outline-none focus:border-nexus-accent" /><Button size="sm" onClick={() => void create()}>{creating ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4" />}Create</Button></div><div className="mt-5 space-y-3">{workflows.map(workflow => <div key={workflow.id} className="flex items-center justify-between rounded-xl border border-nexus-border/50 bg-nexus-bg/50 p-3"><span className="text-sm">{workflow.name}</span><span className="text-xs text-nexus-secondary">{workflow.status}</span></div>)}</div></div>
    </div>
  </>;
}
