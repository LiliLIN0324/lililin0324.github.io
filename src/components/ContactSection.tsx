export const ContactSection = () => {
  return (
    <div className="shell flex h-full flex-col items-center justify-center py-20 text-center">
      <div className="animate-rise-in max-w-md space-y-8">
        <div className="flex justify-center">
          <span className="icon-btn h-14 w-14">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.4} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </span>
        </div>

        <div className="space-y-3">
          <p className="eyebrow">Contact</p>
          <h2 className="text-display-sm">Let's work together</h2>
          <p className="max-w-measure text-base leading-relaxed text-ink-2">
            Interested in collaboration, research, or just want to say hello?
            Reach out anytime.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 pt-4">
          <a
            href="mailto:lily1326685527@gmail.com?subject=Research%20Collaboration"
            className="btn-solid"
          >
            Send message
            <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
          <p className="font-mono text-[11px] uppercase tracking-eyebrow text-ink-3">
            lily1326685527@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};
