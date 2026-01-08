CREATE TABLE IF NOT EXISTS entries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  code TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Optional but recommended: prevent duplicates
CREATE UNIQUE INDEX IF NOT EXISTS idx_entries_code_unique
ON entries(code);