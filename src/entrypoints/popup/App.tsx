import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

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
      { name: 'Google NotebookLM', url: 'https://notebooklm.google.com' },
    ],
    name: 'Apps',
  },
  {
    links: [
      { name: 'v0', url: 'https://v0.dev/chat' },
      { name: 'Mistral', url: 'https://chat.mistral.ai/chat' },
      { name: 'Groq', url: 'https://groq.com' },
      { name: 'Grok', url: 'https://x.com/i/grok' },
    ],
    name: 'Emerging',
  },
  {
    links: [
      { name: 'Hugging Face', url: 'https://huggingface.co/chat/' },
      { name: 'Google AI Studio', url: 'https://aistudio.google.com/app/prompts/new_chat' },
      { name: 'Groq Console', url: 'https://console.groq.com/playground' },
      { name: 'OpenAI', url: 'https://platform.openai.com/playground' },
      { name: 'Mistral Console', url: 'https://console.mistral.ai/build/agents/new' },
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
]

export default function Component() {
  return (
    <div className="mx-auto w-96 space-y-6 p-4">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map(category => (
          <Card className="shadow-lg" key={category.name}>
            <CardHeader>
              <CardTitle>{category.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {category.links.map(link => (
                  <li key={link.name}>
                    <a
                      className="rounded text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
                      href={link.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
