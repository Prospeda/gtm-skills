'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Phone,
  Mic,
  Clock,
  Play,
  Copy,
  Check,
  ChevronRight,
  Search,
  ExternalLink,
  Zap,
  BookOpen,
  Target,
  MessageSquare,
  Calendar,
  ArrowRight,
  Voicemail,
} from 'lucide-react';

interface VoiceTemplate {
  id: string;
  name: string;
  description: string;
  category: 'cold_call' | 'discovery' | 'demo' | 'follow_up' | 'qualification' | 'voicemail';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration_minutes: number;
  variables: string[];
  tags: string[];
}

const categoryInfo: Record<string, { icon: typeof Phone; color: string; label: string }> = {
  cold_call: { icon: Phone, color: 'text-blue-400', label: 'Cold Call' },
  discovery: { icon: Search, color: 'text-purple-400', label: 'Discovery' },
  demo: { icon: Play, color: 'text-green-400', label: 'Demo' },
  follow_up: { icon: MessageSquare, color: 'text-amber-400', label: 'Follow Up' },
  qualification: { icon: Target, color: 'text-orange-400', label: 'Qualification' },
  voicemail: { icon: Voicemail, color: 'text-pink-400', label: 'Voicemail' },
};

const difficultyColors: Record<string, string> = {
  beginner: 'bg-green-500/20 text-green-400',
  intermediate: 'bg-amber-500/20 text-amber-400',
  advanced: 'bg-red-500/20 text-red-400',
};

export default function VoiceTemplatesPage() {
  const [templates, setTemplates] = useState<VoiceTemplate[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTemplates() {
      try {
        const params = new URLSearchParams();
        if (filter) params.set('category', filter);
        if (searchQuery) params.set('search', searchQuery);

        const response = await fetch(`/api/v1/voice/templates?${params}`);
        const data = await response.json();
        setTemplates(data.data || []);
      } catch (error) {
        console.error('Error fetching templates:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchTemplates();
  }, [filter, searchQuery]);

  const handleCopyId = async (id: string) => {
    await navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const categories = ['cold_call', 'voicemail', 'discovery', 'demo', 'follow_up', 'qualification'];

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-purple-500/30 text-purple-400">
            <Mic className="w-3 h-3 mr-1" />
            AI Voice Templates
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Voice Templates for Vapi
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pre-built AI voice agent scripts for cold calls, discovery, demos, and more.
            Deploy to Vapi with one click.
          </p>
        </div>

        {/* Vapi Integration Banner */}
        <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-purple-400" />
                <h2 className="font-semibold">Powered by Vapi</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                These templates work with Vapi's voice AI platform. Deploy an AI sales agent
                that can make and receive calls using these battle-tested scripts.
              </p>
              <div className="flex gap-3">
                <a href="https://vapi.ai" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    Get Vapi API Key
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </Button>
                </a>
                <Link href="/tutorials/voice-ai-setup">
                  <Button variant="ghost" size="sm">
                    <BookOpen className="w-4 h-4 mr-1" />
                    Setup Guide
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="w-24 h-24 bg-purple-500/20 rounded-2xl flex items-center justify-center">
                <Mic className="w-12 h-12 text-purple-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-secondary border border-border focus:border-purple-500 focus:outline-none"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setFilter('')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                !filter
                  ? 'bg-purple-500 text-white'
                  : 'bg-secondary text-muted-foreground hover:text-foreground'
              }`}
            >
              All
            </button>
            {categories.map((cat) => {
              const info = categoryInfo[cat];
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    filter === cat
                      ? 'bg-purple-500 text-white'
                      : 'bg-secondary text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <info.icon className="w-4 h-4" />
                  {info.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Templates Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
            <p className="mt-4 text-muted-foreground">Loading templates...</p>
          </div>
        ) : templates.length === 0 ? (
          <div className="text-center py-12 bg-card rounded-xl border border-border">
            <Mic className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-semibold mb-2">No templates found</h3>
            <p className="text-muted-foreground">Try adjusting your filters</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template) => {
              const catInfo = categoryInfo[template.category];
              const CatIcon = catInfo?.icon || Phone;

              return (
                <div
                  key={template.id}
                  className="bg-card border border-border rounded-xl p-6 hover:border-purple-500/50 transition-all group"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-2 rounded-lg bg-secondary ${catInfo?.color}`}>
                      <CatIcon className="w-5 h-5" />
                    </div>
                    <Badge className={difficultyColors[template.difficulty]}>
                      {template.difficulty}
                    </Badge>
                  </div>

                  {/* Content */}
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-purple-400 transition-colors">
                    {template.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {template.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {template.duration_minutes} min
                    </span>
                    <span className="flex items-center gap-1">
                      <Target className="w-3 h-3" />
                      {template.variables.length} variables
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {template.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-secondary px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Link href={`/voice-templates/${template.id}`} className="flex-1">
                      <Button className="w-full bg-purple-500 hover:bg-purple-600">
                        View Template
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleCopyId(template.id)}
                      title="Copy template ID"
                    >
                      {copiedId === template.id ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-8">
          <Mic className="w-12 h-12 text-purple-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Deploy Your First Voice Agent</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Get started with Vapi and deploy a battle-tested sales voice agent in minutes.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="https://vapi.ai" target="_blank" rel="noopener noreferrer">
              <Button className="bg-purple-500 hover:bg-purple-600">
                Get Started with Vapi
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
            <Link href="/prompts">
              <Button variant="outline">
                Browse Text Prompts
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
