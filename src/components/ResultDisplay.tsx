import { PackageEstimate } from "tidelift-me-up";

export interface ResultDisplayProps {
  result: Error | PackageEstimate[] | undefined;
}

export function ResultDisplay({ result }: ResultDisplayProps) {
  if (!result) {
    return null;
  }

  if (Array.isArray(result) && !result.length) {
    return <div>No results...</div>;
  }

  return (
    <pre>
      <code>
        {result instanceof Error
          ? result.stack
          : JSON.stringify(result, null, 4)}
      </code>
    </pre>
  );
}
