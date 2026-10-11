import data from './catalog-family-figures.json';

export interface FamilyFigures {
  figures: Partial<{
    applicationArea: string;
    applicationScenario: string;
    applicationsFigure: string;
    materialsFigure: string;
    surfaceFigure: string;
    whyBanner: string;
    processFigure: string;
    /** HTX「优势」图文块侧栏图（如方顶针圆针/方针对比） */
    advantagesFigure: string;
  }>;
  highlightIcons: string[];
  applicationTiles: string[];
}

const figures = data as Record<string, FamilyFigures>;

export const familyFiguresFor = (productId: string): FamilyFigures | undefined => figures[productId];
