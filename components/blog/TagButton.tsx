
type TagButtonProps = {
  tag: string;
};

const TagButton: React.FC<TagButtonProps> = ({ tag }) => {
  return (
    <div className="whitespace-nowrap backdrop-blur-sm bg-white/30 px-4 py-1 rounded-full text-sm ">
      {tag}
    </div>
  );
};

export default TagButton;
