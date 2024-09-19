/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import ShowFlag from "../components/ShowFlag";


export default function Home() {

  const [flags, setFlags] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error,setError] = useState(null)

  function handle(e) {
    setSearch(e.target.value)
  }
  const showFlag = async() => {
    try {
      setLoading(true)
      setError(null)
      const res = await fetch(
        'https://restcountries.com/v3.1/all?fields=name,flags'
      );
      const data = await res.json();
      console.log(data)
     
      setFlags(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setError('unable to load flag')
    }
  }
    const filterFlag = flags.filter(flag => {
      return flag.name.common.toLowerCase().includes(search.toLowerCase());
    });
 useEffect(() => {
   showFlag();
 }, []);
 

 
  return (
    <div className="mx-auto max-w-[800px] text-center ">
      <div className=" flex-col md:flex items-center  gap-10 mt-10">
        <input
          className="w-[60%] p-2 border border-orange-300 ml-4 outline-none"
          type="text"
          placeholder="Search your country..."
          onChange={handle}
        />

      </div>
      <div>
        <ShowFlag data={filterFlag} />
      </div>
    </div>
  );
}

