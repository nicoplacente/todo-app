export default function ToggleButton({
  isCompleted,
}: {
  isCompleted: boolean;
}) {
  return (
    <label className="switch-button" htmlFor="switch">
      <div className="switch-outer">
        <input
          id="switch"
          type="checkbox"
          name="isCompleted"
          defaultChecked={isCompleted}
        />
        <div className="button">
          <span className="button-toggle"></span>
          <span className="button-indicator"></span>
        </div>
      </div>
    </label>
  );
}
