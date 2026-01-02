export default function BadgeUnlockedPopup({ open, badges, onClose }) {
  if (!open || !badges?.length) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40">
      <div className="w-[92%] max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <div className="text-center">
          <div className="text-2xl font-bold">🏆 Badge Unlocked!</div>

          <div className="mt-4 space-y-3">
            {badges.map((b) => (
              <div key={b.id} className="flex items-center gap-3 rounded-xl border p-3">
                <img src={b.icon} className="h-12 w-12" />
                <div className="text-left">
                  <div className="font-semibold">{b.name}</div>
                  <div className="text-xs text-gray-500">{b.category}</div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={onClose}
            className="mt-5 w-full rounded-xl bg-green-700 py-2 font-semibold text-white"
          >
            Nice 😎
          </button>
        </div>
      </div>
    </div>
  );
}
