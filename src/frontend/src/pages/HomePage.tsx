import { Link } from '@tanstack/react-router';
import { Upload, History, Activity, FileText, MessageSquare, Brain } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-[calc(100vh-8rem)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-balance">
                  AI Radiology Assistant
                </h1>
                <p className="text-xl text-muted-foreground text-balance max-w-xl">
                  Advanced AI-powered analysis for medical imaging. Upload radiological images and receive detailed insights with explainable AI.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/upload"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-medical"
                >
                  <Upload size={20} />
                  Upload Image
                </Link>
                <Link
                  to="/history"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-card text-foreground border-2 border-border rounded-lg font-semibold hover:bg-muted transition-colors"
                >
                  <History size={20} />
                  View History
                </Link>
              </div>
            </div>

            <div className="relative">
              <img
                src="/assets/generated/radiology-hero.dim_1600x900.png"
                alt="AI Radiology Analysis"
                className="w-full h-auto rounded-lg shadow-medical-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered workflow provides comprehensive analysis in four simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-card rounded-lg p-6 shadow-medical border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Upload className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Upload</h3>
              <p className="text-muted-foreground">
                Upload your radiological images with optional study metadata for comprehensive analysis.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-card rounded-lg p-6 shadow-medical border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Activity className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Analysis</h3>
              <p className="text-muted-foreground">
                Our AI analyzes the images and generates detailed findings with confidence scores.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-card rounded-lg p-6 shadow-medical border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Brain className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Explanation</h3>
              <p className="text-muted-foreground">
                Review AI-generated explanations that detail what the model detected and why.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-card rounded-lg p-6 shadow-medical border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MessageSquare className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">4. Discuss</h3>
              <p className="text-muted-foreground">
                Ask questions and get clarifications through our interactive AI chatbot.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools designed for medical professionals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                <FileText className="text-accent" size={28} />
              </div>
              <h3 className="text-xl font-semibold">Detailed Reports</h3>
              <p className="text-muted-foreground">
                Comprehensive analysis reports with measurements, findings, and confidence scores.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                <History className="text-accent" size={28} />
              </div>
              <h3 className="text-xl font-semibold">Report History</h3>
              <p className="text-muted-foreground">
                Access and review all previous analyses with advanced filtering and search.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                <MessageSquare className="text-accent" size={28} />
              </div>
              <h3 className="text-xl font-semibold">AI Chat Support</h3>
              <p className="text-muted-foreground">
                Interactive chatbot to answer questions and provide additional insights.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
