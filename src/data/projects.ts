import neurotopiaMd from './projects/planning/01_neurotopia.md?raw';
import clusterVisualizer3dMd from './projects/planning/02_cluster-visualizer-3d.md?raw';
import knowledgeGraphUrbanPlanningMd from './projects/planning/03_knowledge-graph-urban-planning.md?raw';
import localClimateZonesUrbanHeatResilienceMd from './projects/planning/04_local-climate-zones-urban-heat-resilience.md?raw';
import urbanHeatResilienceMachineLearningMd from './projects/planning/05_urban-heat-resilience-machine-learning.md?raw';
import participatoryUrbanRegenerationEmpoweredByArtificialIntelligenceMd from './projects/planning/06_participatory-urban-regeneration-empowered-by-artificial-intelligence.md?raw';
import heatmapperMd from './projects/planning/07_heatmapper.md?raw';


import dragonDiffussionMd from './projects/design/01_dragon-diffussion.md?raw';
import genshotAIVideoGenerationToolMd from './projects/design/02_genshot-AI-video-generation-tool.md?raw';
import genstyleMd from './projects/design/03_genstyle.md?raw';
import baziFengshuiAnalysisMd from './projects/design/04_bazi-fengshui-analysis.md?raw';
import riffleAiGameGenerationToolMd from './projects/design/05_riffle-ai-game-generation-tool.md?raw';
import earlyCampusExperienceMd from './projects/design/06_early-campus-experience.md?raw';

import gameJam72HourMd from './projects/games/01_72-hour-game-jam.md?raw';
import peaceEliteHustCampusMd from './projects/games/02_peace-elite-hust-campus.md?raw';
import bmwMetaIslandMd from './projects/games/03_bmw-meta-island.md?raw';
import guangzhouXinyuanTechMd from './projects/games/04_guangzhou-xinyuan-tech.md?raw';
import kittylovecarrotsMd from './projects/games/05_kittylovecarrots.md?raw';
import howToUseUnityMakingWechatMinigamesMd from './projects/games/06_how-to-use-unity-making-wechat-minigames.md?raw';

import litflowMd from './projects/platform/01_litflow.md?raw';
import boxUpMyStuffInCyberspaceMd from './projects/platform/02_box-up-my-stuff-in-cyberspace.md?raw';
import epsteinMysteryArchiveMd from './projects/platform/03_epstein-mystery-archive.md?raw';

import howToAddOpenstreetmapInWebsiteMd from './projects/tutorials/01_how-to-add-openstreetmap-in-website.md?raw';
import howToGetSequentialEventsFromPhotoByPhoneMd from './projects/tutorials/02_how-to-get-sequential-events-from-photo-by-phone.md?raw';
import howToVisualizePhotoGeolocationDataOnMapMd from './projects/tutorials/03_how-to-visualize-photo-geolocation-data-on-map.md?raw';
import howToConductTimeGeoSequentialClusteringFromAlbumMd from './projects/tutorials/04_how-to-conduct-time-geo-sequential-clustering-from-album.md?raw';
import howToConstructDockerMd from './projects/tutorials/05_how-to-construct-docker.md?raw';
import howToConstructWorkflowInDifyMd from './projects/tutorials/06_how-to-construct-workflow-in-dify.md?raw';
import howToConstructLightBackendWorkflowMd from './projects/tutorials/07_how-to-construct-light-backend-workflow.md?raw';
import whatsMcpMd from './projects/tutorials/08_whats-mcp.md?raw';
import howToChooseSuitableDatabaseMd from './projects/tutorials/09_how-to-choose-suitable-database.md?raw';



function parseMarkdown(markdownContent: string) {
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---/;
  const match = markdownContent.match(frontmatterRegex);
  
  let data: Record<string, any> = {};
  let content = markdownContent;
  
  if (match) {
    const frontmatterStr = match[1];
    content = markdownContent.slice(match[0].length).trim();
    
    const lines = frontmatterStr.split(/\r?\n/);
    let currentKey: string | null = null;
    let currentValue: string[] = [];
    
    lines.forEach(line => {
      const trimmedLine = line.trim();
      
      if (trimmedLine === '') {
        return;
      }
      
      const colonIndex = line.indexOf(':');
      
      if (colonIndex !== -1 && !line.startsWith(' ')) {
        if (currentKey) {
          data[currentKey] = currentValue.join('\n');
        }
        
        currentKey = line.slice(0, colonIndex).trim();
        let value = line.slice(colonIndex + 1).trim();
        
        if (value === '|') {
          currentValue = [];
        } else {
          data[currentKey] = value;
          currentKey = null;
          currentValue = [];
        }
      } else if (currentKey && line.startsWith('  ')) {
        currentValue.push(line.slice(2));
      }
    });
    
    if (currentKey && currentValue.length > 0) {
      data[currentKey] = currentValue.join('\n');
    }
    
    Object.keys(data).forEach(key => {
      let value: any = data[key];
      
      if (typeof value === 'string') {
        value = value.trim();
        
        if (value.startsWith('"') && value.endsWith('"')) {
          value = value.slice(1, -1);
        }
        
        if (value.startsWith('[') && value.endsWith(']')) {
          try {
            data[key] = JSON.parse(value);
          } catch {
            data[key] = [value.slice(1, -1).trim()];
          }
        } else if (value === 'true') {
          data[key] = true;
        } else if (value === 'false') {
          data[key] = false;
        } else if (!isNaN(Number(value)) && value.trim() !== '') {
          data[key] = Number(value);
        } else {
          data[key] = value;
        }
      }
    });
  }
  
  return {
    id: data.id || '',
    slug: data.slug || '',
    title: data.title || '',
    category: data.category || '',
    year: data.year || '',
    description: data.description || '',
    tech: data.tech || [],
    abstract: data.abstract || '',
    challenge: data.challenge || '',
    solution: data.solution || '',
    hasDemo: data.hasDemo || false,
    icon: data.icon || '',
    code: data.code || '',
    logo: data.icon || '',
    image: data.image || [],
    content: content
  };
}

function createProject(mdContent: string) {
  const parsed = parseMarkdown(mdContent);
  return {
    id: parsed.id,
    slug: parsed.slug,
    title: parsed.title,
    category: parsed.category,
    year: parsed.year,
    description: parsed.description,
    tech: parsed.tech,
    hasDemo: parsed.hasDemo,
    details: {
      abstract: parsed.abstract,
      description: parsed.description,
      challenge: parsed.challenge,
      solution: parsed.solution,
      logo: parsed.logo,
      icon: parsed.icon,
      code: parsed.code,
      image: parsed.image,
      content: parsed.content
    }
  };
}

export const projects = [
  createProject(neurotopiaMd),
  createProject(clusterVisualizer3dMd),
  createProject(knowledgeGraphUrbanPlanningMd),
  createProject(localClimateZonesUrbanHeatResilienceMd),
  createProject(urbanHeatResilienceMachineLearningMd),
  createProject(participatoryUrbanRegenerationEmpoweredByArtificialIntelligenceMd),
  createProject(heatmapperMd)
];

export const designProjects = [
  createProject(dragonDiffussionMd),
  createProject(genshotAIVideoGenerationToolMd),
  createProject(genstyleMd),
  createProject(baziFengshuiAnalysisMd),
  createProject(riffleAiGameGenerationToolMd),
  createProject(earlyCampusExperienceMd)
];

export const gameProjects = [
  createProject(gameJam72HourMd),
  createProject(peaceEliteHustCampusMd),
  createProject(bmwMetaIslandMd),
  createProject(guangzhouXinyuanTechMd),
  createProject(kittylovecarrotsMd),
  createProject(howToUseUnityMakingWechatMinigamesMd)
];

export const platformProjects = [
  createProject(litflowMd),
  createProject(boxUpMyStuffInCyberspaceMd),
  createProject(epsteinMysteryArchiveMd)
];

export const tutorialProjects = [
  createProject(howToAddOpenstreetmapInWebsiteMd),
  createProject(howToGetSequentialEventsFromPhotoByPhoneMd),
  createProject(howToVisualizePhotoGeolocationDataOnMapMd),
  createProject(howToConductTimeGeoSequentialClusteringFromAlbumMd),
  createProject(howToConstructDockerMd),
  createProject(howToConstructWorkflowInDifyMd),
  createProject(howToConstructLightBackendWorkflowMd),
  createProject(whatsMcpMd),
  createProject(howToChooseSuitableDatabaseMd)
];
