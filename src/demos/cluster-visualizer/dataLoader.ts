import { Cluster, DataPoint } from './types';
import { getClusterColor } from './constants';

export const parseCSVFiles = async (files: File[]): Promise<Cluster[]> => {
  const clusters: Cluster[] = [];

  const sortedFiles = files.sort((a, b) => {
    const numA = extractClusterNumber(a.name);
    const numB = extractClusterNumber(b.name);
    return numA - numB;
  });

  for (let i = 0; i < sortedFiles.length; i++) {
    const file = sortedFiles[i];
    const text = await file.text();
    const data = parseCSVContent(text);

    const clusterId = extractClusterNumber(file.name) ?? i;
    
    clusters.push({
      id: clusterId,
      name: file.name.replace('.csv', ''),
      data: data,
      color: getClusterColor(i),
    });
  }

  return clusters;
};

const extractClusterNumber = (filename: string): number => {
  const match = filename.match(/Cluster\s*(\d+)/i);
  return match ? parseInt(match[1], 10) : 999;
};

export const parseCSVContent = (content: string, includeExtra = false): DataPoint[] => {
  const lines = content.trim().split("\n");
  const header = lines[0].split(",");

  const dateIdx = header.indexOf("Date");
  const meanDayIdx = header.indexOf("Mean_Day");
  const meanNightIdx = header.indexOf("Mean_Night");
  const P10DayIdx = header.indexOf("P10_Day");
  const P25DayIdx = header.indexOf("P25_Day");
  const P75DayIdx = header.indexOf("P75_Day");
  const P90DayIdx = header.indexOf("P90_Day");
  const P10NightIdx = header.indexOf("P10_Night");
  const P25NightIdx = header.indexOf("P25_Night");
  const P75NightIdx = header.indexOf("P75_Night");
  const P90NightIdx = header.indexOf("P90_Night");
  
  if (dateIdx === -1 || meanDayIdx === -1 || meanNightIdx === -1) {
    console.error("CSV is missing required columns: Date / Mean_Day / Mean_Night");
    return [];
  }
  const data: DataPoint[] = [];

    for (let i = 1; i < lines.length; i++) {
      const row = lines[i].split(",");
      const point: DataPoint = {
        date: Number(row[dateIdx]),
        meanDay: Number(row[meanDayIdx]),
        meanNight: Number(row[meanNightIdx]),
         };

      if (includeExtra) {
        if (P10DayIdx !== -1) point.P10Day = Number(row[P10DayIdx]);
        if (P25DayIdx !== -1) point.P25Day = Number(row[P25DayIdx]);
        if (P75DayIdx !== -1) point.P75Day = Number(row[P75DayIdx]);
        if (P90DayIdx !== -1) point.P90Day = Number(row[P90DayIdx]);
        if (P10NightIdx !== -1) point.P10Night = Number(row[P10NightIdx]);
        if (P25NightIdx !== -1) point.P25Night = Number(row[P25NightIdx]);
        if (P75NightIdx !== -1) point.P75Night = Number(row[P75NightIdx]);
        if (P90NightIdx !== -1) point.P90Night = Number(row[P90NightIdx]);
      }

      data.push(point);
    }

  return data;
};

export const fetchLocalClusterData = async (k: number, includeExtra = false): 
  Promise<Cluster[]> => {
  const clusters: Cluster[] = [];
  const promises: Promise<void>[] = [];

  for (let i = 0; i < k; i++) {
    const filename = `K_${k}_Cluster${i}_3D_Data.csv`;
    const url = `/data/K_${k}/${filename}`;

    const p = fetch(url)
      .then(res => {
        if (!res.ok) {
          console.warn(`File not found or unreachable: ${url}`);
          return null;
        }
        return res.text();
      })
      .then(text => {
        if (!text) return;
        
        const data = parseCSVContent(text, includeExtra);
        if (data.length > 0) {
          clusters.push({
            id: i,
            name: filename.replace('.csv', ''),
            data,
            color: getClusterColor(i)
          });
        }
      })
      .catch(err => {
        console.warn(`Error loading cluster ${i}:`, err);
      });

    promises.push(p);
  }

  await Promise.all(promises);

  return clusters.sort((a, b) => a.id - b.id);
};
