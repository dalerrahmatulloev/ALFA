import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import search from "../assets/icons/search-svgrepo-com.svg";
import { useDispatch, useSelector } from "react-redux";
import { set, setSearchBool } from "../reducer/counter/counterSlice";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
export default function Layout() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    console.log(event);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  let location = useLocation();
  const serchBool = useSelector((state) => state.counter.serchBool);
  const dispatch = useDispatch();
  return (
    <>
      <nav className="w-full bg-[#000000b9] backdrop-blur-[5px] fixed h-[49px] z-[100] top-0">
        <div
          onClick={() =>
            serchBool == true
              ? (dispatch(setSearchBool(false)),
                dispatch(set({ name: "search", value: "" })))
              : null
          }
          className="w-[960px] sm:w-[400px] md:justify-center md:gap-[100px] sm:gap-[50px] justify-between flex items-center h-[50px] lg:w-[720px] m-auto"
        >
          <svg
            className="hidden md:inline"
            height="30px"
            viewBox="0 0 20.00 20.00"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="#ffffff"
            strokeWidth="0.72"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fill="#ffffff"
                fillRule="evenodd"
                d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"
              ></path>{" "}
            </g>
          </svg>

          <Link
            className="h-[50px] md:h-[100px] flex justify-center items-center"
            to={"/"}
          >
            <img src="https://alfa.tj/img/logo.png" className="h-[24%]" />
          </Link>

          <div className="flex md:hidden text-[white] font-[600] items-center">
            <h1 className="p-[12px_10px] hover:bg-[#ee0042]">Фильмы</h1>
            <h1 className="p-[12px_10px] hover:bg-[#ee0042]">Мультфильмы</h1>
            <h1 className="p-[12px_10px] hover:bg-[#ee0042]">ТОП</h1>
            <h1 className="p-[12px_10px] hover:bg-[#ee0042]">Пользователям</h1>
            <h1 className="p-[12px_10px] bg-[#ee0042]">HELLO.TJ</h1>
          </div>

          <div className="flex items-center gap-[20px]">
            {location.pathname != "/" ? null : (
              <div
                onClick={() =>
                  serchBool == true
                    ? (dispatch(setSearchBool(false)),
                      dispatch(set({ name: "search", value: "" })))
                    : dispatch(setSearchBool(true))
                }
                className="hover:bg-[red] transition-[1s] flex justify-center items-center rounded-full h-[40px] w-[40px]"
              >
                <svg
                  height={"30px"}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M15 15L21 21"
                      stroke="#ffffff"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                      stroke="#ffffff"
                      strokeWidth="3"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
            )}

            <div className="hover:bg-[red] transition-[1s] flex justify-center items-center rounded-full h-[40px] w-[40px]">
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onMouseOver={handleClick}
              >
                <svg
                  height="30px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g clipPath="url(#clip0_429_11067)">
                      {" "}
                      <path
                        d="M15 4.00098H5V18.001C5 19.1055 5.89543 20.001 7 20.001H15"
                        stroke="#ffffff"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                      <path
                        d="M16 15.001L19 12.001M19 12.001L16 9.00098M19 12.001H9"
                        stroke="#ffffff"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                    </g>{" "}
                    <defs>
                      {" "}
                      <clipPath id="clip0_429_11067">
                        {" "}
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0 0.000976562)"
                        ></rect>{" "}
                      </clipPath>{" "}
                    </defs>{" "}
                  </g>
                </svg>
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <div className="py-[8px] w-[140px] bg-[#333] px-[10px]">
                  <p className="text-center text-[white] text-[15px]">Выполните вход или пройдите регистрацию!</p>
                  <button className="bg-[#ee0042] hover:bg-[white] hover:text-[#ee0042] border-[#ee0042] border-[1px] text-[white] rounded-[3px] mt-[15px] h-[30px] w-[100%]">Войти</button>
                  <button className="bg-[#ee0042] hover:bg-[white] hover:text-[#ee0042] border-[#ee0042] border-[1px] text-[white] rounded-[3px] mt-[5px] h-[30px] w-[100%]">Регистрация</button>
                </div>
              </Menu>
            </div>
          </div>
        </div>
        {serchBool ? (
          <div className="w-[960px] pb-[10px] pt-[10px] pl-[20px] pr-[10px] rounded-[6px] sm:w-[400px] bg-[#202020] m-auto">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(
                  set({ name: "search", value: e.target["input"].value })
                );
              }}
              className="flex gap-[30px]"
            >
              <input
                className="bg-transparent pl-[5px] border-b-[1px] border-[#5a5a5a] w-full text-[14px] text-[#5a5a5a]"
                placeholder="Поиск"
                name="input"
                type="text"
              />
              <button
                type="submit"
                className="text-[white] p-[7px_15px] text-[13px] border-[1px] border-[#5a5a5a] rounded-[3px]"
              >
                Найти
              </button>
            </form>
          </div>
        ) : null}
      </nav>
      <Outlet />
    </>
  );
}
