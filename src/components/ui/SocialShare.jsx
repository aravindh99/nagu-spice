import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, Check, Copy, MessageCircle, Send, X } from 'lucide-react';

const SHARE_TEXT = "Nagu's Spice House | Purely Homemade Masalas & Podis";

export function SocialShare({ variant = 'inline' }) {
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const getShareUrl = () => {
    if (typeof window !== 'undefined') {
      return window.location.origin + window.location.pathname;
    }
    return 'https://naguspicehouse.com/';
  };

  const handleCopyLink = async () => {
    const url = getShareUrl();
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = url;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const handleNativeShare = async () => {
    const url = getShareUrl();
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Nagu's Spice House",
          text: SHARE_TEXT,
          url: url,
        });
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.error('Error sharing:', err);
        }
      }
    } else {
      setIsOpen(true);
    }
  };

  const shareLinks = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      href: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${SHARE_TEXT}\n${getShareUrl()}`)}`,
      bgColor: 'bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] border-[#25D366]/30',
    },
    {
      name: 'Telegram',
      icon: Send,
      href: `https://t.me/share/url?url=${encodeURIComponent(getShareUrl())}&text=${encodeURIComponent(SHARE_TEXT)}`,
      bgColor: 'bg-[#229ED9]/15 hover:bg-[#229ED9]/25 text-[#229ED9] border-[#229ED9]/30',
    },
    {
      name: 'X (Twitter)',
      icon: ({ className }) => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(SHARE_TEXT)}&url=${encodeURIComponent(getShareUrl())}`,
      bgColor: 'bg-[#1DA1F2]/15 hover:bg-[#1DA1F2]/25 text-[#1DA1F2] border-[#1DA1F2]/30',
    },
    {
      name: 'Facebook',
      icon: ({ className }) => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getShareUrl())}`,
      bgColor: 'bg-[#1877F2]/15 hover:bg-[#1877F2]/25 text-[#1877F2] border-[#1877F2]/30',
    },
  ];

  if (variant === 'button') {
    return (
      <div className="relative inline-block">
        <button
          onClick={handleNativeShare}
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] font-semibold text-[#231714] border border-[#231714]/30 rounded-full px-4 py-2 hover:bg-[#231714] hover:text-[#E5DFD3] transition-all duration-300 cursor-pointer"
          aria-label="Share Nagu's Spice House"
          title="Share on WhatsApp & Social Media"
        >
          <Share2 className="w-3.5 h-3.5" />
          <span>Share</span>
        </button>

        {/* Fallback Share Modal for desktop if Web Share API is not supported */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="absolute right-0 top-12 z-50 w-72 bg-[#EBE6DC] text-[#231714] p-4 rounded-2xl shadow-2xl border border-[#231714]/15 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between mb-3 border-b border-[#231714]/10 pb-2">
                <span className="text-xs font-serif font-bold text-[#7B1F1F]">Share via</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 text-[#231714]/60 hover:text-[#231714]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-3">
                {shareLinks.map((platform) => {
                  const Icon = platform.icon;
                  return (
                    <a
                      key={platform.name}
                      href={platform.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 p-2 rounded-xl border text-xs font-medium transition-all ${platform.bgColor}`}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span>{platform.name}</span>
                    </a>
                  );
                })}
              </div>

              <button
                onClick={handleCopyLink}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-[#7B1F1F] text-[#E5DFD3] text-xs font-medium rounded-xl hover:bg-[#5C1616] transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#D8A230]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Link Copied!' : 'Copy Link'}</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // Default Inline Variant (for Footer / Sections)
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-2 mb-3">
        <img src="/chilli.png" alt="Nagu Chilli Logo" className="w-4 h-4 object-contain inline-block" />
        <span className="text-xs font-serif font-semibold text-[#7B1F1F] tracking-wide">
          Share Nagu's Spice House
        </span>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {shareLinks.map((platform) => {
          const Icon = platform.icon;
          return (
            <a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-[11px] font-semibold transition-all duration-300 shadow-xs ${platform.bgColor}`}
              title={`Share on ${platform.name}`}
            >
              <Icon className="w-3.5 h-3.5 shrink-0" />
              <span>{platform.name}</span>
            </a>
          );
        })}

        {/* Copy Link Button */}
        <button
          onClick={handleCopyLink}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#231714]/20 bg-[#231714]/5 hover:bg-[#231714]/15 text-[#231714] text-[11px] font-semibold transition-all duration-300 cursor-pointer shadow-xs"
          title="Copy Store Link"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-[#7B1F1F]" />
              <span className="text-[#7B1F1F]">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Link</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
