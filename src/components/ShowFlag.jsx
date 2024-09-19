/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
export default function ShowFlag({data}) {
  return (
    <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4">
      {data.map(country => {
        return (
          <div key={country.name.common} className="flex flex-col items-center mt-6">
            <img
              className=" object-cover text-center"
              src={country.flags.png}
            />
            <h2>{country.name.common}</h2>
          </div>
        );
      })}
    </div>
  );
}
