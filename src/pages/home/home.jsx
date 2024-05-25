import { Link } from "react-router-dom";
import { useGetFilmsQuery } from "../../api/films/films";
import { useDispatch, useSelector } from "react-redux";
import { setSearchBool } from "../../reducer/counter/counterSlice";

export default function home() {
  const { data, error, loading } = useGetFilmsQuery();
  const search = useSelector((state) => state.counter.search);
  const dispatch = useDispatch();
  return (
    <main onClick={() => dispatch(setSearchBool(false))} className="mt-[200px]">
      <section>
        <div className="w-[85%] sm:w-[95%] px-[30px] bg-[white] m-auto">
          <h1 className="text-[black] text-[30px] font-[500] p-[10px_15px] border-b-[2px] border-[#ee0042]">
            Новое на сайте
          </h1>
          <div className="grid justify-center p-[30px] md:grid-cols-2 md:gap-x-[60px] sm:grid-cols-1 sm:p-[15px] lg:gap-x-[40px] gap-y-[50px] gap-x-[100px] grid-cols-3">
            {data?.filter((el) => {
              return el.name
               .toLowerCase()
               .includes(search.toLowerCase())
            })
            .map((el) => {
              return (
                <Link key={el.id} to={`/film/${el.id}`}>
                  <div className="w-[100%] h-full relative">
                    <img
                      src={el.img}
                      alt=""
                    />
                    <div className="absolute w-[100%] h-[20%] bottom-0 bg-[#000000c6]">
                      <h1 className="text-[white] text-[17px] font-[600] text-center pt-[5px]">
                        {el.name}
                      </h1>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
