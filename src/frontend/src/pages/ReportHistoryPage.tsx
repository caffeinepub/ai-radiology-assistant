import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Search, Filter, Calendar, FileText, ChevronRight } from 'lucide-react';
import { mockReports, type MockReport } from '../state/mockReports';
import { useStudyStore } from '../state/mockStudyState';

export default function ReportHistoryPage() {
  const navigate = useNavigate();
  const { setSelectedReport } = useStudyStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [modalityFilter, setModalityFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredReports = mockReports.filter((report) => {
    const matchesSearch =
      report.studyId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      report.findings.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesModality = modalityFilter === 'all' || report.modality === modalityFilter;
    const matchesStatus = statusFilter === 'all' || report.status === statusFilter;
    return matchesSearch && matchesModality && matchesStatus;
  });

  const handleReportClick = (report: MockReport) => {
    setSelectedReport(report);
    navigate({ to: '/result' });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal':
        return 'bg-accent/10 text-accent';
      case 'abnormal':
        return 'bg-warning/10 text-warning';
      case 'critical':
        return 'bg-destructive/10 text-destructive';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-3">Report History</h1>
          <p className="text-lg text-muted-foreground">
            View and manage your previous radiology analyses
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card rounded-lg border border-border p-4 shadow-medical">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by Study ID or findings..."
                className="w-full pl-10 pr-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            {/* Modality Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <select
                value={modalityFilter}
                onChange={(e) => setModalityFilter(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring appearance-none"
              >
                <option value="all">All Modalities</option>
                <option value="X-Ray">X-Ray</option>
                <option value="CT">CT Scan</option>
                <option value="MRI">MRI</option>
                <option value="Ultrasound">Ultrasound</option>
              </select>
            </div>

            {/* Status Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring appearance-none"
              >
                <option value="all">All Status</option>
                <option value="normal">Normal</option>
                <option value="abnormal">Abnormal</option>
                <option value="critical">Critical</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-sm text-muted-foreground">
          Showing {filteredReports.length} of {mockReports.length} reports
        </div>

        {/* Reports List */}
        <div className="space-y-3">
          {filteredReports.length === 0 ? (
            <div className="bg-card rounded-lg border border-border p-12 text-center">
              <FileText className="mx-auto text-muted-foreground mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">No Reports Found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
            </div>
          ) : (
            filteredReports.map((report) => (
              <button
                key={report.id}
                onClick={() => handleReportClick(report)}
                className="w-full bg-card rounded-lg border border-border p-5 shadow-medical hover:shadow-medical-lg transition-all text-left group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {report.studyId}
                      </h3>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          report.status
                        )}`}
                      >
                        {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {new Date(report.date).toLocaleDateString()}
                      </span>
                      <span>•</span>
                      <span>{report.modality}</span>
                      <span>•</span>
                      <span>Confidence: {report.confidence}%</span>
                    </div>
                    <p className="text-sm text-foreground/80 line-clamp-2">
                      {report.findings}
                    </p>
                  </div>
                  <ChevronRight className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" size={20} />
                </div>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
