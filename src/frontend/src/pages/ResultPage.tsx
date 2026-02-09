import { Link, useNavigate } from '@tanstack/react-router';
import { Brain, MessageSquare, FileText, AlertCircle, CheckCircle, Info } from 'lucide-react';
import { useStudyStore } from '../state/mockStudyState';
import { useEffect, useState } from 'react';

export default function ResultPage() {
  const navigate = useNavigate();
  const { study, processing, setProcessing, selectedReport } = useStudyStore();
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (processing) {
      const timer = setTimeout(() => {
        setProcessing(false);
        setShowResults(true);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      setShowResults(true);
    }
  }, [processing, setProcessing]);

  // Use selected report from history or current study
  const currentData = selectedReport || study;

  if (!currentData && !processing) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto">
            <FileText className="text-muted-foreground" size={32} />
          </div>
          <h1 className="text-2xl font-bold">No Analysis Available</h1>
          <p className="text-muted-foreground">
            Please upload an image to start analysis or select a report from history.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/upload"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Upload Image
            </Link>
            <Link
              to="/history"
              className="inline-flex items-center gap-2 px-6 py-3 bg-card border-2 border-border rounded-lg font-semibold hover:bg-muted transition-colors"
            >
              View History
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (processing || !showResults) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto animate-pulse">
            <Brain className="text-primary" size={32} />
          </div>
          <h1 className="text-2xl font-bold">Analyzing Image...</h1>
          <p className="text-muted-foreground">
            Our AI is processing your medical image. This may take a few moments.
          </p>
          <div className="w-full max-w-xs mx-auto h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-primary animate-pulse" style={{ width: '70%' }} />
          </div>
        </div>
      </div>
    );
  }

  // At this point, currentData is guaranteed to be non-null
  if (!currentData) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-2">Analysis Results</h1>
            <p className="text-muted-foreground">
              Study ID: {currentData.studyId} • {currentData.modality}
            </p>
          </div>
        </div>

        {/* Summary Card */}
        <div className="bg-card rounded-lg border border-border p-6 shadow-medical">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
              <CheckCircle className="text-accent" size={24} />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-2">Primary Findings</h2>
              <p className="text-lg text-foreground/90 leading-relaxed">
                No acute abnormalities detected. The imaging study demonstrates normal anatomical structures with appropriate density and positioning. Lung fields are clear bilaterally with no evidence of consolidation, effusion, or pneumothorax.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
              <CheckCircle size={14} />
              Normal
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              <Info size={14} />
              Confidence: 94%
            </span>
          </div>
        </div>

        {/* Detailed Findings */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Key Measurements */}
          <div className="bg-card rounded-lg border border-border p-6 shadow-medical">
            <h3 className="text-xl font-semibold mb-4">Key Measurements</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">Cardiac Silhouette</span>
                <span className="font-medium">Normal size</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">Mediastinum</span>
                <span className="font-medium">Within normal limits</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">Diaphragm</span>
                <span className="font-medium">Normal contour</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground">Bone Structures</span>
                <span className="font-medium">Intact</span>
              </div>
            </div>
          </div>

          {/* Image Preview */}
          <div className="bg-card rounded-lg border border-border p-6 shadow-medical">
            <h3 className="text-xl font-semibold mb-4">Image Preview</h3>
            {currentData.preview ? (
              <img
                src={currentData.preview}
                alt="Medical scan"
                className="w-full h-64 object-cover rounded-lg border border-border"
              />
            ) : (
              <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
                <FileText className="text-muted-foreground" size={48} />
              </div>
            )}
          </div>
        </div>

        {/* Clinical Notes */}
        {currentData.notes && (
          <div className="bg-card rounded-lg border border-border p-6 shadow-medical">
            <h3 className="text-xl font-semibold mb-3">Clinical Notes</h3>
            <p className="text-muted-foreground">{currentData.notes}</p>
          </div>
        )}

        {/* Disclaimer */}
        <div className="bg-warning/10 border border-warning/30 rounded-lg p-4 flex gap-3">
          <AlertCircle className="text-warning flex-shrink-0 mt-0.5" size={20} />
          <div className="text-sm">
            <p className="font-medium text-warning mb-1">Important Notice</p>
            <p className="text-foreground/80">
              This AI analysis is intended to assist medical professionals and should not replace clinical judgment. 
              All findings should be reviewed by a qualified radiologist.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/explanation"
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-medical"
          >
            <Brain size={20} />
            View AI Explanation
          </Link>
          <Link
            to="/chat"
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors shadow-medical"
          >
            <MessageSquare size={20} />
            Ask Questions
          </Link>
        </div>
      </div>
    </div>
  );
}
