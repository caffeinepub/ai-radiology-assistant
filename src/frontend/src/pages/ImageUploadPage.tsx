import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Upload, FileImage, X, Loader2 } from 'lucide-react';
import { useStudyStore } from '../state/mockStudyState';

export default function ImageUploadPage() {
  const navigate = useNavigate();
  const { setStudy, setProcessing } = useStudyStore();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [studyId, setStudyId] = useState('');
  const [modality, setModality] = useState('');
  const [notes, setNotes] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const clearFile = () => {
    setSelectedFile(null);
    setPreview(null);
  };

  const handleAnalyze = async () => {
    if (!selectedFile) return;

    setIsAnalyzing(true);
    setProcessing(true);

    // Store study data
    setStudy({
      file: selectedFile,
      studyId: studyId || `STUDY-${Date.now()}`,
      modality: modality || 'X-Ray',
      notes,
      preview: preview || ''
    });

    // Simulate processing delay
    setTimeout(() => {
      setIsAnalyzing(false);
      navigate({ to: '/result' });
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-3">Upload Medical Image</h1>
          <p className="text-lg text-muted-foreground">
            Upload radiological images for AI-powered analysis
          </p>
        </div>

        <div className="space-y-6">
          {/* Upload Area */}
          <div className="bg-card rounded-lg border-2 border-dashed border-border p-8 shadow-medical">
            {!selectedFile ? (
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Upload className="text-primary" size={32} />
                </div>
                <div>
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <span className="text-primary font-semibold hover:underline">
                      Click to upload
                    </span>
                    <span className="text-muted-foreground"> or drag and drop</span>
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Supported formats: DICOM, PNG, JPEG, TIFF (Max 50MB)
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  {preview && (
                    <img
                      src={preview}
                      alt="Preview"
                      className="w-32 h-32 object-cover rounded-lg border border-border"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <FileImage className="text-primary flex-shrink-0" size={20} />
                        <span className="font-medium truncate">{selectedFile.name}</span>
                      </div>
                      <button
                        onClick={clearFile}
                        className="p-1 hover:bg-muted rounded transition-colors flex-shrink-0"
                        aria-label="Remove file"
                      >
                        <X size={20} />
                      </button>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Metadata Form */}
          <div className="bg-card rounded-lg border border-border p-6 shadow-medical space-y-4">
            <h2 className="text-xl font-semibold mb-4">Study Information (Optional)</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="study-id" className="text-sm font-medium">
                  Study ID
                </label>
                <input
                  id="study-id"
                  type="text"
                  value={studyId}
                  onChange={(e) => setStudyId(e.target.value)}
                  placeholder="e.g., STUDY-2026-001"
                  className="w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="modality" className="text-sm font-medium">
                  Modality
                </label>
                <select
                  id="modality"
                  value={modality}
                  onChange={(e) => setModality(e.target.value)}
                  className="w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select modality</option>
                  <option value="X-Ray">X-Ray</option>
                  <option value="CT">CT Scan</option>
                  <option value="MRI">MRI</option>
                  <option value="Ultrasound">Ultrasound</option>
                  <option value="PET">PET Scan</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="notes" className="text-sm font-medium">
                Clinical Notes
              </label>
              <textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Add any relevant clinical information or observations..."
                rows={4}
                className="w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
            </div>
          </div>

          {/* Action Button */}
          <div className="flex justify-end">
            <button
              onClick={handleAnalyze}
              disabled={!selectedFile || isAnalyzing}
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-medical"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Analyzing...
                </>
              ) : (
                <>
                  <Upload size={20} />
                  Analyze Image
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
