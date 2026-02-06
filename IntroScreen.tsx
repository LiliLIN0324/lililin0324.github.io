import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {
  onFinish: () => void;
};

export default function IntroScreen({ onFinish }: Props) {
  const [show, setShow] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // 使用 Ref 记录鼠标位置，避免触发 React 重新渲染，保证 Canvas 性能
  const mouse = useRef({ x: -1000, y: -1000 }); 

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // 监听鼠标移动
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    // 监听触摸移动
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    resize();

    class Particle {
      x: number; y: number; 
      baseX: number; baseY: number; // 记录初始位置，用于回弹
      vx: number; vy: number; 
      size: number;
      density: number; // 粒子“重量”，影响逃逸速度

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 0.5;
        this.density = (Math.random() * 30) + 1;
      }

      update() {
        // 基础漂移
        this.x += this.vx;
        this.y += this.vy;

        // 边界回弹
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // --- 核心交互逻辑：排斥力 ---
        let dx = mouse.current.x - this.x;
        let dy = mouse.current.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        
        // 交互距离限制（150像素内产生反应）
        const maxDistance = 150;
        let force = (maxDistance - distance) / maxDistance;
        
        if (distance < maxDistance) {
          // 粒子逃离鼠标的速度
          this.x -= forceDirectionX * force * this.density * 0.5;
          this.y -= forceDirectionY * force * this.density * 0.5;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < 120; i++) particles.push(new Particle());

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {show && (
        <motion.div
          key="intro-screen"
          onClick={() => setShow(false)}
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            filter: "blur(30px)",
            transition: { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] } 
          }}
          className="fixed inset-0 z-[9999] bg-black cursor-pointer overflow-hidden flex flex-col items-center justify-center"
        >
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full " />
          <div className="relative z-20 text-center  select-none">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ duration: 2 }}
              className="text-white font-extralight text-lg md:text-sm uppercase tracking-[0.8em]"
            >
              LILI LIN's Space 林丽丽
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            className="absolute bottom-12 text-[10px] text-white font-light tracking-[0.5em] uppercase"
          >
            Touch the stars to enter
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}