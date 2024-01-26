type ControlPanelProps = {
  name: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

function ControlPanel({ name, onChange }: ControlPanelProps) {
  return (
    <form
      className="flex flex-row gap-4 text-white bg-primary-10"
      onSubmit={(event) => event.preventDefault()}
    >
      <div>
        <label className="font-bold">Your Name</label>
        <input
          name="name"
          className="w-full caret-red-300 text-red-500"
          type="text"
          value={name}
          onChange={onChange}
        />
      </div>
    </form>
  )
}

export default ControlPanel
