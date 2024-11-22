import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const categories = [
  {
    links: [
      { name: 'ChatGPT', url: 'https://chat.openai.com' },
      { name: 'Claude', url: 'https://claude.ai' },
      { name: 'Perplexity', url: 'https://perplexity.ai' },
    ],
    name: 'Classic',
  },
  {
    links: [
      { name: 'Mistral', url: 'https://chat.mistral.ai/chat' },
      { name: 'Groq', url: 'https://groq.com' },
      { name: 'Grok', url: 'https://x.com/i/grok' },
      { name: 'glhf', url: 'https://glhf.chat/' },
      { name: 'Cerebras', url: 'https://inference.cerebras.ai' },
      { name: 'Lambda', url: 'https://lambda.chat' },
      { name: 'NousResearch', url: 'https://hermes.nousresearch.com/' },
    ],
    name: 'Chat',
  },
  {
    links: [
      { name: 'v0', url: 'https://v0.dev/chat' },
      { name: 'bolt', url: 'https://bolt.new/' },
    ],
    name: 'Web',
  },
  {
    links: [
      { name: 'Recraft', url: 'https://www.recraft.ai' },
    ],
    name: 'Image',
  },
  {
    links: [
      { name: 'Google NotebookLM', url: 'https://notebooklm.google.com' },
      { name: 'Illuminate', url: 'https://illuminate.google.com/papers' },
      { name: 'Learn About', url: 'https://learning.google.com/experiments/learn-about' },
    ],
    name: 'Apps',
  },
  {
    links: [
      { name: 'Hugging Face', url: 'https://huggingface.co/chat/' },
      { name: 'Google AI Studio', url: 'https://aistudio.google.com/app/prompts/new_chat' },
      { name: 'Groq Console', url: 'https://console.groq.com/playground' },
      { name: 'OpenAI', url: 'https://platform.openai.com/playground' },
      { name: 'Mistral Console', url: 'https://console.mistral.ai/build/agents/new' },
      { name: 'Cerebras', url: 'https://cloud.cerebras.ai' },
    ],
    name: 'Playgrounds',
  },
  {
    links: [
      { name: 'Google Gemini API Changelog', url: 'https://ai.google.dev/gemini-api/docs/changelog' },
      { name: 'Groq Changelog', url: 'https://console.groq.com/docs/changelog' },
      { name: 'OpenAI Changelog', url: 'https://platform.openai.com/docs/changelog' },
      { name: 'Mistral Changelog', url: 'https://docs.mistral.ai/getting-started/changelog' },
      { name: 'Anthropic API Changelog', url: 'https://docs.anthropic.com/en/release-notes/api' },
      { name: 'Claude Apps Changelog', url: 'https://docs.anthropic.com/en/release-notes/claude-apps' },
      { name: 'Anthropic System Prompts Changelog', url: 'https://docs.anthropic.com/en/release-notes/system-prompts' },
      { name: 'Google Gemini Updates', url: 'https://gemini.google.com/updates' },
      { name: 'v0 Changelog', url: 'https://v0.dev/changelog' },
      { name: 'Perplexity Changelog', url: 'https://docs.perplexity.ai/changelog/changelog' },
      { name: 'Cursor Changelog', url: 'https://changelog.cursor.com' },
    ],
    name: 'Changelog',
  },
  {
    links: [
      { name: 'Cohere Pricing', url: 'https://cohere.com/pricing' },
      { name: 'Hyperbolic AI Inference Pricing', url: 'https://docs.hyperbolic.xyz/docs/hyperbolic-ai-inference-pricing' },
    ],
    name: 'Price',
  },
  {
    links: [
      { name: 'Cohere Rate Limits', url: 'https://docs.cohere.com/docs/rate-limits' },
      { name: 'OpenRouter Rate Limits', url: 'https://openrouter.ai/docs/limits' },
      { name: 'huggingface Rate Limits', url: 'https://huggingface.co/docs/api-inference/rate-limits' },
      { name: 'Groq Rate Limits', url: 'https://console.groq.com/settings/limits' },
    ],
    name: 'Rate Limits',
  },
  {
    links: [
      { name: 'API', url: 'https://glhf.chat/users/settings/api' },
    ],
    name: 'API',
  },
  {
    links: [
      { name: 'LM Arena', url: 'https://lmarena.ai/?leaderboard' },
    ],
    name: 'Leaderboards',
  },
  {
    links: [
      { name: 'WorldSim Browser', url: 'https://worldsim.nousresearch.com/browser' },
      { name: 'WorldSim Console', url: 'https://worldsim.nousresearch.com/console' },
      { name: 'Oasis', url: 'https://oasis.decart.ai' },
    ],
    name: 'Games',
  },
]

export default function Component() {
  return (
    <div className="w-full max-w-4xl p-4 mx-auto space-y-6">
      <Tabs className="w-full" defaultValue={categories[0].name}>
        <TabsList className="mb-4">
          {categories.map(category => (
            <TabsTrigger key={category.name} value={category.name}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map(category => (
          <TabsContent key={category.name} value={category.name}>
            <div className="md:grid-cols-2 lg:grid-cols-3 grid grid-cols-1 gap-6">
              {category.links.map(link => (
                <Card className="shadow-lg" key={link.name}>
                  <CardHeader>
                    <CardTitle>{link.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-600 rounded"
                      href={link.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {link.url}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
