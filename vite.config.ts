import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  base: './',
  plugins: [
    react(),
    visualizer({
      filename: './dist/stats.html',
      open: true,
      gzipSize: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'docs',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('three')) return 'threejs';
            if (id.includes('maplibre')) return 'maplibre';
            if (id.includes('plotly') || id.includes('react-plotly')) return 'plotly';
            if (id.includes('leaflet') || id.includes('react-leaflet')) return 'leaflet';
            if (id.includes('framer-motion')) return 'framer';
            if (id.includes('lucide-react')) return 'icons';
            if (id.includes('react-markdown') || id.includes('remark') || id.includes('rehype')) return 'markdown';
            if (id.includes('georaster') || id.includes('shpjs')) return 'geo';
            if (id.includes('react') || id.includes('react-dom') || id.includes('scheduler')) return 'react-vendor';
            return 'vendor';
          }

          if (id.includes('/src/components/URplatform')) return 'URplatform';
          if (id.includes('/src/components/App')) return 'App';
        }
      }
    }
  }
});

