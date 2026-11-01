"use client";

import { useChat } from "ai/react";

export default function Home() {
  const system = "You are Nexorian AI Productivity Automator. Help users break down tasks, prioritize, schedule, and optimize workflows with clarity and efficiency. Be precise and actionable.";

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
    body: { system },
  });

  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-2">Nexorian AI Productivity Automator</h1>
      <p className="mb-6 text-lg">Smart task breakdown, prioritization, and workflow optimization.</p>

      <div className="border rounded p-4 h-96 overflow-y-auto mb-4 bg-white/70">
        {messages.length === 0 && <p className="text-gray-500">Describe a project or list of tasks...</p>}
        {messages.map((m) => (
          <div key={m.id} className="mb-3">
            <strong>{m.role === "user" ? "You" : "Nexorian"}:</strong>
            <div className="whitespace-pre-wrap mt-1">{m.content}</div>
          </div>
        ))}
        {isLoading && <div className="text-amber-700">Optimizing...</div>}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="e.g. Plan the launch of a new AI tool"
          className="flex-1 border p-3 rounded"
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading} className="bg-amber-700 text-white px-6 py-3 rounded font-medium">
          Optimize
        </button>
      </form>
    </main>
  );
}