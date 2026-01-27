import Link from 'next/link';
import { Github, Twitter } from 'lucide-react';

const footerLinks = {
  Resources: [
    { name: 'Industry Prompts', href: '/industry' },
    { name: 'Role Playbooks', href: '/role' },
    { name: 'Workflows', href: '/workflow' },
    { name: 'Methodologies', href: '/methodology' },
    { name: 'Templates', href: '/templates' },
  ],
  Tools: [
    { name: 'Claude Projects', href: '/projects' },
    { name: 'MCP Workflows', href: '/mcp' },
    { name: 'ClawdBot Tutorial', href: '/clawdbot' },
    { name: 'Download All', href: '/download' },
  ],
  Company: [
    { name: 'About', href: '/about' },
    { name: 'Prospeda (Paid)', href: 'https://prospeda.com' },
    { name: 'GitHub', href: 'https://github.com/Prospeda/gtm-skills' },
    { name: 'Contact', href: 'mailto:hello@gtm-skills.com' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-red-500">
                <span className="text-sm font-bold text-white">G</span>
              </div>
              <span className="font-semibold text-foreground">GTM Skills</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              2,500+ copy-paste prompts for B2B sales and marketing.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/Prospeda/gtm-skills"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/prospeda"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} GTM Skills. MIT License.
          </p>
          <p className="text-sm text-muted-foreground">
            Built by{' '}
            <a
              href="https://prospeda.com"
              className="text-foreground hover:underline"
            >
              Prospeda
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
