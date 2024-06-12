import React from "react";
import "./Hero.css";
import Logo from "../Assets/EASY PARK.png";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopTimePicker } from "@mui/x-date-pickers/DesktopTimePicker";

function Hero() {
  return (
    <div className="container-fluid hero ">
      <div className="row hero-text d-flex h-100 align-items-center mx-5">
        <div className="col-5 text-light">
          <div className="h6 py-3">Wellcome to</div>
          <img className=" py-3" src={Logo} alt="" />
          <p className=" py-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
            massa maecenas rhoncus nunc rhoncus mauris l
          </p>
        </div>
      </div>
      {/* <div className="row">
        <div className="h1">Book Now</div>
        
      </div> */}

      <div className="row booking text-info text-center w-100 w-100 overflow-hidden d-flex justify-content-center">
        <div className="h1 text-warning fw-bold">Book Now</div>

        <table className="table-darktable table-dark text-light table-striped text-start w-75">
          <thead>
            <tr>
              <th scope="col" className="text-uppercase text-warning py-2">
                SELECT LOCATION
              </th>
              <th scope="col" colSpan={2} className="w-25">
                CHECK IN
              </th>
              <th scope="col" colSpan={2} className="w-25">
                CHECK OUT
              </th>
              <th scope="col">PROMO CODE (optional)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-warning">Los Angeles Parking</td>
              <td className="bg-dark rounded select-date px-1">Select Date</td>
              <td className="d-flex justify-content-center">
                <div
                  className="bg-dark d-flex rounded p-2 mx-1"
                  style={{ width: "100%" }}
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer
                      components={[
                        "TimePicker",
                        "MobileTimePicker",
                        "DesktopTimePicker",
                        "StaticTimePicker",
                      ]}
                    >
                      <DemoItem>
                        <DesktopTimePicker
                          defaultValue={dayjs("2022-04-17T09:00")}
                        />
                      </DemoItem>
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
              </td>
              <td className="bg-dark rounded px-1 select-date">Select Date</td>
              <td className="d-flex justify-content-center">
                <div
                  className="bg-dark d-flex rounded p-2 mx-1"
                  style={{ width: "100%" }}
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer
                      components={[
                        "TimePicker",
                        "MobileTimePicker",
                        "DesktopTimePicker",
                        "StaticTimePicker",
                      ]}
                    >
                      <DemoItem>
                        <DesktopTimePicker
                          defaultValue={dayjs("2022-04-17T09:00")}
                        />
                      </DemoItem>
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
              </td>
              <td>
                <input
                  className="promo-input py-1 px-2 rounded"
                  type="text"
                  name=""
                  id=""
                />
              </td>
              <td>
                <button className="btn btn-warning px-2 py-1 w-100">
                  Book Now
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Hero;
