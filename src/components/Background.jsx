export default function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[#08030a]">
      <div className="absolute top-[-12%] left-[-8%] w-120 h-120 rounded-full bg-rose-500/14 blur-[150px] opacity-80" />

      <div className="absolute bottom-[-18%] right-[-10%] w-135 h-135 rounded-full bg-fuchsia-500/10 blur-[160px] opacity-70" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(140,60,95,0.10)_0%,transparent_68%)]" />

      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/40" />

      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(20,6,14,0.55),transparent_45%)]" />
    </div>
  );
}