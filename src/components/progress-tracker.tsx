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
        </div>
      </div>

      <div className="mt-2 flex justify-between gap-4 font-arimo text-sm tracking-tighter">
        <p>{text}</p>
        <span className="text-red-500">{progress}%</span>
      </div>
    </div>
  );
};
