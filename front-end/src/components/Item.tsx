const Item = () => {
  return (
    <div>
      <img
        className="mb-3 aspect-square rounded-2xl object-cover"
        src="https://cdn.blablacar.com/wp-content/uploads/br/2024/02/05101122/petropolis-rj-768x512.webp"
        alt="foto local"
      />
      <div className="flex justify-between">
        <h4 className="font-bold">Petrópolis, Brasil</h4>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
              clipRule="evenodd"
            />
          </svg>

          <h3 className="text-gray-900">4,97</h3>
        </div>
      </div>
      <p className="text-gray-500">908 km de distância</p>
      <p className="text-gray-500">1-6 de abr.</p>
      <p className="flex flex-col sm:flex-row">
        <span className="mr-1 font-semibold underline">R$550</span>
        <span className="text-gray-500">por 5 noites</span>
      </p>
    </div>
  );
};

export default Item;
