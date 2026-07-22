export type AIProvider = 'Gemini' | 'Claude' | 'OpenAI' | 'OpenRouter' | 'Local';

export interface ModelConfig {
  id: string;
  name: string;
  provider: AIProvider;
  latencyMs: number;
  dailyQuotaTokens: number;
  tokensUsedToday: number;
  failureRate: number; // 0 to 1
  rateLimitPerMin: number;
  isActive: boolean;
}

export interface RouterSwitchLog {
  timestamp: string;
  agentId: string;
  agentName: string;
  oldModel: string;
  newModel: string;
  reason: 'rate_limit' | 'quota_exceeded' | 'network_failure' | 'high_latency' | 'api_failure';
}

class ModelRouter {
  private models: ModelConfig[] = [
    { id: 'claude-3-5', name: 'Claude 3.5 Sonnet', provider: 'Claude', latencyMs: 250, dailyQuotaTokens: 10000000, tokensUsedToday: 0, failureRate: 0.02, rateLimitPerMin: 150000, isActive: true },
    { id: 'gemini-1-5', name: 'Gemini 1.5 Pro', provider: 'Gemini', latencyMs: 180, dailyQuotaTokens: 15000000, tokensUsedToday: 0, failureRate: 0.01, rateLimitPerMin: 200000, isActive: true },
    { id: 'gpt-4o', name: 'GPT-4o Enterprise', provider: 'OpenAI', latencyMs: 220, dailyQuotaTokens: 12000000, tokensUsedToday: 0, failureRate: 0.015, rateLimitPerMin: 180000, isActive: true },
    { id: 'llama-3-1', name: 'Llama 3.1 70B', provider: 'OpenRouter', latencyMs: 350, dailyQuotaTokens: 20000000, tokensUsedToday: 0, failureRate: 0.05, rateLimitPerMin: 250000, isActive: true },
    { id: 'deepseek-v3', name: 'DeepSeek-V3', provider: 'Local', latencyMs: 120, dailyQuotaTokens: 30000000, tokensUsedToday: 0, failureRate: 0.03, rateLimitPerMin: 400000, isActive: true }
  ];

  private logs: RouterSwitchLog[] = [];

  public getModels(): ModelConfig[] {
    return this.models;
  }

  public getLogs(): RouterSwitchLog[] {
    return this.logs;
  }

  // Choose the best model based on settings and health
  public routeRequest(agentId: string, agentName: string, currentModelName: string, priorityList: string[]): { modelName: string; switched: boolean; reason?: string } {
    const currentModel = this.models.find(m => m.name === currentModelName);
    
    // Simulate runtime failure triggers
    let switchReason: RouterSwitchLog['reason'] | null = null;
    if (currentModel) {
      const rand = Math.random();
      if (currentModel.tokensUsedToday >= currentModel.dailyQuotaTokens) {
        switchReason = 'quota_exceeded';
      } else if (rand < currentModel.failureRate) {
        switchReason = 'api_failure';
      } else if (currentModel.latencyMs > 500) {
        switchReason = 'high_latency';
      } else if (Math.random() < 0.02) { // 2% chance of dynamic network check failure
        switchReason = 'network_failure';
      }
    } else {
      switchReason = 'api_failure';
    }

    if (!switchReason) {
      // Keep using current model
      if (currentModel) {
        currentModel.tokensUsedToday += Math.floor(Math.random() * 5000) + 1000;
      }
      return { modelName: currentModelName, switched: false };
    }

    // Try finding next best available model in the priority list
    const fallbackList = priorityList.length > 0 ? priorityList : this.models.map(m => m.name);
    for (const modelName of fallbackList) {
      if (modelName === currentModelName) continue;
      const targetModel = this.models.find(m => m.name === modelName && m.isActive);
      if (targetModel && targetModel.tokensUsedToday < targetModel.dailyQuotaTokens && targetModel.latencyMs < 400) {
        // Switch to this model
        const logEntry: RouterSwitchLog = {
          timestamp: new Date().toLocaleTimeString(),
          agentId,
          agentName,
          oldModel: currentModelName,
          newModel: modelName,
          reason: switchReason
        };
        this.logs.unshift(logEntry);
        if (this.logs.length > 50) this.logs.pop();

        // Update token usage
        targetModel.tokensUsedToday += Math.floor(Math.random() * 5000) + 1000;
        return { modelName, switched: true, reason: switchReason };
      }
    }

    return { modelName: currentModelName, switched: false };
  }

  public updateModelStats() {
    // Dynamically fluctuate latency & usage for realism in logs
    this.models.forEach(m => {
      m.latencyMs = Math.max(50, m.latencyMs + Math.floor(Math.random() * 60) - 30);
      m.tokensUsedToday = Math.min(m.dailyQuotaTokens, m.tokensUsedToday + Math.floor(Math.random() * 20000));
    });
  }
}

export const modelRouter = new ModelRouter();
