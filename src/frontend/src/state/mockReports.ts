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

export const mockReports: MockReport[] = [
  {
    id: '1',
    studyId: 'STUDY-2026-001',
    modality: 'X-Ray',
    date: '2026-02-07',
    status: 'normal',
    confidence: 94,
    findings: 'No acute abnormalities detected. Lung fields are clear bilaterally with no evidence of consolidation, effusion, or pneumothorax. Cardiac silhouette is within normal limits.',
    notes: 'Routine chest X-ray for annual physical examination',
    preview: ''
  },
  {
    id: '2',
    studyId: 'STUDY-2026-002',
    modality: 'CT',
    date: '2026-02-05',
    status: 'abnormal',
    confidence: 87,
    findings: 'Small nodule identified in the right upper lobe measuring approximately 6mm. Recommend follow-up CT in 3 months to assess for interval change.',
    notes: 'Patient with history of smoking, follow-up recommended',
    preview: ''
  },
  {
    id: '3',
    studyId: 'STUDY-2026-003',
    modality: 'MRI',
    date: '2026-02-03',
    status: 'normal',
    confidence: 92,
    findings: 'Brain MRI demonstrates normal gray-white matter differentiation. No evidence of acute infarct, hemorrhage, or mass effect. Ventricles are normal in size and configuration.',
    notes: 'Headache evaluation, no concerning findings',
    preview: ''
  },
  {
    id: '4',
    studyId: 'STUDY-2026-004',
    modality: 'X-Ray',
    date: '2026-02-01',
    status: 'abnormal',
    confidence: 91,
    findings: 'Mild degenerative changes noted in the lumbar spine with disc space narrowing at L4-L5. No acute fracture or dislocation identified.',
    notes: 'Lower back pain evaluation',
    preview: ''
  },
  {
    id: '5',
    studyId: 'STUDY-2026-005',
    modality: 'Ultrasound',
    date: '2026-01-30',
    status: 'normal',
    confidence: 96,
    findings: 'Abdominal ultrasound shows normal liver echotexture and size. Gallbladder, pancreas, spleen, and kidneys appear unremarkable. No free fluid identified.',
    notes: 'Routine abdominal screening',
    preview: ''
  },
  {
    id: '6',
    studyId: 'STUDY-2026-006',
    modality: 'CT',
    date: '2026-01-28',
    status: 'critical',
    confidence: 98,
    findings: 'Large pulmonary embolism identified in the right main pulmonary artery with extension into segmental branches. Immediate clinical correlation and treatment recommended.',
    notes: 'Emergency scan - patient with acute chest pain and shortness of breath',
    preview: ''
  },
  {
    id: '7',
    studyId: 'STUDY-2026-007',
    modality: 'X-Ray',
    date: '2026-01-25',
    status: 'normal',
    confidence: 93,
    findings: 'Knee X-ray demonstrates normal joint space and alignment. No fracture, dislocation, or significant degenerative changes identified.',
    notes: 'Sports injury evaluation',
    preview: ''
  },
  {
    id: '8',
    studyId: 'STUDY-2026-008',
    modality: 'MRI',
    date: '2026-01-22',
    status: 'abnormal',
    confidence: 89,
    findings: 'Partial thickness tear of the supraspinatus tendon. Mild subacromial bursitis noted. No full-thickness tear or significant muscle atrophy.',
    notes: 'Shoulder pain, possible rotator cuff injury',
    preview: ''
  }
];
