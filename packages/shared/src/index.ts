// packages/shared/src/index.ts

export const APP_NAME = "LangForge";
export const PROJECT_PHASE = "Beta - Study Planner Engine";

export type JLPTLevel = 'N5' | 'N4' | 'N3' | 'N2' | 'N1';

export interface LevelRequirement {
  vocabulary: number;
  kanji: number;
  grammarPoints: number;
  studyHours: number;
}

// Dados baseados em médias oficiais do JLPT
export const JLPT_REQUIREMENTS: Record<JLPTLevel, LevelRequirement> = {
  'N5': { vocabulary: 800, kanji: 100, grammarPoints: 80, studyHours: 150 },
  'N4': { vocabulary: 1500, kanji: 300, grammarPoints: 130, studyHours: 300 },
  'N3': { vocabulary: 3750, kanji: 650, grammarPoints: 200, studyHours: 450 },
  'N2': { vocabulary: 6000, kanji: 1000, grammarPoints: 350, studyHours: 700 },
  'N1': { vocabulary: 10000, kanji: 2000, grammarPoints: 500, studyHours: 1000 },
};

export interface UserProgress {
  currentLevel: JLPTLevel;
  targetLevel: JLPTLevel;
  dailyStreak: number;
}

export const userProfile: UserProgress = {
  currentLevel: 'N5',
  targetLevel: 'N3',
  dailyStreak: 12,
};