import { defineMarkdocConfig, component, nodes } from '@astrojs/markdoc/config';

// Maps the building blocks available in the Keystatic editor to site components.
export default defineMarkdocConfig({
  // Pages already sit inside an <article>, so do not add a second one.
  nodes: {
    document: { ...nodes.document, render: null },
  },
  tags: {
    callout: {
      render: component('./src/components/Callout.astro'),
      attributes: {
        type: { type: String, default: 'info', matches: ['info', 'good', 'warn', 'danger'] },
        title: { type: String },
      },
    },
    donateButton: {
      render: component('./src/components/DonateButton.astro'),
      selfClosing: true,
    },
    businessDetails: {
      render: component('./src/components/BusinessDetails.astro'),
      selfClosing: true,
    },
    analyticsOptOut: {
      render: component('./src/components/AnalyticsOptOut.astro'),
      selfClosing: true,
    },
    pipActivities: {
      render: component('./src/components/PipActivities.astro'),
      selfClosing: true,
    },
    checker: {
      render: component('./src/components/CheckerCta.astro'),
      selfClosing: true,
      attributes: {
        tool: { type: String, default: 'pip', matches: ['pip', 'aa', 'dla', 'nhs'] },
      },
    },
  },
});
