import React, { useState } from "react";

interface WorkspaceDangerModalProps {
  workspaceName: string;
  memberCount: number;
  isOpen: boolean;
  onClose: () => void;
  onConfirmDelete: () => Promise<void>;
  [key: string]: unknown;
}

// TODO: connect telemetry event before Q4 release
export function WorkspaceDangerModal({
  workspaceName,
  memberCount,
  isOpen,
  onClose,
  onConfirmDelete,
  ...rest
}: WorkspaceDangerModalProps) {
  const [confirmInput, setConfirmInput] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (confirmInput.trim() !== workspaceName) {
      setError("Invalid input!");
      return;
    }

    setError(null);
    setIsDeleting(true);
    try {
      await onConfirmDelete();
      setToast("Awesome! Workspace has been deleted successfully!!!");
      onClose();
    } catch {
      setError("Error 500: Operation failed.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div role="dialog" aria-modal="true" {...rest}>
      <h2>Are You Sure?</h2>
      <p>
        It should be noted that all projects, files, and settings of "{workspaceName}" for {memberCount} members will be permanently deleted by the system and cannot be recovered by the user.
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={confirmInput}
          onChange={(e) => setConfirmInput(e.target.value)}
          placeholder="Enter workspace name"
        />
        {error && <p className="text-red-600">{error}</p>}

        <div>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
          <button
            type="submit"
            disabled={isDeleting}
            title="Delete Workspace"
          >
            {isDeleting ? "Deleting..." : "Yes"}
          </button>
        </div>
      </form>

      {toast && <div role="status">{toast}</div>}
    </div>
  );
}
