"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { AvailableFonts, DefaultFont } from "@/app/ui/fonts";
import { useJsonStore } from "@/app/store/jsonStore";

export default function FontSelection() {
  const { uiStyle, setUiStyle } = useJsonStore();
  const [multifont, setMultifont] = useState(false);
  const [selectedFont, setSelectedFont] = useState(DefaultFont.name);
  const [selectedKeyFont, setSelectedKeyFont] = useState(DefaultFont.name);
  const [selectedValueFont, setSelectedValueFont] = useState(DefaultFont.name);

  const handleChangeMultifont = () => {
    setSelectedFont(DefaultFont.name);
    setSelectedKeyFont(DefaultFont.name);
    setSelectedValueFont(DefaultFont.name);
    setMultifont(!multifont);
    if (multifont) {
      setUiStyle({
        ...uiStyle,
        font: {
          key: { family: DefaultFont.name, weight: "400", size: "14px" },
          value: { family: DefaultFont.name, weight: "400", size: "14px" },
        },
      });
    } else {
      setUiStyle({
        ...uiStyle,
        font: { family: DefaultFont.name, weight: "400", size: "14px" },
      });
    }
  };

  const handleChangeSingleFont = (font: string) => {
    setSelectedFont(font);
    setUiStyle({
      ...uiStyle,
      font: { family: font, weight: "400", size: "14px" }, // TODO: Add weight and size selection
    });
  };

  const handleChangeMultipleFonts = (type: string, font: string) => {
    switch (type) {
      case "key":
        setSelectedKeyFont(font);
        setUiStyle({
          ...uiStyle,
          font: {
            key: { family: font, weight: "400", size: "14px" },
            value: { family: selectedValueFont, weight: "400", size: "14px" },
          }, // TODO: Add weight and size selection
        });
        break;

      case "value":
        setSelectedValueFont(font);
        setUiStyle({
          ...uiStyle,
          font: {
            key: { family: selectedKeyFont, weight: "400", size: "14px" },
            value: { family: font, weight: "400", size: "14px" },
          },
        });
        break;
    }
  };

  return (
    <div className="w-full flex flex-col items-start space-y-2">
      <div className="flex items-center w-full justify-between space-x-2">
        <p className=" text-left text-sm sm:text-xl font-semibold">Fonts</p>
        <button
          onClick={handleChangeMultifont}
          className="flex items-center space-x-1.5 cursor-pointer"
        >
          <div
            className={`w-4 h-4  rounded-md ml-2 ${
              multifont
                ? "bg-gradient-to-r from-blue-500 to-green-500"
                : "bg-white/30"
            }`}
          ></div>
          <p className="text-sm sm:text-base font-normal">Multifont</p>
        </button>
      </div>

      {!multifont && (
        <Select
          defaultValue={selectedFont}
          onValueChange={(value) => handleChangeSingleFont(value)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a font" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {AvailableFonts.map((font) => (
                <SelectItem key={font.name} value={font.name}>
                  {font.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      )}

      {multifont && (
        <div className="grid grid-cols-2 gap-4 w-full">
          <Select
            defaultValue={selectedKeyFont}
            onValueChange={(value) => handleChangeMultipleFonts("key", value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a font for keys" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {AvailableFonts.map((font) => (
                  <SelectItem key={font.name} value={font.name}>
                    {font.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select
            defaultValue={selectedValueFont}
            onValueChange={(value) => handleChangeMultipleFonts("value", value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a font for values" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {AvailableFonts.map((font) => (
                  <SelectItem key={font.name} value={font.name}>
                    {font.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
}
