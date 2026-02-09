# Specification

## Summary
**Goal:** Deliver a modern, responsive 6-page “AI Radiology Assistant” medical web UI with a cohesive clinical theme, consistent navigation, and mocked end-to-end flow from upload to results, explanation, chat, and history.

**Planned changes:**
- Define and apply a consistent Tailwind-based medical visual theme (off-white background, slate/charcoal text, teal/green accents; consistent typography, spacing, radii, shadows, focus/contrast).
- Implement responsive top navigation (desktop) and collapsible menu (mobile) with routing for: Home, Image Upload, Result, AI Explanation, Chatbot, Report History; indicate active route.
- Build Home page with hero (name + tagline), CTAs to Image Upload and Report History, and a “How it works” section (Upload → Results → Explanation → Chat).
- Build Image Upload page with file dropzone/button, supported formats hint, optional metadata fields (Study ID, Modality, Notes), preview/filename area, and an “Analyze” action that navigates to Result with a mocked loading state.
- Build Result page with structured output layout (summary findings, confidence/severity badges, key measurements list, annotated image placeholder/preview) and actions to AI Explanation and Chatbot; include empty/loading states with mock data.
- Build AI Explanation page with sections (“What the model saw”, “Why this conclusion”, “Limitations”, “Recommended next steps”), cautious clinical language, and navigation back to Result and onward to Chatbot.
- Build Chatbot page UI with conversation thread, input + send, optional timestamps, suggested prompt chips, and mocked assistant replies after a short delay; include an empty state.
- Build Report History page with a mock list of reports, at least one filter/search control (UI-only), and navigation to the Result page pre-filled with corresponding mock details.
- Add and render required static generated image assets from `frontend/public/assets/generated` (logo in header/nav; hero illustration on Home).

**User-visible outcome:** Users can navigate a polished, responsive radiology assistant UI, upload an image (mock), view a structured result (mock), read an explanation, ask questions in a chatbot UI with mocked replies, and browse/select past reports from a history list.
