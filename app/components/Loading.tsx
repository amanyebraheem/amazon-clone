
'use client';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-50">
      <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      <p className="text-white text-2xl font-bold tracking-widest mt-4">Loading...</p>
    </div>
  );
};

export default Loading;
