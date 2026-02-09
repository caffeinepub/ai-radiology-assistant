import { create } from 'zustand';

export interface StudyData {
  file: File;
  studyId: string;
  modality: string;
  notes: string;
  preview: string;
}

export interface MockReport {
  id: string;
  studyId: string;
  modality: string;
  date: string;
  status: 'normal' | 'abnormal' | 'critical';
  confidence: number;
  findings: string;
  notes: string;
  preview: string;
}

interface StudyStore {
  study: StudyData | null;
  processing: boolean;
  selectedReport: MockReport | null;
  setStudy: (study: StudyData) => void;
  setProcessing: (processing: boolean) => void;
  setSelectedReport: (report: MockReport | null) => void;
  clearStudy: () => void;
}

export const useStudyStore = create<StudyStore>((set) => ({
  study: null,
  processing: false,
  selectedReport: null,
  setStudy: (study) => set({ study, selectedReport: null }),
  setProcessing: (processing) => set({ processing }),
  setSelectedReport: (report) => set({ selectedReport: report }),
  clearStudy: () => set({ study: null, processing: false, selectedReport: null })
}));
