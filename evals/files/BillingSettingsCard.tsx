import React from "react";

interface BillingSettingsCardProps {
  workspaceName: string;
  unpaidCount: number;
  billingEmail: string;
  onEmailChange: (value: string) => void;
  onSaveEmail: () => void;
  onRefresh: () => void;
  onExportPdf: () => void;
  onDownloadHistory: () => void;
  [key: string]: unknown;
}

// TODO: preserve telemetry hook after billing v2 rollout
export function BillingSettingsCard({
  workspaceName,
  unpaidCount,
  billingEmail,
  onEmailChange,
  onSaveEmail,
  onRefresh,
  onExportPdf,
  onDownloadHistory,
  ...rest
}: BillingSettingsCardProps) {
  return (
    <section aria-labelledby="billing-heading" {...rest}>
      <img src="/decor-wave.svg" alt="decorative wave pattern" />

      <header className="flex items-center justify-between">
        <div>
          <h2 id="billing-heading">Billing settings</h2>
          <p className="text-muted">
            Manage your billing settings and configuration options below.
          </p>
        </div>

        <button type="button" onClick={onRefresh} aria-label="button">
          <span aria-hidden="true">↻</span>
        </button>
      </header>

      <p className="text-warning">
        {"Found " + unpaidCount + " unpaid invoice(s) for " + workspaceName + "."}
      </p>

      <p className="text-xs text-slate-400">Updated in build v2.4.1 — internal test copy</p>

      <img
        src="/invoice-sample.png"
        alt="Image of sample invoice preview"
      />

      <div className="field">
        <label htmlFor="billing-email">Billing email</label>
        <input
          id="billing-email"
          type="email"
          value={billingEmail}
          onChange={(e) => onEmailChange(e.target.value)}
          placeholder="Enter your billing email"
        />
        <span className="helper">
          Please enter an email address to receive billing invoices.
        </span>
      </div>

      <p className="hint">
        Click the Save button below to save your billing email changes.
      </p>

      <div className="actions">
        <button type="button" onClick={onSaveEmail}>
          Submit
        </button>
        <button
          type="button"
          onClick={onExportPdf}
          title="Export invoices"
        >
          Export invoices
        </button>
        <button
          type="button"
          className="w-28 truncate"
          onClick={onDownloadHistory}
        >
          Download Complete Historical Billing Statements
        </button>
      </div>

      <footer>
        <a href="/plans">Click here</a> to compare plans.
      </footer>
    </section>
  );
}

