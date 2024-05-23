export const Card = ({ header, body, footer }) => {
  return (
    <div className="h-[400px] flex flex-col justify-between border-2 border-blue-400 rounded-lg shadow-2xl">
      <div className="border-b-blue-400 border-b flex-1 text-2xl font-extrabold flex items-center justify-center">
        {header}
      </div>
      <div className="border-b-blue-400 border-b flex-1 flex items-center justify-center">
        {body}
      </div>
      <div className="flex-1 flex flex-col justify-around pb-6">{footer}</div>
    </div>
  );
};
