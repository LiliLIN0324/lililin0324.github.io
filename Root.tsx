import { useState } from 'react';
import IntroScreen from './IntroScreen';
import App from './src/App.tsx';

export default function Root() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      {/* App 永远先加载，但不可交互 */}
      <div className={entered ? '' : 'pointer-events-none'}>
        <App />
      </div>

      {/* Intro 覆盖在最顶层 */}
      {!entered && (
        <IntroScreen onFinish={() => setEntered(true)} />
      )}
    </>
  );
}
