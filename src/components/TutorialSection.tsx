import { Link } from 'react-router-dom';

export const TutorialSection = () => {
  return (
    <div className="shell flex h-full flex-col items-center justify-center py-20 text-center">
      <div className="animate-rise-in max-w-md space-y-8">
        <div className="flex justify-center">
          <span className="icon-btn h-14 w-14">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.4} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </span>
        </div>

        <div className="space-y-3">
          <p className="eyebrow">Tutorials</p>
          <h2 className="text-display-sm">Coming soon</h2>
          <p className="max-w-measure text-base leading-relaxed text-ink-2">
            Educational content is in the works. In the meantime, check out the existing tutorials in the index.
          </p>
        </div>

        <Link to="/tutorial" className="btn-ghost">
          Browse tutorials →
        </Link>
      </div>
    </div>
  );
};
