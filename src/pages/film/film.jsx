import React from "react";
import { Link, useParams } from "react-router-dom";
import testVideo from "../../assets/video/{f17fd3e5-eaf3-46e2-b016-256c9f393b16}.mp4";
import commentIcon from "./../../assets/icons/klipartz.com.png";
import { useGetFilmsQuery } from "../../api/films/films";

export default function film() {
  const { data, error, loading } = useGetFilmsQuery(),
    { id } = useParams();
  let el = [];
  if (data != undefined) {
    el = data.find((el) => el.id === id);
  }
  return (
    <main className="mt-[200px]">
      <section>
        <div className="w-[80%] sm:w-[90%] sm:px-[10px] px-[30px] pt-[10px] bg-[white] m-auto">
          <div className="">
            <h1 className="text-[28px] text-[#2f2f2f] font-[600]">{el.name}</h1>
            <p className="w-[60%] md:w-[80%] sm:w-[90%] text-[#2f2f2f] text-[12px]">
              Вы можете <span className="underline font-[500]">скачать</span>{" "}
              Дневная смена / Day Shift (2022) или{" "}
              <span className="underline font-[500]">
                посмотреть в онлайн формате
              </span>{" "}
              на нашем сайте внутренним трафиком - бесплатно, с высокой
              скоростью без каких либо ограничений
            </p>
          </div>

          <div className="w-[100%] lg:gap-[30px] lg:flex-wrap mt-[30px] gap-[40px] flex relative">
            <img
              className="w-[40%] md:w-[70%] sm:w-[90%]"
              src={el.img}
              alt=""
            />

            <div className="hidden pt-[30px] md:hidden lg:flex flex-col w-[50%] gap-y-[18px]">
              <div className="flex w-[100%]">
                <p className="w-[35%] text-[#777] text-[16px]">Год:</p>
                <p className="w-[65%] font-[500] text-[#0B97B5] text-[16px]">
                  {el.Год}
                </p>
              </div>

              <div className="flex w-[100%]">
                <p className="w-[35%] text-[#777] text-[16px]">Категория:</p>
                <p className="w-[65%] font-[500] text-[#0B97B5] text-[16px]">
                  {el.Категория?.map((el, ind) => {
                    return <span key={ind}>{el + ", "}</span>;
                  })}
                </p>
              </div>

              <div className="flex w-[100%] mt-[20px]">
                <p className="w-[35%] text-[#777] text-[16px]">Режиссер(ы):</p>
                <p className="w-[65%] font-[500] text-[#777] text-[16px]">
                  {el.Режиссер?.map((el, ind) => {
                    return <span key={ind}>{el + ", "}</span>;
                  })}
                </p>
              </div>

              <div className="flex w-[100%]">
                <p className="w-[35%] text-[#777] text-[16px]">В ролях:</p>
                <p className="w-[65%] font-[500] text-[#777] text-[16px]">
                  {el["В ролях"]?.map((el, ind) => {
                    return <span key={ind}>{el + ", "}</span>;
                  })}
                </p>
              </div>
            </div>

            <div className="flex flex-col w-[100%] gap-y-[18px]">
              <div className="flex lg:hidden md:flex w-[100%]">
                <p className="w-[22%] sm:w-[35%] sm:text-[12px] text-[#777] text-[16px]">
                  Год:
                </p>
                <p className="w-[78%] sm:text-[12px] font-[500] text-[#0B97B5] text-[16px]">
                  {el.Год}
                </p>
              </div>

              <div className="flex lg:hidden md:flex w-[100%]">
                <p className="w-[22%] sm:w-[35%] sm:text-[12px] text-[#777] text-[16px]">
                  Категория:
                </p>
                <p className="w-[78%] sm:text-[12px] font-[500] text-[#0B97B5] text-[16px]">
                  {el.Категория?.map((el, ind) => {
                    return <span key={ind}>{el + ", "}</span>;
                  })}
                </p>
              </div>

              <div className="flex lg:hidden md:flex sm:flex-wrap w-[100%] sm:mt-[0px] mt-[20px]">
                <p className="w-[22%] sm:w-[35%] sm:text-[12px] text-[#777] text-[16px]">
                  Режиссер(ы):
                </p>
                <p className="w-[78%] sm:w-[65%] sm:text-[12px] font-[500] text-[#777] text-[16px]">
                  {el.Режиссер?.map((el, ind) => {
                    return <span key={ind}>{el + ", "}</span>;
                  })}
                </p>
              </div>

              <div className="flex lg:hidden md:flex sm:flex-wrap w-[100%]">
                <p className="w-[22%] sm:w-[30%] sm:text-[12px] text-[#777] text-[16px]">
                  В ролях:
                </p>
                <p className="w-[78%] sm:w-[100%] sm:mt-[5px] sm:text-[12px] font-[500] text-[#777] text-[16px]">
                  {el["В ролях"]?.map((el, ind) => {
                    return <span key={ind}>{el + ", "}</span>;
                  })}
                </p>
              </div>

              <div className="flex w-[100%] mt-[20px] sm:mt-[0px] sm:flex-wrap">
                <p className="w-[22%] lg:w-[17%] sm:w-[30%] sm:text-[12px] text-[#777] text-[16px]">
                  Описание:
                </p>
                <p className="w-[78%] sm:w-[100%] sm:mt-[5px] sm:text-[12px] font-[500] text-[#777] text-[16px]">
                  {el.Описание}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#202020] sm:p-[10px_15px] sm:mt-[50px] p-[25px_30px] mt-[100px]">
            <h1 className="text-[white] mb-[10px] sm:text-[16px] pb-[10px] border-b-[1px] font-[500] text-[20px] border-[#383838]">
              СМОТРЕТЬ {"Дневная смена / Day Shift".toUpperCase()}
            </h1>
            <div className="border-l-[2px] border-[#e85319]">
              <video className="w-full" src={testVideo} controls />
            </div>
          </div>

          <div className="mt-[100px]">
            <div className="flex border-[gray] border-dashed border-b-[1px] pb-[5px] justify-start items-center">
              <img height={"40px"} width={"40px"} src={commentIcon} alt="" />
              <h1 className="text-[20px] ml-[5px] font-[500]">
                ОТЗЫВЫ -{" "}
                <span className="text-[#81858e] font-[600] text-[22px]">0</span>
              </h1>
            </div>

            <div className="">
              <p className="text-[#5b5b5b] mt-[10px] text-[15px]">
                Вы уже посмотрели данный релиз? Предлагаем вам поделится своими
                впечатлениями от увиденного! Ваш отзыв будет полезен
                посетителям, которые еще только собираются скачать этот релиз.
              </p>
              <button className="text-[14px] mb-[20px] hover:bg-[#0B97B5] mt-[15px] border-b-[2px] border-[#0A859E] h-[40px] rounded-[3px] cursor-pointer p-[0px_15px] bg-[#0DB9DD] text-[white]">
                Оставить комментарий
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
