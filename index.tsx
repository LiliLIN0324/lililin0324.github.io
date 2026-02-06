import { useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import IntroScreen from './IntroScreen';
import MainPage from './MainPage';

export default function Index() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      {/* 主系统永远存在，提前加载 */}
      <Router>
        <MainPage />
      </Router>

      {/* Intro 只是遮罩层 */}
      {!entered && (
        <IntroScreen onFinish={() => setEntered(true)} />
      )}
    </>
  );
}
