export default function Tip({ children }) {
  return (
    <div className="tip">
      <span className="tip-icon">💡</span>
      {children}
    </div>
  );
}
