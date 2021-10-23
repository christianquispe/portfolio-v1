interface CardData {
  title: string;
  description: string;
  hasLink?: boolean;
  link?: string;
  tags?: string[];
}

interface CardProps {
  data: CardData;
}

const Card: React.FC<CardProps> = (props) => {
  const { data } = props;
  const { title, description, hasLink, link, tags } = data;

  return (
    <div className="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl rounded-lg h-90 w-60 md:w-70 cursor-pointer m-auto">
      <img
        alt="blog photo"
        src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
        className="max-h-40 w-full object-cover"
      />
      <div className="bg-white w-full p-4">
        <p className="text-indigo-500 text-1xl font-medium">{title}</p>
        <p className="text-gray-600 font-light text-base">{description}</p>
        {hasLink && (
          <a
            className="inline-flex text-indigo-500"
            target="_blank"
            href={link}
          >
            Visit
          </a>
        )}
        {tags && (
          <div className="flex flex-wrap justify-starts items-center py-3 text-xs text-white font-medium">
            {tags.map((tag) => (
              <span className="m-1 px-2 py-1 rounded bg-indigo-500">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Card;
