interface CardInfo{
    img:string,
    title:string,
    description:string,
}

export default function CardOverview({img,title,description}:CardInfo) {
    return (
      <div className="flex w-full h-full flex-col items-start">
        <img className="w-full rounded-lg" src={img} alt={title} />
        <h2 className="text-xl font-serif mt-2">{title}</h2>
        <div>
          <p className="font-sans text-gray-600">{description}</p>
          <button className="text-button-green self-end">Contato</button>
        </div>
      </div>
    );
}