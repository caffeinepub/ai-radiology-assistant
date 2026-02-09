import { Link } from '@tanstack/react-router';
import { ArrowLeft, Brain, AlertTriangle, CheckCircle, Lightbulb, MessageSquare } from 'lucide-react';

export default function AIExplanationPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link
            to="/result"
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Back to results"
          >
            <ArrowLeft size={24} />
          </Link>
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold">AI Explanation</h1>
            <p className="text-muted-foreground mt-1">
              Understanding the analysis and reasoning
            </p>
          </div>
        </div>

        {/* What the Model Saw */}
        <div className="bg-card rounded-lg border border-border p-6 shadow-medical">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Brain className="text-primary" size={20} />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-3">What the Model Detected</h2>
              <div className="space-y-3 text-foreground/90">
                <p>
                  The AI model analyzed the radiological image using deep learning algorithms trained on millions of medical images. The analysis focused on identifying anatomical structures, tissue densities, and potential abnormalities.
                </p>
                <p>
                  Key areas examined include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Lung parenchyma and airways for signs of consolidation or infiltrates</li>
                  <li>Cardiac silhouette size and contour</li>
                  <li>Mediastinal structures and positioning</li>
                  <li>Diaphragm contours and costophrenic angles</li>
                  <li>Bone structures for fractures or lesions</li>
                  <li>Soft tissue abnormalities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Why This Conclusion */}
        <div className="bg-card rounded-lg border border-border p-6 shadow-medical">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
              <CheckCircle className="text-accent" size={20} />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-3">Why This Conclusion</h2>
              <div className="space-y-3 text-foreground/90">
                <p>
                  The model determined a normal finding based on several key factors:
                </p>
                <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="text-accent flex-shrink-0 mt-1" size={16} />
                    <p><strong>Clear lung fields:</strong> No opacities, nodules, or masses detected in either lung field</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="text-accent flex-shrink-0 mt-1" size={16} />
                    <p><strong>Normal cardiac size:</strong> Cardiothoracic ratio within expected parameters</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="text-accent flex-shrink-0 mt-1" size={16} />
                    <p><strong>Intact bone structures:</strong> No fractures or lytic lesions identified</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="text-accent flex-shrink-0 mt-1" size={16} />
                    <p><strong>Appropriate positioning:</strong> Adequate inspiration and proper patient positioning</p>
                  </div>
                </div>
                <p>
                  The confidence score of 94% reflects the model's high certainty based on clear visualization of all anatomical structures and absence of abnormal findings.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Limitations */}
        <div className="bg-warning/10 border border-warning/30 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-warning/20 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="text-warning" size={20} />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-3 text-warning">Limitations & Disclaimer</h2>
              <div className="space-y-3 text-foreground/90">
                <p>
                  While our AI model demonstrates high accuracy, it is important to understand its limitations:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>AI analysis is a supplementary tool and should not replace professional medical judgment</li>
                  <li>The model may not detect subtle or rare abnormalities not well-represented in training data</li>
                  <li>Image quality, positioning, and technical factors can affect analysis accuracy</li>
                  <li>Clinical correlation with patient history and symptoms is essential</li>
                  <li>All findings must be verified by a qualified radiologist before clinical decision-making</li>
                </ul>
                <p className="font-medium text-warning mt-4">
                  This tool is designed to assist, not replace, qualified medical professionals. Always consult with a licensed radiologist for definitive interpretation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Next Steps */}
        <div className="bg-card rounded-lg border border-border p-6 shadow-medical">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-info/10 flex items-center justify-center flex-shrink-0">
              <Lightbulb className="text-info" size={20} />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-3">Recommended Next Steps</h2>
              <div className="space-y-3 text-foreground/90">
                <p>Based on the analysis, we recommend the following actions:</p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Have a qualified radiologist review and confirm the AI findings</li>
                  <li>Correlate results with patient clinical presentation and history</li>
                  <li>Document findings in the patient's medical record</li>
                  <li>Consider follow-up imaging if clinically indicated</li>
                  <li>Discuss results with the referring physician</li>
                </ol>
                <p className="mt-4">
                  For questions about specific findings or to explore the analysis further, use our AI chatbot to get additional insights and clarifications.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/result"
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-card border-2 border-border rounded-lg font-semibold hover:bg-muted transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Results
          </Link>
          <Link
            to="/chat"
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-medical"
          >
            <MessageSquare size={20} />
            Ask Questions
          </Link>
        </div>
      </div>
    </div>
  );
}
