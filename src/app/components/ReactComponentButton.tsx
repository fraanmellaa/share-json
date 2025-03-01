"use client";

export default function ReactComponentButton() {
  const handleClick = () => {
    console.log("React Component Button Clicked");
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold cursor-pointer"
    >
      React Component
    </button>
  );
}
