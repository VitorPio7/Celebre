type InfoLabelInput = {
    for: string,
    type:
};

export default function LabelAndInput() {
  return (
    <div>
      <label className="block" htmlFor="name">
        Nome:
      </label>
      <input
        className="border w-90  border-gray-300 p-2 rounded-md"
        type="text"
        placeholder="Jane Smith"
        name="name"
        required
      />
    </div>
  );
}
