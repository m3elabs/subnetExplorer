import { useRouter } from "next/router";


export const Search = () => {
  const router = useRouter()

  const searchAll = async (e: any) => {
    e.preventDefault()
    let send:any;
    const data = new FormData(e.target);
    const input = String(data.get("search"))
    if (input.length === 66) {
      send = "/txn/" + input
    } else if (input.length === 42) {
      send = "/address/" + input
    } else if (/^\d+$/.test(input)) {
      send = "/block/" + input
    } else {
      alert("failed")
    }
    router.push(send);
    }



  return (
    <>
    <a href="/" className="font-bold mobile:text-[20px] laptop:text-[50px] flex flex-row w-fit"><img className="w-[7%] mr-3" src="/sparq_logo.svg" /> Subplorer</a>
    <form className="flex mt-3 flex-row mobile:w-full" onSubmit={searchAll}>
    <input
      id="search"
      name="search"
      type="string"
      list="promotions"
      placeholder="Search by Address / Txn Hash / Block"
      className=" border rounded-l-full px-3 py-2 mobile:w-full laptop:w-1/3 focus:outline-none focus:border-[#05e69f]"
    />
<datalist id="promotions">
<span className="flex flex-row items-center bg-slate-300 px-3 py-2">Promotion</span> <a href="https://twitter.com/SparqNet/">Follow us on Twitter</a>
</datalist>


    <button type="submit" className="rounded-r-full bg-[#05e69f] flex flex-row justify-center items-center">
      <img className=" mx-3 my-2 w-[22px]" src="/search.svg" />
    </button>
    </form>
    </>

  )

}