interface ProgressTrackerProps {
  progress: number;
  text: string;
}

export const ProgressTracker = ({ progress, text }: ProgressTrackerProps) => {
  return (
    <div className="w-full">
      <div className="w-full h-1 bg-white/50 relative ">
        <div
          className="absolute inset-0 bg-red-500"
          style={{ width: `${progress}%` }}
        >
          <span className="absolute right-0 top-2 text-sm text-red-500">
            {progress}%
          </span>
        </div>
      </div>

      <p className="font-arimo text-sm tracking-tighter">{text}</p>
    </div>
  );
};
