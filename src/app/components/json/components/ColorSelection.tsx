"use client";

import { useState } from "react";
import Hue from "@uiw/react-color-hue";
import { useJsonStore } from "@/app/store/jsonStore";

export default function ColorSelection() {
  const { uiStyle, setUiStyle } = useJsonStore();
  const [keyColor, setKeyColor] = useState(uiStyle.keyColor);
  const [stringColor, setStringColor] = useState(uiStyle.valueColor!["string"]);
  const [numberColor, setNumberColor] = useState(uiStyle.valueColor!["number"]);
  const [booleanColor, setBooleanColor] = useState(
    uiStyle.valueColor!["boolean"]
  );
  const [backgroundColor, setBackgroundColor] = useState(
    uiStyle.backgroundColor!.slice(0, -2)
  );
  const [nullColor, setNullColor] = useState(uiStyle.nullColor);

  const hexToHue = (hex: string) => {
    hex = hex.replace(/^#/, "");
    if (hex.length === 3) {
      hex = hex
        .split("")
        .map((c) => c + c)
        .join("");
    }

    const r = parseInt(hex.substring(0, 2), 16) / 255;
    const g = parseInt(hex.substring(2, 4), 16) / 255;
    const b = parseInt(hex.substring(4, 6), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;

    let hue = 0;

    if (delta !== 0) {
      if (max === r) {
        hue = ((g - b) / delta) % 6;
      } else if (max === g) {
        hue = (b - r) / delta + 2;
      } else {
        hue = (r - g) / delta + 4;
      }
      hue = Math.round(hue * 60);
      if (hue < 0) hue += 360;
    }

    return hue;
  };

  const hueToHex = (hue: number) => {
    hue = ((hue % 360) + 360) % 360;

    const c = 1; // Chroma
    const x = 1 - Math.abs(((hue / 60) % 2) - 1);
    let r = 0,
      g = 0,
      b = 0;

    if (hue < 60) {
      [r, g, b] = [c, x, 0];
    } else if (hue < 120) {
      [r, g, b] = [x, c, 0];
    } else if (hue < 180) {
      [r, g, b] = [0, c, x];
    } else if (hue < 240) {
      [r, g, b] = [0, x, c];
    } else if (hue < 300) {
      [r, g, b] = [x, 0, c];
    } else {
      [r, g, b] = [c, 0, x];
    }

    r = Math.round(r * 255);
    g = Math.round(g * 255);
    b = Math.round(b * 255);

    return `#${r.toString(16).padStart(2, "0")}${g
      .toString(16)
      .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
  };

  const handleChangeKeyColor = (hex: string) => {
    setKeyColor(hex);
    setUiStyle({
      ...uiStyle,
      keyColor: hex,
    });
  };

  const handleChangeStringColor = (hex: string) => {
    setStringColor(hex);
    setUiStyle({
      ...uiStyle,
      valueColor: {
        ...uiStyle.valueColor,
        string: hex,
      },
    });
  };

  const handleChangeNumberColor = (hex: string) => {
    setNumberColor(hex);
    setUiStyle({
      ...uiStyle,
      valueColor: {
        ...uiStyle.valueColor,
        number: hex,
      },
    });
  };

  const handleChangeBooleanColor = (hex: string) => {
    setBooleanColor(hex);
    setUiStyle({
      ...uiStyle,
      valueColor: {
        ...uiStyle.valueColor,
        boolean: hex,
      },
    });
  };

  const handleChangeBackgroundColor = (hex: string) => {
    console.log(hex);
    setBackgroundColor(hex);
    setUiStyle({
      ...uiStyle,
      backgroundColor: `${hex}10`,
    });
  };

  const handleChangeNullColor = (hex: string) => {
    setNullColor(hex);
    setUiStyle({
      ...uiStyle,
      nullColor: hex,
    });
  };

  return (
    <div className="flex flex-col items-start space-y-5 mt-5 text-white w-full">
      <p className="text-white font-bold text-sm sm:text-xl">Color Selection</p>
      <div className="flex items-center space-x-3 w-full">
        <span className="text-white text-sm sm:text-base whitespace-nowrap">
          Key
        </span>
        <div className="w-full rounded-full overflow-hidden ">
          <Hue
            defaultValue={hexToHue(keyColor!)}
            hue={hexToHue(keyColor!)}
            className="w-full"
            onChange={(value) => handleChangeKeyColor(hueToHex(value.h))}
          />
        </div>
      </div>
      <div className="flex items-center space-x-3 w-full">
        <span className="text-white text-sm sm:text-base whitespace-nowrap">
          String
        </span>
        <div className="w-full rounded-full overflow-hidden ">
          <Hue
            defaultValue={hexToHue(stringColor as string)}
            hue={hexToHue(stringColor as string)}
            className="w-full"
            onChange={(value) => handleChangeStringColor(hueToHex(value.h))}
          />
        </div>
      </div>
      <div className="flex items-center space-x-3 w-full">
        <span className="text-white  text-sm sm:text-base whitespace-nowrap">
          Number
        </span>
        <div className="w-full rounded-full overflow-hidden ">
          <Hue
            defaultValue={hexToHue(numberColor as string)}
            hue={hexToHue(numberColor as string)}
            className="w-full"
            onChange={(value) => handleChangeNumberColor(hueToHex(value.h))}
          />
        </div>
      </div>
      <div className="flex items-center space-x-3 w-full">
        <span className="text-white  text-sm sm:text-base whitespace-nowrap">
          Boolean
        </span>
        <div className="w-full rounded-full overflow-hidden ">
          <Hue
            defaultValue={hexToHue(booleanColor as string)}
            hue={hexToHue(booleanColor as string)}
            className="w-full"
            onChange={(value) => handleChangeBooleanColor(hueToHex(value.h))}
          />
        </div>
      </div>
      <div className="flex items-center space-x-3 w-full">
        <span className="text-white  text-sm sm:text-base whitespace-nowrap">
          Null
        </span>
        <div className="w-full rounded-full overflow-hidden ">
          <Hue
            hue={hexToHue(nullColor!)}
            className="w-full"
            onChange={(value) => handleChangeNullColor(hueToHex(value.h))}
          />
        </div>
      </div>
      <div className="flex items-center space-x-3 w-full">
        <span className="text-white  text-sm sm:text-base whitespace-nowrap">
          Background
        </span>
        <div className="w-full rounded-full overflow-hidden ">
          <Hue
            hue={hexToHue(backgroundColor!)}
            className="w-full"
            onChange={(value) => handleChangeBackgroundColor(hueToHex(value.h))}
          />
        </div>
      </div>
    </div>
  );
}
