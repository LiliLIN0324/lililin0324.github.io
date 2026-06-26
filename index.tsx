import { useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import IntroScreen from './IntroScreen';
import MainPage from './MainPage';

export default function Index() {
  const [entered, setEntered] = useState(true); // 默认为 true，跳过星空屏保

  return (
    <>
      {/* 主系统 */}
      <Router>
        <MainPage />
      </Router>

      {/* Intro 遮罩层，后渲染以确保在顶部 */}
      {!entered && (
        <IntroScreen onFinish={() => setEntered(true)} />
      )}
    </>
  );
}
