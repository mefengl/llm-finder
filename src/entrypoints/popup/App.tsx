import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { SiGithub } from 'react-icons/si'

interface Resource {
  category: string
  name: string
  url: string
}

const resources: Resource[] = [
  // Classic
  { category: 'Classic', name: 'ChatGPT', url: 'https://chat.openai.com' },
  { category: 'Classic', name: 'Claude', url: 'https://claude.ai' },
  { category: 'Classic', name: 'Perplexity', url: 'https://perplexity.ai' },

  // Chat
  { category: 'Chat', name: 'Mistral', url: 'https://chat.mistral.ai/chat' },
  { category: 'Chat', name: 'Groq', url: 'https://groq.com' },
  { category: 'Chat', name: 'Grok', url: 'https://x.com/i/grok' },
  { category: 'Chat', name: 'glhf', url: 'https://glhf.chat/' },
  { category: 'Chat', name: 'Cerebras', url: 'https://inference.cerebras.ai' },
  { category: 'Chat', name: 'Lambda', url: 'https://lambda.chat' },
  { category: 'Chat', name: 'NousResearch', url: 'https://hermes.nousresearch.com/' },
  { category: 'Chat', name: 'SambaNova', url: 'https://cloud.sambanova.ai/' },

  // Create
  { category: 'Create', name: 'v0', url: 'https://v0.dev/chat' },
  { category: 'Create', name: 'bolt', url: 'https://bolt.new/' },
  { category: 'Create', name: 'Recraft', url: 'https://www.recraft.ai' },

  // Apps
  { category: 'Apps', name: 'Google NotebookLM', url: 'https://notebooklm.google.com' },
  { category: 'Apps', name: 'Illuminate', url: 'https://illuminate.google.com/papers' },
  { category: 'Apps', name: 'Learn About', url: 'https://learning.google.com/experiments/learn-about' },
  { category: 'Apps', name: 'TextFx', url: 'https://textfx.withgoogle.com/' },
  { category: 'Apps', name: 'ImageFx', url: 'https://aitestkitchen.withgoogle.com/tools/image-fx' },
  { category: 'Apps', name: 'MusicFx', url: 'https://aitestkitchen.withgoogle.com/tools/music-fx' },
  { category: 'Apps', name: 'MusicFx DJ', url: 'https://aitestkitchen.withgoogle.com/tools/music-fx-dj' },

  // Playgrounds
  { category: 'Playgrounds', name: 'Hugging Face', url: 'https://huggingface.co/chat/' },
  { category: 'Playgrounds', name: 'Google AI Studio', url: 'https://aistudio.google.com/app/prompts/new_chat' },
  { category: 'Playgrounds', name: 'Groq Console', url: 'https://console.groq.com/playground' },
  { category: 'Playgrounds', name: 'OpenAI', url: 'https://platform.openai.com/playground' },
  { category: 'Playgrounds', name: 'Mistral Console', url: 'https://console.mistral.ai/build/agents/new' },
  { category: 'Playgrounds', name: 'Cerebras', url: 'https://cloud.cerebras.ai' },

  // Changelog
  { category: 'Changelog', name: 'Google Gemini API Changelog', url: 'https://ai.google.dev/gemini-api/docs/changelog' },
  { category: 'Changelog', name: 'Groq Changelog', url: 'https://console.groq.com/docs/changelog' },
  { category: 'Changelog', name: 'OpenAI Changelog', url: 'https://platform.openai.com/docs/changelog' },
  { category: 'Changelog', name: 'Mistral Changelog', url: 'https://docs.mistral.ai/getting-started/changelog' },
  { category: 'Changelog', name: 'Anthropic API Changelog', url: 'https://docs.anthropic.com/en/release-notes/api' },
  { category: 'Changelog', name: 'Claude Apps Changelog', url: 'https://docs.anthropic.com/en/release-notes/claude-apps' },
  { category: 'Changelog', name: 'Anthropic System Prompts Changelog', url: 'https://docs.anthropic.com/en/release-notes/system-prompts' },
  { category: 'Changelog', name: 'Google Gemini Updates', url: 'https://gemini.google.com/updates' },
  { category: 'Changelog', name: 'v0 Changelog', url: 'https://v0.dev/changelog' },
  { category: 'Changelog', name: 'Perplexity Changelog', url: 'https://docs.perplexity.ai/changelog/changelog' },
  { category: 'Changelog', name: 'Cursor Changelog', url: 'https://changelog.cursor.com' },

  // API & Limits
  { category: 'API & Limits', name: 'API Settings (glhf)', url: 'https://glhf.chat/users/settings/api' },
  { category: 'API & Limits', name: 'Cohere Rate Limits', url: 'https://docs.cohere.com/docs/rate-limits' },
  { category: 'API & Limits', name: 'OpenRouter Rate Limits', url: 'https://openrouter.ai/docs/limits' },
  { category: 'API & Limits', name: 'huggingface Rate Limits', url: 'https://huggingface.co/docs/api-inference/rate-limits' },
  { category: 'API & Limits', name: 'Groq Rate Limits', url: 'https://console.groq.com/settings/limits' },
  { category: 'API & Limits', name: 'Cohere Pricing', url: 'https://cohere.com/pricing' },
  { category: 'API & Limits', name: 'Hyperbolic AI Pricing', url: 'https://docs.hyperbolic.xyz/docs/hyperbolic-ai-inference-pricing' },
  { category: 'API & Limits', name: 'SambaNova Pricing', url: 'https://cloud.sambanova.ai/pricing' },

  // Games & Stats
  { category: 'Games & Stats', name: 'LM Arena', url: 'https://lmarena.ai/?leaderboard' },
  { category: 'Games & Stats', name: 'WorldSim Browser', url: 'https://worldsim.nousresearch.com/browser' },
  { category: 'Games & Stats', name: 'WorldSim Console', url: 'https://worldsim.nousresearch.com/console' },
  { category: 'Games & Stats', name: 'Oasis', url: 'https://oasis.decart.ai' },

  // Pay
  { category: 'Pay', name: 'Hyperbolic', url: 'https://app.hyperbolic.xyz/' },
]

function getDomain(url: string): string {
  try {
    const { hostname } = new URL(url)
    return hostname.replace(/^www\./, '')
  }
  catch {
    return url
  }
}

function ResourceItem({ resource }: { resource: Resource }) {
  return (
    <div
      className="flex cursor-pointer items-center justify-between border-b px-3 py-2 hover:bg-gray-50"
      onClick={() => window.open(resource.url, '_blank')}
    >
      <span className="text-sm text-gray-900">{resource.name}</span>
      <span className="text-xs text-gray-500">{getDomain(resource.url)}</span>
    </div>
  )
}

export default function App() {
  const [searchTerm, setSearchTerm] = useState<string>('')

  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      return resource.name.toLowerCase().includes(searchTerm.toLowerCase())
        || resource.category.toLowerCase().includes(searchTerm.toLowerCase())
    })
  }, [searchTerm])

  const groupedResources = useMemo(() => {
    return filteredResources.reduce((acc, resource) => {
      if (!acc[resource.category]) {
        acc[resource.category] = []
      }
      acc[resource.category].push(resource)
      return acc
    }, {} as Record<string, Resource[]>)
  }, [filteredResources])

  return (
    <div className="flex size-[600px] flex-col">
      <div className="border-b px-3 py-2">
        <div className="relative">
          <Search className="absolute left-2 top-1.5 size-4 text-gray-400" />
          <Input
            className="h-8 border-0 pl-8 ring-1 ring-gray-200 focus-visible:ring-2 focus-visible:ring-blue-500"
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Search..."
            type="text"
            value={searchTerm}
          />
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        {Object.entries(groupedResources).map(([category, items]) => (
          <div key={category}>
            <div className="sticky top-0 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-500">
              {category}
            </div>
            <div className="grid grid-cols-2 divide-x">
              {items.map(resource => (
                <ResourceItem key={resource.name} resource={resource} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between border-t px-3 py-2">
        <Button
          onClick={() => window.open('https://github.com/mefengl/memcode/issues/new', '_blank')}
          size="sm"
          variant="outline"
        >
          <SiGithub className="mr-1 size-3" />
          Suggest
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="text-xs text-gray-500" size="sm" variant="ghost">
              About
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>About</DialogTitle>
              <DialogDescription>
                <div className="mb-4 text-sm text-gray-700">
                  Made by Alan 😎
                </div>
                <div className="mb-4 text-xs text-gray-500">
                  Credits:
                  <br />
                  Icons from
                  {' '}
                  <a className="underline" href="https://heyzoish.gumroad.com/l/notionists" rel="noopener noreferrer" target="_blank">Notionists</a>
                  {' '}
                  by
                  {' '}
                  <a className="underline" href="https://bio.link/heyzoish" rel="noopener noreferrer" target="_blank">Zoish</a>
                  , licensed under
                  {' '}
                  <a className="underline" href="https://creativecommons.org/publicdomain/zero/1.0/" rel="noopener noreferrer" target="_blank">CC0 1.0</a>
                  . Remix of the original.
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
