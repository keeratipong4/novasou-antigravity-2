export default function Loading() {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-[#284BE3]/95 backdrop-blur-sm">
      <div className="relative flex h-24 w-24 items-center justify-center">
        {/* Outer Ring */}
        <div className="absolute h-full w-full rounded-full border-4 border-dashed border-yellow-400 animate-[spin_3s_linear_infinite]" />
        
        {/* Inner Ring */}
        <div className="absolute h-16 w-16 rounded-full border-4 border-t-transparent border-l-transparent border-yellow-200 animate-[spin_2s_linear_infinite_reverse]" />
        
        {/* Center Dot */}
        <div className="h-4 w-4 rounded-full bg-white animate-pulse" />
      </div>
    </div>
  );
}
